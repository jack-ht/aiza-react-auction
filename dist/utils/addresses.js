"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesMatch = void 0;
const address_1 = require("@ethersproject/address");
const addressesMatch = (address1, address2) => {
    return (0, address_1.getAddress)(address1) === (0, address_1.getAddress)(address2);
};
exports.addressesMatch = addressesMatch;
