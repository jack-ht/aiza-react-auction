"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuctionHouseHooksContext = void 0;
const react_1 = require("react");
const AuctionHouseHooksContext_1 = require("../context/AuctionHouseHooksContext");
const useAuctionHouseHooksContext = () => (0, react_1.useContext)(AuctionHouseHooksContext_1.AuctionHouseHooksContext);
exports.useAuctionHouseHooksContext = useAuctionHouseHooksContext;
