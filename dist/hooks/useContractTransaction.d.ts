import { ContractTransaction } from "@ethersproject/contracts";
import { ActionType, WalletCallStatus } from "../types";
export declare function isWaiting(status: WalletCallStatus): boolean;
export declare function isConfirmed(status: WalletCallStatus): boolean;
export declare function useContractTransaction(action: ActionType, confirmations?: number): {
    txStatus: WalletCallStatus;
    handleTx: (promise: Promise<ContractTransaction>) => Promise<ContractTransaction>;
};
