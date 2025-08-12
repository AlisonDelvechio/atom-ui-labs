'use strict';

var index = require('./index-canyZBEu.js');

const atomButtonCss = ":host{display:inline-block}.atom-button{padding:0.6rem 1.2rem;border-radius:8px;border:none;cursor:pointer;font-weight:600;font-family:sans-serif;font-size:1rem;transition:background 0.3s}.atom-button.primary{background-color:#2563eb;color:#ffffff}.atom-button.secondary{background-color:#4b5563;color:#ffffff}.atom-button:hover{opacity:0.85}";

const AtomButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atomClick = index.createEvent(this, "atomClick");
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
        return (index.h("button", { key: '93e63f8999cc01daadf718bbb5d7b9e799ed2070', type: this.type, class: `atom-button ${this.variant}`, onClick: this.handleClick, "aria-label": this.label }, index.h("slot", { key: 'f9599e20105c43467e320519b970716c65375c25' })));
    }
};
AtomButton.style = atomButtonCss;

exports.atom_button = AtomButton;
//# sourceMappingURL=atom-button.entry.cjs.js.map

//# sourceMappingURL=atom-button.cjs.entry.js.map