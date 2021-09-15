"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenApproval = void 0;
const typechain_1 = require("@htsoft/core-contracts/dist/typechain");
const react_1 = require("react");
const core_1 = require("@web3-react/core");
const addresses_1 = require("../utils/addresses");
function useTokenApproval(contractAddress, tokenId, spender) {
    const { account, library } = (0, core_1.useWeb3React)();
    const contract = (0, react_1.useMemo)(() => {
        if (!library || !contractAddress) {
            return;
        }
        return typechain_1.Erc721Factory.connect(contractAddress, library.getSigner());
    }, [contractAddress, library]);
    const [approved, setIsApproved] = (0, react_1.useState)(undefined);
    const [owned, setIsOwned] = (0, react_1.useState)(undefined);
    const loadApproval = (0, react_1.useCallback)(async () => {
        setIsApproved(undefined);
        // TODO(iain): add error reporting
        if (account && spender && contract && tokenId !== undefined) {
            setIsOwned((0, addresses_1.addressesMatch)(await contract.ownerOf(tokenId), account));
            setIsApproved(await contract.isApprovedForAll(account, spender));
        }
    }, [contract, setIsApproved, account, spender]);
    (0, react_1.useEffect)(() => {
        loadApproval();
    }, [account, tokenId, spender, contract]);
    function approve() {
        if (!contract || !spender) {
            throw new Error("No connected contract instance || spender address");
        }
        return contract === null || contract === void 0 ? void 0 : contract.setApprovalForAll(spender, true);
    }
    return {
        loading: typeof approved === "undefined",
        approved,
        loadApproval,
        approve,
        owned,
    };
}
exports.useTokenApproval = useTokenApproval;
