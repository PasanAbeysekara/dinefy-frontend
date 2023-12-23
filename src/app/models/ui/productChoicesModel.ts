export interface ProductChoice{
    propChoiceId: {
        choiceId: number,
        propId: number
    };
    name: string;
    description: string;
    amount: number;
    amountCurrency: string;
    sysChoice: SysChoice;
}

export interface SysChoice{
    choiceId: number;
    name: string;
    descrption: string;
}
