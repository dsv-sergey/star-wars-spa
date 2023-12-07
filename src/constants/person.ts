import { IPerson, TShortInfoFields, TStringTypeFields } from "types";

export const EXCLUDE_FIELDS: Array<keyof IPerson> = ["name", "url", "created", "edited"];

export const personShortInfoFields: TShortInfoFields = ["homeworld", "birth_year", "height", "mass"];
export const stringTypeFields: TStringTypeFields = ["birth_year", "height", "mass", "eye_color", "hair_color", "skin_color", "gender"];