/// <reference types="react" />
import { Auction } from "@htsoft/aiza-sdk";
import { BigNumberish } from "ethers";
export declare const useBidInteraction: (auction: Auction, setError: (err: string | undefined) => void) => {
    bidTooLow: boolean;
    bidTxStatus: import("../types").WalletCallStatus;
    userHasEnough: boolean;
    input: JSX.Element;
    minBid: BigNumberish | undefined;
    handleBid: () => Promise<void>;
};
