import { h } from "@stencil/core";
export class AtomButton {
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
        return (h("button", { key: '93e63f8999cc01daadf718bbb5d7b9e799ed2070', type: this.type, class: `atom-button ${this.variant}`, onClick: this.handleClick, "aria-label": this.label }, h("slot", { key: 'f9599e20105c43467e320519b970716c65375c25' })));
    }
    static get is() { return "atom-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["atom-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["atom-button.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Texto opcional para acessibilidade"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'button' | 'submit' | 'reset'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tipo do bot\u00E3o (button, submit, etc)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary'",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Estilo customiz\u00E1vel"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            }
        };
    }
    static get events() {
        return [{
                "method": "atomClick",
                "name": "atomClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Evento emitido ao clicar"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=atom-button.js.map
