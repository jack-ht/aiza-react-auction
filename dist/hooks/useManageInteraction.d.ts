/// <reference types="react" />
import { Auction } from "@htsoft/aiza-sdk";
export declare const useManageInteraction: (auction: Auction, setError: (err: string | undefined) => void) => {
    auctionHasEnded: boolean;
    cancelTxStatus: import("../types").WalletCallStatus;
    endAuctionTxStatus: import("../types").WalletCallStatus;
    ethValue: string | undefined;
    handleCancelAuction: () => Promise<void>;
    handleEndAuction: () => Promise<void>;
    handleUpdateReservePrice: () => Promise<void>;
    input: JSX.Element;
    isTokenOwner: boolean;
    setReserveTxStatus: import("../types").WalletCallStatus;
};
