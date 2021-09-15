"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListInteraction = void 0;
const tslib_1 = require("tslib");
const react_1 = require("react");
const units_1 = require("@ethersproject/units");
const constants_1 = require("@ethersproject/constants");
const aiza_wallet_connector_1 = require("@htsoft/aiza-wallet-connector");
const _4_json_1 = (0, tslib_1.__importDefault)(require("@htsoft/auction-contracts/dist/addresses/4.json"));
const _4_json_2 = (0, tslib_1.__importDefault)(require("@htsoft/auction-contracts/dist/addresses/4.json"));
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const useEthAmountInput_1 = require("../components/useEthAmountInput");
const useAuctionHouseHooksContext_1 = require("../hooks/useAuctionHouseHooksContext");
const useTokenApproval_1 = require("../hooks/useTokenApproval");
const types_1 = require("../types");
const useContractTransaction_1 = require("./useContractTransaction");
const DefaultListParams = {
    curatorAddress: constants_1.AddressZero,
    curatorPercentage: 0,
    currencyAddress: constants_1.AddressZero,
    // 60 sec in a min, 60 min in an hour 24 hour in a day = 1 day
    duration: 60 * 60 * 24,
};
const useListInteraction = (setError, tokenContract, tokenId, listParams = DefaultListParams) => {
    const { account, chainId } = (0, aiza_wallet_connector_1.useWeb3Wallet)();
    const { getString } = (0, useThemeConfig_1.useThemeConfig)();
    const { auctionHouse } = (0, useAuctionHouseHooksContext_1.useAuctionHouseHooksContext)();
    const auctionHouseAddress = chainId === 1 ? _4_json_2.default : _4_json_1.default;
    const { approved, owned, approve, loadApproval } = (0, useTokenApproval_1.useTokenApproval)(tokenContract, tokenId, auctionHouseAddress.auctionHouse);
    const { handleTx: handleApproveTx, txStatus: approveTxStatus } = (0, useContractTransaction_1.useContractTransaction)(types_1.ActionType.APPROVE);
    const { handleTx: handleListTx, txStatus: listTxStatus } = (0, useContractTransaction_1.useContractTransaction)(types_1.ActionType.LIST);
    const { ethValue, input } = (0, useEthAmountInput_1.useEthAmountInput)({
        hasMinPrecision: true,
        label: getString("LIST_SET_RESERVE_PRICE_LABEL"),
    });
    const handleCreateAuction = (0, react_1.useCallback)(async () => {
        setError(undefined);
        if (!tokenContract ||
            tokenId === undefined ||
            !auctionHouse ||
            !ethValue ||
            !account) {
            setError("No auction found");
            return;
        }
        try {
            await handleListTx(auctionHouse === null || auctionHouse === void 0 ? void 0 : auctionHouse.createAuction(tokenId, listParams.duration, (0, units_1.parseEther)(ethValue), listParams.curatorAddress, listParams.curatorPercentage, listParams.currencyAddress, tokenContract));
        }
        catch (error) {
            console.error(error);
            setError(`${getString("ERROR_CREATING_AUCTION_PREFIX")} ${error.message}`);
        }
    }, [setError, tokenContract, tokenId, auctionHouse, ethValue, account]);
    const handleApprove = (0, react_1.useCallback)(async () => {
        try {
            await handleApproveTx(approve());
            await loadApproval();
        }
        catch (error) {
            setError(`${getString("ERROR_APPROVING_TOKEN_PREFIX")} ${error.messages}`);
        }
    }, [auctionHouseAddress, approve, loadApproval]);
    return {
        handleApprove,
        approveTxStatus,
        handleCreateAuction,
        listTxStatus,
        owned,
        approved,
        input,
    };
};
exports.useListInteraction = useListInteraction;
