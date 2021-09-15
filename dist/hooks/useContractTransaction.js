"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContractTransaction = exports.isConfirmed = exports.isWaiting = void 0;
const react_1 = require("react");
const types_1 = require("../types");
const TransactionActionContext_1 = require("../context/TransactionActionContext");
function isWaiting(status) {
    return (status === types_1.WalletCallStatus.CONFIRMING ||
        status === types_1.WalletCallStatus.PROMPTED);
}
exports.isWaiting = isWaiting;
function isConfirmed(status) {
    return status === types_1.WalletCallStatus.CONFIRMED;
}
exports.isConfirmed = isConfirmed;
function useContractTransaction(action, confirmations = 1) {
    const { setCurrentAction, currentAction, afterActionCallback } = (0, react_1.useContext)(TransactionActionContext_1.TransactionActionContext);
    async function handleTx(promise) {
        try {
            setCurrentAction({
                state: types_1.WalletCallStatus.PROMPTED,
                type: action,
            });
            const tx = await promise;
            setCurrentAction({
                state: types_1.WalletCallStatus.CONFIRMING,
                type: action,
            });
            await tx.wait(confirmations);
            setCurrentAction({
                state: types_1.WalletCallStatus.CONFIRMED,
                type: action,
            });
            afterActionCallback(action);
            // txn confirmed
            // todo reload page???
            console.log("transaction completed");
            return tx;
        }
        catch (error) {
            setCurrentAction({
                state: types_1.WalletCallStatus.ERRORED,
                type: action,
                error: error.message,
            });
            throw error;
        }
    }
    const txStatus = (currentAction === null || currentAction === void 0 ? void 0 : currentAction.type) === action
        ? currentAction === null || currentAction === void 0 ? void 0 : currentAction.state
        : types_1.WalletCallStatus.INITIAL;
    return { txStatus, handleTx };
}
exports.useContractTransaction = useContractTransaction;
