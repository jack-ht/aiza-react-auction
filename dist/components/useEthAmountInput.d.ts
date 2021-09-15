/// <reference types="react" />
declare type EthAmountInputProps = {
    hasMinPrecision?: boolean;
    minValue?: string;
    inputProps?: any;
    label: string;
};
export declare const useEthAmountInput: ({ hasMinPrecision, minValue, inputProps, label, }: EthAmountInputProps) => {
    input: JSX.Element;
    ethValue: string | undefined;
    setEthValue: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
};
export {};
