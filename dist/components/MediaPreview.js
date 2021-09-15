"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaPreview = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useAuctionHouseHooksContext_1 = require("../hooks/useAuctionHouseHooksContext");
const MediaPreview = ({ auction }) => {
    var _a, _b;
    const { renderMedia: RenderMedia } = (0, useAuctionHouseHooksContext_1.useAuctionHouseHooksContext)();
    return auction && RenderMedia ? ((0, jsx_runtime_1.jsx)(RenderMedia, { auctionId: auction[0].toNumber(), tokenContract: (_a = auction[1]) === null || _a === void 0 ? void 0 : _a.toString(), tokenId: (_b = auction.tokenId) === null || _b === void 0 ? void 0 : _b.toNumber() }, void 0)) : null;
};
exports.MediaPreview = MediaPreview;
