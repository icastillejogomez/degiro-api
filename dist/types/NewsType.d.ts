export declare type New = {
    brief: string;
    category: string;
    content: string;
    date: string;
    htmlContent: boolean;
    id: string;
    isins: string[];
    language: string;
    pictureUrl: string;
    source: string;
    title: string;
};
declare type NewsResponse = {
    offset?: number;
    total?: number;
    items: New[];
};
export declare type NewsType = {
    latest: NewsResponse;
    top: NewsResponse;
};
export {};
//# sourceMappingURL=NewsType.d.ts.map