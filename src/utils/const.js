export const AppRoute = {
    MAIN: `/`,
    SELECT: `/select`,
    FORM: `/form`,
    DOCUMENT: `/document`,
};

export const Documents = [
    {
        name: `Ходатойство о вызове свидетеля`,
        reason: `Вызов свидетеля на суд`,
        fields: [`court`, `fullNameRp`, `caseNo`, `witness`, `witnessAddress`, `date`],
        element: `witness`,
    },
    {
        name: `Ходатайство о допуске защитника`,
        reason: `Допуск защитника в суд`,
        fields: [`court`, `fullNameRp`, `defenderVp`, `date`],
        element: `defender`,
    },
]