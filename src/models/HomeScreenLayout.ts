export interface HomeScreenAppDTO {
    name: string;
    icon: string;
    color?: string;
    route: string;
    applyMask?: boolean;
}

export interface HomeScreenLayout {
    pages: HomeScreenAppDTO[][];
    dock: HomeScreenAppDTO[];
}