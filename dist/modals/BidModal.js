"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ModalActionLayout_1 = require("@htsoft/aiza-wallet-connector/dist/modal/ModalActionLayout");
const units_1 = require("@ethersproject/units");
const useAuctionInformation_1 = require("../hooks/useAuctionInformation");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const Button_1 = require("../components/Button");
const types_1 = require("../types");
const useAuctionHouseHooksContext_1 = require("../hooks/useAuctionHouseHooksContext");
const MediaPreview_1 = require("../components/MediaPreview");
const useBidInteraction_1 = require("../hooks/useBidInteraction");
const useContractTransaction_1 = require("../hooks/useContractTransaction");
const ActionCompletedView_1 = require("../components/ActionCompletedView");
const formatAmount = (text, amount) => {
    const formattedAmount = (0, units_1.formatEther)(amount);
    return text.replace("%", formattedAmount);
};
const BidModalContent = ({ auction, setError, }) => {
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const { input, userHasEnough, bidTxStatus, minBid, bidTooLow, handleBid } = (0, useBidInteraction_1.useBidInteraction)(auction, setError);
    if ((0, useContractTransaction_1.isConfirmed)(bidTxStatus)) {
        return (0, jsx_runtime_1.jsx)(ActionCompletedView_1.ActionCompletedView, {}, void 0);
    }
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({}, getStyles("modalHeader"), { children: getString("PLACE_BID_HEADER") }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("modalDescription"), { children: getString("PLACE_BID_DESCRIPTION") }), void 0), (0, jsx_runtime_1.jsx)("p", { children: auction.amount.eq(0)
                    ? formatAmount(getString("RESERVE_PRICE_NOT_MET"), auction.reservePrice)
                    : formatAmount(getString("SHOW_HIGHEST_BID"), auction.amount) }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: input }, void 0), (0, jsx_runtime_1.jsx)("div", { children: !userHasEnough
                            ? getString("BID_NOT_ENOUGH_ETH")
                            : bidTooLow &&
                                formatAmount(getString("BID_TOO_LOW"), minBid) }, void 0), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: handleBid, disabled: !userHasEnough || bidTooLow || (0, useContractTransaction_1.isWaiting)(bidTxStatus) }, { children: (0, useContractTransaction_1.isWaiting)(bidTxStatus)
                            ? getString("BUTTON_TXN_PENDING")
                            : getString("BID_BUTTON_TEXT") }), void 0)] }, void 0)] }, void 0));
};
const BidModal = () => {
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const auctionInfo = (0, useAuctionInformation_1.useAuctionInformation)();
    const [error, setError] = (0, react_1.useState)(undefined);
    const { auctionHouse, auctionId } = (0, useAuctionHouseHooksContext_1.useAuctionHouseHooksContext)();
    return ((0, jsx_runtime_1.jsx)(ModalActionLayout_1.ModalActionLayout, Object.assign({ error: error, modalTitle: getString("MODAL_TITLE_MANAGE_LISTING"), modalDescription: getString("MODAL_DESCRIPTION_MANAGE_LISTING"), modalName: types_1.ModalType.BID_MODAL }, { children: auctionInfo && auctionId && auctionHouse ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("modalInner"), { children: [(0, jsx_runtime_1.jsx)(MediaPreview_1.MediaPreview, { auction: auctionInfo }, void 0), (0, jsx_runtime_1.jsx)(BidModalContent, { auction: auctionInfo, setError: setError }, void 0)] }), void 0)) : ((0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("modalLoadingPrompt"), { children: getString("MANAGE_MODAL_LOADING_PROMPT") }), void 0)) }), void 0));
};
exports.BidModal = BidModal;
