import { assertOk, badRequest, OperationOutcome, User } from '@medplum/core';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { invalidRequest, repo, sendOutcome } from '../fhir';
import { authenticateToken } from '../oauth';

export const changePasswordValidators = [
  body('oldPassword').notEmpty().withMessage('Missing oldPassword'),
  body('newPassword').isLength({ min: 5 }).withMessage('Invalid password, must be at least 5 characters'),
];

export async function changePasswordHandler(req: Request, res: Response) {
  return authenticateToken(req, res, async () => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendOutcome(res, invalidRequest(errors));
    }

    const [userOutcome, user] = await repo.readResource<User>('User', res.locals.user);
    assertOk(userOutcome);

    const outcome = await changePassword({
      user: user as User,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword
    });

    return sendOutcome(res, outcome);
  });
}

export interface ChangePasswordRequest {
  user: User;
  oldPassword: string;
  newPassword: string;
}

export async function changePassword(request: ChangePasswordRequest): Promise<OperationOutcome> {
  const oldPasswordHash = request.user.passwordHash as string;
  const bcryptResult = await bcrypt.compare(request.oldPassword, oldPasswordHash);
  if (!bcryptResult) {
    return badRequest('Incorrect password', 'oldPassword');
  }

  const newPasswordHash = await bcrypt.hash(request.newPassword, 10);
  const [outcome] = await repo.updateResource<User>({
    ...request.user,
    passwordHash: newPasswordHash
  });

  return outcome;
}