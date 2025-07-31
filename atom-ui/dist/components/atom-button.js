import { p as proxyCustomElement, H, c as createEvent, h } from './p-N8UsypW3.js';

const atomButtonCss = ":host{display:inline-block}.atom-button{padding:0.6rem 1.2rem;border-radius:8px;border:none;cursor:pointer;font-weight:600;font-family:sans-serif;font-size:1rem;transition:background 0.3s}.atom-button.primary{background-color:#2563eb;color:#ffffff}.atom-button.secondary{background-color:#4b5563;color:#ffffff}.atom-button:hover{opacity:0.85}";

const AtomButton$1 = /*@__PURE__*/ proxyCustomElement(class AtomButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.atomClick = createEvent(this, "atomClick");
    }
    /** Texto opcional para acessibilidade */
    label;
    /** Tipo do botão (button, submit, etc) */
    type = 'button';
    /** Estilo customizável */
    variant = 'primary';
    /** Evento emitido ao clicar */
    atomClick;
    handleClick = () => {
        this.atomClick.emit();
    };
    render() {
        return (h("button", { key: '93c47e09a9ea49a942b7f8b8f07a8457336f76f8', type: this.type, class: `atom-button ${this.variant}`, onClick: this.handleClick, "aria-label": this.label }, h("slot", { key: 'a4daa5d08e2fcfe38f9a2a9cd9b9236f9536ff79' })));
    }
    static get style() { return atomButtonCss; }
}, [1, "atom-button", {
        "label": [1],
        "type": [1],
        "variant": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "atom-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomButton$1);
            }
            break;
    } });
}
defineCustomElement$1();

const AtomButton = AtomButton$1;
const defineCustomElement = defineCustomElement$1;

export { AtomButton, defineCustomElement };
//# sourceMappingURL=atom-button.js.map

//# sourceMappingURL=atom-button.js.map