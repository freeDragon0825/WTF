export interface IAcronym {
    [key: string]: string;
}
export interface IQuery {
    from: number;
    limit: number;
    search: string;
}
