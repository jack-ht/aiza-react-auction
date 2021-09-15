"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useManageAuction = void 0;
const aiza_wallet_connector_1 = require("@htsoft/aiza-wallet-connector");
const types_1 = require("../types");
const useAuctionHouseHooksContext_1 = require("./useAuctionHouseHooksContext");
const useManageAuction = () => {
    const { setAuctionId, setListingRequestInformation } = (0, useAuctionHouseHooksContext_1.useAuctionHouseHooksContext)();
    const { closeModal, openModalByName } = (0, aiza_wallet_connector_1.useWalletModalState)();
    const openManageAuction = (auctionId) => {
        setAuctionId(auctionId);
        openModalByName(types_1.ModalType.MANAGE_MODAL);
    };
    const openBidAuction = (auctionId) => {
        setAuctionId(auctionId);
        openModalByName(types_1.ModalType.BID_MODAL);
    };
    const openListAuction = (tokenContract, tokenId) => {
        setListingRequestInformation({ tokenContract, tokenId });
        openModalByName(types_1.ModalType.LIST_MODAL);
    };
    return {
        closeModal,
        openManageAuction,
        openBidAuction,
        openListAuction,
    };
};
exports.useManageAuction = useManageAuction;
