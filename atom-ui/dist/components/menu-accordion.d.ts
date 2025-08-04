import type { Components, JSX } from "../types/components";

interface MenuAccordion extends Components.MenuAccordion, HTMLElement {}
export const MenuAccordion: {
    prototype: MenuAccordion;
    new (): MenuAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
