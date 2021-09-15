"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ModalActionLayout_1 = require("@htsoft/aiza-wallet-connector/dist/modal/ModalActionLayout");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const Button_1 = require("../components/Button");
const types_1 = require("../types");
const useAuctionHouseHooksContext_1 = require("../hooks/useAuctionHouseHooksContext");
const useListInteraction_1 = require("../hooks/useListInteraction");
const useContractTransaction_1 = require("../hooks/useContractTransaction");
const ActionCompletedView_1 = require("../components/ActionCompletedView");
const ListModalContent = ({ setError, tokenContract, tokenId, listParams, }) => {
    const { owned, approved, input, handleCreateAuction, handleApprove, listTxStatus, approveTxStatus, } = (0, useListInteraction_1.useListInteraction)(setError, tokenContract, tokenId, listParams);
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    if (!owned) {
        return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h3", { children: getString("LIST_MODAL_NOT_OWNED") }, void 0), (0, jsx_runtime_1.jsx)("p", { children: getString("LIST_MODAL_NOT_OWNED_TEXT") }, void 0)] }, void 0));
    }
    if ((0, useContractTransaction_1.isConfirmed)(listTxStatus) || (0, useContractTransaction_1.isConfirmed)(approveTxStatus)) {
        return (0, jsx_runtime_1.jsx)(ActionCompletedView_1.ActionCompletedView, {}, void 0);
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("modalInner"), { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({}, getStyles("modalHeader"), { children: getString("LIST_MEDIA_HEADER") }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("modalDescription"), { children: getString("LIST_MEDIA_DESCRIPTION") }), void 0), approved ? ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [input, (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: handleCreateAuction, disabled: (0, useContractTransaction_1.isWaiting)(listTxStatus) }, { children: (0, useContractTransaction_1.isWaiting)(listTxStatus)
                            ? getString("BUTTON_TXN_PENDING")
                            : getString("LIST_MEDIA_BUTTON_TEXT") }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("modalDescription"), { children: getString("SET_RESERVE_PRICE_DESCRIPTION") }), void 0)] }, void 0)) : ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("modalDescription"), { children: getString("LIST_NFT_APPROVE_P1") }), void 0), (0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("modalDescription"), { children: getString("LIST_NFT_APPROVE_P2") }), void 0), (0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: handleApprove, disabled: (0, useContractTransaction_1.isWaiting)(approveTxStatus) }, { children: (0, useContractTransaction_1.isWaiting)(approveTxStatus)
                            ? getString("BUTTON_TXN_PENDING")
                            : getString("APPROVE_AUCTION_BUTTON_TEXT") }), void 0)] }, void 0))] }), void 0));
};
const ListModal = ({ listParams }) => {
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const [error, setError] = (0, react_1.useState)(undefined);
    const { renderMedia: RenderMedia, listingRequestInformation } = (0, useAuctionHouseHooksContext_1.useAuctionHouseHooksContext)();
    const renderedMedia = RenderMedia && listingRequestInformation ? ((0, jsx_runtime_1.jsx)(RenderMedia, { tokenContract: listingRequestInformation.tokenContract, tokenId: listingRequestInformation.tokenId }, void 0)) : undefined;
    return ((0, jsx_runtime_1.jsx)(ModalActionLayout_1.ModalActionLayout, Object.assign({ error: error, modalTitle: getString("MODAL_TITLE_LIST_PIECE"), modalDescription: getString("MODAL_DESCRIPTION_LIST_PIECE"), modalName: types_1.ModalType.LIST_MODAL }, { children: listingRequestInformation ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("modalInner"), { children: [renderedMedia, (0, jsx_runtime_1.jsx)(ListModalContent, Object.assign({}, listingRequestInformation, { setError: setError, listParams: listParams }), void 0)] }), void 0)) : ((0, jsx_runtime_1.jsx)("span", { children: getString("MANAGE_MODAL_LOADING_PROMPT") }, void 0)) }), void 0));
};
exports.ListModal = ListModal;
