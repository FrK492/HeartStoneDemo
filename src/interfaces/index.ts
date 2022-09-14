export interface IHeartStoneResponse {
    [key: string]: IHeartStoneCard[];
}

export interface IHeartStoneCard {
    cardId: string;
    dbfId: string;
    cardSet: string;
    type: string;
    locale: string;
    faction: string;
    name: string;
    playerClass: string;
    text: string;
    img?: string;
    cost?: number;
    attack?: number;
    health?: number;
    artist?: string;
    mechanics?: IMechanics[];
}

export interface IMechanics {
    name: string;
}