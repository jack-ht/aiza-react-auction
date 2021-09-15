import { ReactNode } from "react";
export declare const ProvideTransactionContext: ({ children, afterActionCallback, }: {
    children: ReactNode;
    afterActionCallback?: ((action: any) => void) | undefined;
}) => JSX.Element;
