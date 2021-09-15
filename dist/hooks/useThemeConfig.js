"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeConfig = void 0;
const react_1 = require("react");
const css_1 = require("@emotion/css");
const AuctionHouseHooksContext_1 = require("../context/AuctionHouseHooksContext");
function useThemeConfig() {
    const mediaContext = (0, react_1.useContext)(AuctionHouseHooksContext_1.AuctionHouseHooksContext);
    const getStyles = (themeKey) => {
        if (!(themeKey in mediaContext.theme)) {
            throw new Error(`"${String(themeKey)}" not found in [${Object.keys(mediaContext.theme).join(", ")}]`);
        }
        const styles = mediaContext.theme[themeKey];
        return {
            className: `aiza--auction-house-${themeKey} ${(0, css_1.css)(styles)}`,
        };
    };
    const getString = (stringName) => {
        return mediaContext.strings[stringName];
    };
    return { getString, getStyles };
}
exports.useThemeConfig = useThemeConfig;
