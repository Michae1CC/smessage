
export type PatientDataType = {
    keywords: Array<string>;
    dateSubmitted: `${number}/${number}/${number}`;
    description: string,
}

export type PatientIdentifierType = string;

export type PatientRecordsType = Record<PatientIdentifierType, PatientDataType>;