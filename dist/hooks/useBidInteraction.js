"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBidInteraction = void 0;
const react_1 = require("react");
const units_1 = require("@ethersproject/units");
const aiza_wallet_connector_1 = require("@htsoft/aiza-wallet-connector");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const useEthAmountInput_1 = require("../components/useEthAmountInput");
const useAuctionHouseHooksContext_1 = require("../hooks/useAuctionHouseHooksContext");
const ethers_1 = require("ethers");
const bidInfo_1 = require("../utils/bidInfo");
const types_1 = require("../types");
const useContractTransaction_1 = require("./useContractTransaction");
const useBidInteraction = (auction, setError) => {
    const { account, library } = (0, aiza_wallet_connector_1.useWeb3Wallet)();
    const { getString } = (0, useThemeConfig_1.useThemeConfig)();
    const { auctionHouse, auctionId } = (0, useAuctionHouseHooksContext_1.useAuctionHouseHooksContext)();
    const { handleTx: handleBidTx, txStatus: bidTxStatus } = (0, useContractTransaction_1.useContractTransaction)(types_1.ActionType.PLACE_BID);
    const [userBalance, setUserBalance] = (0, react_1.useState)(undefined);
    const getBalance = (0, react_1.useCallback)(async () => {
        if (library && account) {
            setUserBalance(await library.getBalance(account));
        }
    }, [account, library]);
    (0, react_1.useEffect)(() => {
        getBalance();
    }, [library, account]);
    const getMinBid = () => {
        const minBidAmount = auction.amount.gt(0)
            ? (0, bidInfo_1.getNextMinBid)(auction.amount)
            : auction.reservePrice || "0";
        return minBidAmount;
    };
    const [minBid, setMinBid] = (0, react_1.useState)(getMinBid);
    const { ethValue, input, setEthValue } = (0, useEthAmountInput_1.useEthAmountInput)({
        hasMinPrecision: true,
        label: getString("BID_AMOUNT_LABEL"),
    });
    (0, react_1.useEffect)(() => {
        setMinBid(getMinBid());
        setEthValue((0, units_1.formatEther)(getMinBid()));
    }, [auction.amount]);
    const bidTooLow = auction.amount && minBid
        ? ethers_1.BigNumber.from((0, units_1.parseUnits)(ethValue || "0", 18))
            .sub(ethers_1.BigNumber.from(minBid))
            .lt("0")
        : true;
    const userHasEnough = ethValue && userBalance
        ? ethers_1.BigNumber.from((0, units_1.parseUnits)(ethValue || "0", 18))
            .sub(ethers_1.BigNumber.from(userBalance))
            .lt("0")
        : false;
    const handleBid = (0, react_1.useCallback)(async () => {
        setError(undefined);
        if (!auctionHouse || auctionId === null || !ethValue) {
            setError("No auction found");
            return;
        }
        try {
            await handleBidTx(auctionHouse === null || auctionHouse === void 0 ? void 0 : auctionHouse.createBid(auctionId, (0, units_1.parseEther)(ethValue)));
        }
        catch (error) {
            console.error(error);
            setError(`${getString("ERROR_PLACING_BID_PREFIX")}: ${error.message}`);
        }
    }, [auctionHouse, auctionId, setError, ethValue]);
    return {
        bidTooLow,
        bidTxStatus,
        userHasEnough,
        input,
        minBid,
        handleBid,
    };
};
exports.useBidInteraction = useBidInteraction;
