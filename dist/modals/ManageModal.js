"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ModalActionLayout_1 = require("@htsoft/aiza-wallet-connector/dist/modal/ModalActionLayout");
const useAuctionInformation_1 = require("../hooks/useAuctionInformation");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const Button_1 = require("../components/Button");
const types_1 = require("../types");
const useAuctionHouseHooksContext_1 = require("../hooks/useAuctionHouseHooksContext");
const useManageInteraction_1 = require("../hooks/useManageInteraction");
const useContractTransaction_1 = require("../hooks/useContractTransaction");
const ActionCompletedView_1 = require("../components/ActionCompletedView");
const ManageModalContent = ({ auction, setError, }) => {
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const { isTokenOwner, handleCancelAuction, handleUpdateReservePrice, input, ethValue, auctionHasEnded, handleEndAuction, endAuctionTxStatus, cancelTxStatus, setReserveTxStatus, } = (0, useManageInteraction_1.useManageInteraction)(auction, setError);
    if ((0, useContractTransaction_1.isConfirmed)(cancelTxStatus) || (0, useContractTransaction_1.isConfirmed)(setReserveTxStatus)) {
        return (0, jsx_runtime_1.jsx)(ActionCompletedView_1.ActionCompletedView, {}, void 0);
    }
    console.log({ isTokenOwner });
    console.log({ auctionHasEnded, auction });
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("modalInner"), { children: auctionHasEnded ? ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({}, getStyles("modalHeader"), { children: getString("SETTLE_AUCTION_HEADER") }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("modalDescription"), { children: getString("SETTLE_AUCTION_DESCRIPTION") }), void 0), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: handleEndAuction, disabled: (0, useContractTransaction_1.isWaiting)(endAuctionTxStatus) }, { children: (0, useContractTransaction_1.isWaiting)(endAuctionTxStatus)
                        ? getString("BUTTON_TXN_PENDING")
                        : getString("SETTLE_AUCTION_BUTTON_TEXT") }), void 0)] }, void 0)) : isTokenOwner ? ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({}, getStyles("modalHeader"), { children: getString("MANAGE_MEDIA_HEADER") }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("modalDescription"), { children: getString("CANCEL_AUCTION") }), void 0), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: handleCancelAuction, disabled: (0, useContractTransaction_1.isWaiting)(cancelTxStatus) }, { children: (0, useContractTransaction_1.isWaiting)(cancelTxStatus)
                        ? getString("BUTTON_TXN_PENDING")
                        : getString("CANCEL_AUCTION_BUTTON_TEXT") }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("modalDescription"), { children: getString("SET_RESERVE_PRICE_DESCRIPTION") }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("updateReserveContainer"), { children: [input, (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: handleUpdateReservePrice, disabled: !ethValue || (0, useContractTransaction_1.isWaiting)(setReserveTxStatus) }, { children: (0, useContractTransaction_1.isWaiting)(setReserveTxStatus)
                                    ? getString("BUTTON_TXN_PENDING")
                                    : getString("SET_RESERVE_PRICE_BUTTON_TEXT") }), void 0) }, void 0)] }), void 0)] }, void 0)) : ((0, jsx_runtime_1.jsx)("div", { children: getString("MODAL_MANAGE_NOT_OWNED") }, void 0)) }), void 0));
};
const ManageModal = () => {
    var _a, _b, _c;
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const auctionInfo = (0, useAuctionInformation_1.useAuctionInformation)();
    const [error, setError] = (0, react_1.useState)(undefined);
    const { auctionHouse, auctionId, renderMedia: RenderMedia, } = (0, useAuctionHouseHooksContext_1.useAuctionHouseHooksContext)();
    const renderedMedia = auctionInfo &&
        ((_a = auctionInfo[1]) === null || _a === void 0 ? void 0 : _a.toString()) !==
            "0x0000000000000000000000000000000000000000" &&
        RenderMedia ? ((0, jsx_runtime_1.jsx)(RenderMedia, { auctionId: auctionId, tokenContract: (_b = auctionInfo[1]) === null || _b === void 0 ? void 0 : _b.toString(), tokenId: (_c = auctionInfo.tokenId) === null || _c === void 0 ? void 0 : _c.toString() }, void 0)) : undefined;
    return ((0, jsx_runtime_1.jsx)(ModalActionLayout_1.ModalActionLayout, Object.assign({ error: error, modalTitle: getString("MODAL_TITLE_MANAGE_LISTING"), modalDescription: getString("MODAL_DESCRIPTION_MANAGE_LISTING"), modalName: types_1.ModalType.MANAGE_MODAL }, { children: auctionInfo && auctionId && auctionHouse ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("modalInner"), { children: [renderedMedia, (0, jsx_runtime_1.jsx)(ManageModalContent, { auction: auctionInfo, setError: setError }, void 0)] }), void 0)) : ((0, jsx_runtime_1.jsx)("div", Object.assign({}, getStyles("modalLoadingPrompt"), { children: getString("MANAGE_MODAL_LOADING_PROMPT") }), void 0)) }), void 0));
};
exports.ManageModal = ManageModal;
