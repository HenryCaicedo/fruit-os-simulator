export interface HomeScreenAppDTO {
    name: string;
    icon: string;
    color?: string;
    route: string;
    applyMask?: boolean;
    url?: string;
}

export interface HomeScreenLayout {
    pages: HomeScreenAppDTO[][];
    dock: HomeScreenAppDTO[];
}