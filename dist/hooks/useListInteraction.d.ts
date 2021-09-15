/// <reference types="react" />
import { ListParamsType } from "../types";
export declare const useListInteraction: (setError: (err: string | undefined) => void, tokenContract: string, tokenId: string, listParams?: ListParamsType) => {
    handleApprove: () => Promise<void>;
    approveTxStatus: import("../types").WalletCallStatus;
    handleCreateAuction: () => Promise<void>;
    listTxStatus: import("../types").WalletCallStatus;
    owned: boolean | undefined;
    approved: boolean | undefined;
    input: JSX.Element;
};
