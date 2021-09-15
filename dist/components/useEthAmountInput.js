"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEthAmountInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const useEthAmountInput = ({ hasMinPrecision = true, minValue, inputProps, label, }) => {
    const [ethValue, setEthValue] = (0, react_1.useState)(minValue);
    const { getStyles, getString } = (0, useThemeConfig_1.useThemeConfig)();
    const input = ((0, jsx_runtime_1.jsxs)("label", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({}, getStyles("ethAmountLabel"), { children: label }), void 0), (0, jsx_runtime_1.jsx)("input", Object.assign({ type: "number", step: hasMinPrecision ? getString("MIN_ETH_INPUT_PRECISION") : undefined, value: ethValue || "" }, (inputProps ? inputProps : getStyles("ethInput")), { onChange: (evt) => {
                    evt.persist();
                    setEthValue(evt.currentTarget.value);
                } }), void 0)] }, void 0));
    return { input, ethValue, setEthValue };
};
exports.useEthAmountInput = useEthAmountInput;
