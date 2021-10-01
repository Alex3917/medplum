/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Age } from './Age';
import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Range } from './Range';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Significant health conditions for a person related to the patient
 * relevant in the context of care for the patient.
 */
export interface FamilyMemberHistory {

  /**
   * This is a FamilyMemberHistory resource
   */
  readonly resourceType: 'FamilyMemberHistory';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  readonly text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  readonly contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Business identifiers assigned to this family member history by the
   * performer or other systems which remain constant as the resource is
   * updated and propagates from server to server.
   */
  readonly identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or
   * other definition that is adhered to in whole or in part by this
   * FamilyMemberHistory.
   */
  readonly instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline,
   * orderset or other definition that is adhered to in whole or in part by
   * this FamilyMemberHistory.
   */
  readonly instantiatesUri?: string[];

  /**
   * A code specifying the status of the record of the family history of a
   * specific family member.
   */
  readonly status?: string;

  /**
   * Describes why the family member's history is not available.
   */
  readonly dataAbsentReason?: CodeableConcept;

  /**
   * The person who this history concerns.
   */
  readonly patient?: Reference;

  /**
   * The date (and possibly time) when the family member history was
   * recorded or last updated.
   */
  readonly date?: string;

  /**
   * This will either be a name or a description; e.g. &quot;Aunt Susan&quot;, &quot;my
   * cousin with the red hair&quot;.
   */
  readonly name?: string;

  /**
   * The type of relationship this person has to the patient (father,
   * mother, brother etc.).
   */
  readonly relationship?: CodeableConcept;

  /**
   * The birth sex of the family member.
   */
  readonly sex?: CodeableConcept;

  /**
   * The actual or approximate date of birth of the relative.
   */
  readonly bornPeriod?: Period;

  /**
   * The actual or approximate date of birth of the relative.
   */
  readonly bornDate?: string;

  /**
   * The actual or approximate date of birth of the relative.
   */
  readonly bornString?: string;

  /**
   * The age of the relative at the time the family member history is
   * recorded.
   */
  readonly ageAge?: Age;

  /**
   * The age of the relative at the time the family member history is
   * recorded.
   */
  readonly ageRange?: Range;

  /**
   * The age of the relative at the time the family member history is
   * recorded.
   */
  readonly ageString?: string;

  /**
   * If true, indicates that the age value specified is an estimated value.
   */
  readonly estimatedAge?: boolean;

  /**
   * Deceased flag or the actual or approximate age of the relative at the
   * time of death for the family member history record.
   */
  readonly deceasedBoolean?: boolean;

  /**
   * Deceased flag or the actual or approximate age of the relative at the
   * time of death for the family member history record.
   */
  readonly deceasedAge?: Age;

  /**
   * Deceased flag or the actual or approximate age of the relative at the
   * time of death for the family member history record.
   */
  readonly deceasedRange?: Range;

  /**
   * Deceased flag or the actual or approximate age of the relative at the
   * time of death for the family member history record.
   */
  readonly deceasedDate?: string;

  /**
   * Deceased flag or the actual or approximate age of the relative at the
   * time of death for the family member history record.
   */
  readonly deceasedString?: string;

  /**
   * Describes why the family member history occurred in coded or textual
   * form.
   */
  readonly reasonCode?: CodeableConcept[];

  /**
   * Indicates a Condition, Observation, AllergyIntolerance, or
   * QuestionnaireResponse that justifies this family member history event.
   */
  readonly reasonReference?: Reference[];

  /**
   * This property allows a non condition-specific note to the made about
   * the related person. Ideally, the note would be in the condition
   * property, but this is not always possible.
   */
  readonly note?: Annotation[];

  /**
   * The significant Conditions (or condition) that the family member had.
   * This is a repeating section to allow a system to represent more than
   * one condition per resource, though there is nothing stopping multiple
   * resources - one per condition.
   */
  readonly condition?: FamilyMemberHistoryCondition[];
}

/**
 * The significant Conditions (or condition) that the family member had.
 * This is a repeating section to allow a system to represent more than
 * one condition per resource, though there is nothing stopping multiple
 * resources - one per condition.
 */
export interface FamilyMemberHistoryCondition {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The actual condition specified. Could be a coded condition (like MI or
   * Diabetes) or a less specific string like 'cancer' depending on how
   * much is known about the condition and the capabilities of the creating
   * system.
   */
  readonly code?: CodeableConcept;

  /**
   * Indicates what happened following the condition.  If the condition
   * resulted in death, deceased date is captured on the relation.
   */
  readonly outcome?: CodeableConcept;

  /**
   * This condition contributed to the cause of death of the related
   * person. If contributedToDeath is not populated, then it is unknown.
   */
  readonly contributedToDeath?: boolean;

  /**
   * Either the age of onset, range of approximate age or descriptive
   * string can be recorded.  For conditions with multiple occurrences,
   * this describes the first known occurrence.
   */
  readonly onsetAge?: Age;

  /**
   * Either the age of onset, range of approximate age or descriptive
   * string can be recorded.  For conditions with multiple occurrences,
   * this describes the first known occurrence.
   */
  readonly onsetRange?: Range;

  /**
   * Either the age of onset, range of approximate age or descriptive
   * string can be recorded.  For conditions with multiple occurrences,
   * this describes the first known occurrence.
   */
  readonly onsetPeriod?: Period;

  /**
   * Either the age of onset, range of approximate age or descriptive
   * string can be recorded.  For conditions with multiple occurrences,
   * this describes the first known occurrence.
   */
  readonly onsetString?: string;

  /**
   * An area where general notes can be placed about this specific
   * condition.
   */
  readonly note?: Annotation[];
}
