"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionCompletedView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const aiza_wallet_connector_1 = require("@htsoft/aiza-wallet-connector");
const react_1 = require("react");
const TransactionActionContext_1 = require("../context/TransactionActionContext");
const useThemeConfig_1 = require("../hooks/useThemeConfig");
const types_1 = require("../types");
const Button_1 = require("./Button");
const ActionCompletedView = () => {
    const { getString, getStyles } = (0, useThemeConfig_1.useThemeConfig)();
    const { currentAction, setCurrentAction } = (0, react_1.useContext)(TransactionActionContext_1.TransactionActionContext);
    const ActionTypeToMessage = (0, react_1.useMemo)(() => ({
        [types_1.ActionType.APPROVE]: {
            text: getString("ACTION_APPROVE_CONFIRMED"),
            allowBack: true,
            action: getString("ACTION_APPROVE_CONFIRMED_NEXT_TEXT"),
        },
        [types_1.ActionType.LIST]: {
            text: getString("ACTION_LIST_CONFIRMED"),
            allowBack: false,
            action: getString("ACTION_CONFIRMED_NEXT_TEXT"),
        },
        [types_1.ActionType.PLACE_BID]: {
            text: getString("ACTION_PLACE_BID_CONFIRMED"),
            allowBack: false,
        },
        [types_1.ActionType.UPDATE_RESERVE]: {
            text: getString("ACTION_UPDATE_RESERVE_CONFIRMED"),
            allowBack: false,
        },
        [types_1.ActionType.CANCEL_AUCTION]: {
            text: getString("ACTION_CANCELLED_CONFIRMED"),
            allowBack: false,
        },
        [types_1.ActionType.END_AUCTION]: {
            text: getString("AUCTION_END_CONFIRMED"),
            allowBack: false,
        },
        DEFAULT: {
            text: "",
            allowBack: false,
        },
    }), [getString]);
    const { closeModal } = (0, aiza_wallet_connector_1.useWalletModalState)();
    const actionMessage = ActionTypeToMessage[(currentAction === null || currentAction === void 0 ? void 0 : currentAction.type) || "DEFAULT"];
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({}, getStyles("modalSuccessMessage"), { children: [actionMessage.text, (0, jsx_runtime_1.jsx)("p", Object.assign({}, getStyles("updateWarning"), { children: "Changes to the site may take ~5 mins to be synced with the blockchain." }), void 0), actionMessage.allowBack ? ((0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: () => setCurrentAction(null) }, { children: getString("CONFIRMATION_BACK_BUTTON_TEXT") }), void 0)) : ((0, jsx_runtime_1.jsx)(Button_1.Button, Object.assign({ onClick: () => {
                    closeModal();
                    setCurrentAction(null);
                } }, { children: getString("CONFIRMATION_CLOSE_MODAL_BUTTON_TEXT") }), void 0))] }), void 0));
};
exports.ActionCompletedView = ActionCompletedView;
