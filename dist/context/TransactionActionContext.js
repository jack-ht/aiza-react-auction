"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionActionContext = void 0;
const react_1 = require("react");
exports.TransactionActionContext = (0, react_1.createContext)({
    afterActionCallback: (_action) => { },
    currentAction: null,
    setCurrentAction: (_action) => { },
});
