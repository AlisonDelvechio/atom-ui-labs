import type { Components, JSX } from "../types/components";

interface AtomButton extends Components.AtomButton, HTMLElement {}
export const AtomButton: {
    prototype: AtomButton;
    new (): AtomButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
