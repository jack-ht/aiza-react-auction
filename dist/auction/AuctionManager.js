"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionManager = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const aiza_sdk_1 = require("@htsoft/aiza-sdk");
const aiza_wallet_connector_1 = require("@htsoft/aiza-wallet-connector");
const AuctionHouseHooksContext_1 = require("../context/AuctionHouseHooksContext");
const constants_1 = require("../constants");
const ManageModal_1 = require("../modals/ManageModal");
const BidModal_1 = require("../modals/BidModal");
const ListModal_1 = require("../modals/ListModal");
const ProvideTransactionContext_1 = require("../context/ProvideTransactionContext");
const AuctionManager = ({ theme, strings, children, renderMedia, }) => {
    const [auctionId, setAuctionId] = (0, react_1.useState)(null);
    const [listingRequestInformation, setListingRequestInformation] = (0, react_1.useState)(null);
    const { library, chainId } = (0, aiza_wallet_connector_1.useWeb3Wallet)();
    return ((0, jsx_runtime_1.jsx)(ProvideTransactionContext_1.ProvideTransactionContext, { children: (0, jsx_runtime_1.jsx)(AuctionHouseHooksContext_1.AuctionHouseHooksContext.Provider, Object.assign({ value: {
                auctionId,
                setAuctionId,
                renderMedia: renderMedia,
                listingRequestInformation,
                setListingRequestInformation,
                theme: Object.assign({}, constants_1.Theme, theme),
                strings: Object.assign({}, constants_1.Strings, strings),
                auctionHouse: library && chainId
                    ? new aiza_sdk_1.AuctionHouse(library.getSigner(), chainId)
                    : null,
            } }, { children: (0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ManageModal_1.ManageModal, {}, void 0), (0, jsx_runtime_1.jsx)(BidModal_1.BidModal, {}, void 0), (0, jsx_runtime_1.jsx)(ListModal_1.ListModal, {}, void 0), children] }, void 0) }), void 0) }, void 0));
};
exports.AuctionManager = AuctionManager;
