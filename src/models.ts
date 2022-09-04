export interface IData {
    data:IProduct[]
    timestamp:number
}

export interface IGet {
    data:IPriceUsd[]
    priceUsd: string
}

export interface IPriceUsd {
    priceUsd: string
    time: number
    date: string
}

export interface IAxios<T> {
    data:T
}

export interface IProduct {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    marketCapUsd: string
    volumeUsd24Hr:string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
    explorer: string
}