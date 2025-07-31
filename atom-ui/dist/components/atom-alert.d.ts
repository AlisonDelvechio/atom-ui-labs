import type { Components, JSX } from "../types/components";

interface AtomAlert extends Components.AtomAlert, HTMLElement {}
export const AtomAlert: {
    prototype: AtomAlert;
    new (): AtomAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
