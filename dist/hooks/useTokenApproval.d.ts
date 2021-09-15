import { ContractTransaction } from "@ethersproject/contracts";
export declare function useTokenApproval(contractAddress?: string, tokenId?: string, spender?: string): {
    loading: boolean;
    approved: boolean | undefined;
    loadApproval: () => Promise<void>;
    approve: () => Promise<ContractTransaction>;
    owned: boolean | undefined;
};
