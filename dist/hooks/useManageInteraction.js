"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useManageInteraction = void 0;
const units_1 = require("@ethersproject/units");
const aiza_wallet_connector_1 = require("@htsoft/aiza-wallet-connector");
const react_1 = require("react");
const utils_1 = require("ethers/lib/utils");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const useEthAmountInput_1 = require("../components/useEthAmountInput");
const useAuctionHouseHooksContext_1 = require("../hooks/useAuctionHouseHooksContext");
const addresses_1 = require("../utils/addresses");
const types_1 = require("../types");
const useContractTransaction_1 = require("./useContractTransaction");
const useManageInteraction = (auction, setError) => {
    const { getString } = (0, useThemeConfig_1.useThemeConfig)();
    const { account } = (0, aiza_wallet_connector_1.useWeb3Wallet)();
    const { auctionHouse, auctionId } = (0, useAuctionHouseHooksContext_1.useAuctionHouseHooksContext)();
    const auctionHasEnded = auction.firstBidTime.gt("0") &&
        new Date().getTime() / 1000 >
            auction.firstBidTime.add(auction.duration).toNumber();
    const { handleTx: handleCancelTx, txStatus: cancelTxStatus } = (0, useContractTransaction_1.useContractTransaction)(types_1.ActionType.CANCEL_AUCTION);
    const { handleTx: handleSetReserveTx, txStatus: setReserveTxStatus } = (0, useContractTransaction_1.useContractTransaction)(types_1.ActionType.UPDATE_RESERVE);
    const { handleTx: handleEndAuctionTx, txStatus: endAuctionTxStatus } = (0, useContractTransaction_1.useContractTransaction)(types_1.ActionType.END_AUCTION);
    const { ethValue, input } = (0, useEthAmountInput_1.useEthAmountInput)({
        hasMinPrecision: true,
        label: getString("UPDATE_RESERVE_PRICE_PRICE_LABEL"),
    });
    const handleCancelAuction = (0, react_1.useCallback)(async () => {
        setError(undefined);
        if (!auctionHouse || auctionId === null) {
            setError("No auction found");
            return;
        }
        try {
            await handleCancelTx(auctionHouse === null || auctionHouse === void 0 ? void 0 : auctionHouse.cancelAuction(auctionId));
        }
        catch (error) {
            console.error(error);
            setError(`Error cancelling auction: ${error.message}`);
        }
    }, [auctionHouse, auctionId, setError, handleCancelTx]);
    const handleEndAuction = (0, react_1.useCallback)(async () => {
        setError(undefined);
        if (!auctionHouse || auctionId === null) {
            setError("No auction found");
            return;
        }
        try {
            await handleEndAuctionTx(auctionHouse === null || auctionHouse === void 0 ? void 0 : auctionHouse.endAuction(auctionId));
        }
        catch (error) {
            console.error(error);
            setError(`Error ending auction: ${error.message}`);
        }
    }, [auctionHouse, auctionId, setError, handleEndAuctionTx]);
    const handleUpdateReservePrice = (0, react_1.useCallback)(async () => {
        setError(undefined);
        if (!auctionHouse || auctionId === null) {
            setError("No auction found");
            return;
        }
        if (ethValue) {
            try {
                await handleSetReserveTx(auctionHouse === null || auctionHouse === void 0 ? void 0 : auctionHouse.setAuctionReservePrice(auctionId, (0, units_1.parseEther)(ethValue)));
            }
            catch (error) {
                console.error(error);
                setError(`Error cancelling auction: ${error.message}`);
            }
        }
        else {
            setError("Invalid reserve price");
        }
    }, [setError, auctionHouse, auctionId, ethValue]);
    const isTokenOwner = (0, utils_1.isAddress)(account) &&
        (0, addresses_1.addressesMatch)(account, auction.tokenOwner);
    return {
        auctionHasEnded,
        cancelTxStatus,
        endAuctionTxStatus,
        ethValue,
        handleCancelAuction,
        handleEndAuction,
        handleUpdateReservePrice,
        input,
        isTokenOwner,
        setReserveTxStatus,
    };
};
exports.useManageInteraction = useManageInteraction;
