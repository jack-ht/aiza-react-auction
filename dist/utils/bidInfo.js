"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextMinBid = void 0;
const ethers_1 = require("ethers");
function getNextMinBid(value) {
    return ethers_1.BigNumber.from(value).div("100").mul("105");
}
exports.getNextMinBid = getNextMinBid;
