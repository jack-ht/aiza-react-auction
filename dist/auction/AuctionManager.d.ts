import { ReactNode } from "react";
import { Theme, Strings } from "../constants";
import { RenderMediaType } from "../types";
declare type AuctionManagerProps = {
    theme?: Partial<typeof Theme>;
    strings?: Partial<typeof Strings>;
    children: ReactNode;
    renderMedia: RenderMediaType;
};
export declare const AuctionManager: ({ theme, strings, children, renderMedia, }: AuctionManagerProps) => JSX.Element;
export {};
