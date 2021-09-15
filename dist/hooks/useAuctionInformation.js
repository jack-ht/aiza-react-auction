"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuctionInformation = void 0;
const react_1 = require("react");
const AuctionHouseHooksContext_1 = require("../context/AuctionHouseHooksContext");
const useAuctionInformation = () => {
    const { auctionId, auctionHouse } = (0, react_1.useContext)(AuctionHouseHooksContext_1.AuctionHouseHooksContext);
    const [auctionInfo, setAuctionInfo] = (0, react_1.useState)(undefined);
    (0, react_1.useEffect)(() => {
        if (auctionId) {
            auctionHouse === null || auctionHouse === void 0 ? void 0 : auctionHouse.fetchAuction(auctionId).then((auction) => {
                setAuctionInfo(auction);
            });
        }
    }, [auctionHouse, auctionId]);
    return auctionInfo;
};
exports.useAuctionInformation = useAuctionInformation;
