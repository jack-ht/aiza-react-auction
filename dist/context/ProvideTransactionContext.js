"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvideTransactionContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TransactionActionContext_1 = require("./TransactionActionContext");
const ProvideTransactionContext = ({ children, afterActionCallback = () => { }, }) => {
    const [currentAction, setCurrentAction] = (0, react_1.useState)(null);
    return ((0, jsx_runtime_1.jsx)(TransactionActionContext_1.TransactionActionContext.Provider, Object.assign({ value: { afterActionCallback, currentAction, setCurrentAction } }, { children: children }), void 0));
};
exports.ProvideTransactionContext = ProvideTransactionContext;
