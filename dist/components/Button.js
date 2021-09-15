"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const Button = ({ showPending, disabled, ...props }) => {
    const { getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({}, props, { disabled: disabled }, getStyles("actionButton"), { children: props.children }), void 0));
};
exports.Button = Button;
