"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionHouseHooksContext = void 0;
const react_1 = require("react");
const constants_1 = require("../constants");
exports.AuctionHouseHooksContext = (0, react_1.createContext)({
    theme: constants_1.Theme,
    strings: constants_1.Strings,
    setAuctionId: (_name) => {
        throw new Error("Missing Auction House Hooks provider");
    },
    setListingRequestInformation: (_req) => {
        throw new Error("Missing Auction House Hooks provider");
    },
    auctionId: null,
    auctionHouse: null,
    listingRequestInformation: null,
});
