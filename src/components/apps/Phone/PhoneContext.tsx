import { createContext } from "react";

export interface PhoneOutletRef {
    onNavbarButtonClick?: (buttonTitle: string) => void;
}

export const OutletRefContext = createContext<React.RefObject<PhoneOutletRef> | null>(null);
