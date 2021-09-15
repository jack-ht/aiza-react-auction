"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletCallStatus = exports.ActionType = exports.ModalType = void 0;
var ModalType;
(function (ModalType) {
    ModalType["LIST_MODAL"] = "AUCTION_HOUSE_LIST_MODAL";
    ModalType["BID_MODAL"] = "AUCTION_HOUSE_BID_MODAL";
    ModalType["MANAGE_MODAL"] = "AUCTION_HOUSE_MANAGE_MODAL";
})(ModalType = exports.ModalType || (exports.ModalType = {}));
var ActionType;
(function (ActionType) {
    ActionType["LIST"] = "LIST";
    ActionType["APPROVE"] = "APPROVE";
    ActionType["UPDATE_RESERVE"] = "UPDATE_RESERVE";
    ActionType["CANCEL_AUCTION"] = "CANCEL_AUCTION";
    ActionType["PLACE_BID"] = "PLACE_BID";
    ActionType["END_AUCTION"] = "END_AUCTION";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var WalletCallStatus;
(function (WalletCallStatus) {
    WalletCallStatus["INITIAL"] = "INITIAL";
    WalletCallStatus["PROMPTED"] = "PROMPTED";
    WalletCallStatus["CONFIRMING"] = "CONFIRMING";
    WalletCallStatus["CONFIRMED"] = "CONFIRMED";
    WalletCallStatus["ERRORED"] = "ERRORED";
})(WalletCallStatus = exports.WalletCallStatus || (exports.WalletCallStatus = {}));
