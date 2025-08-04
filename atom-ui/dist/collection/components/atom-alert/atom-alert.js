import { h } from "@stencil/core";
export class AtomAlert {
    device = 'web';
    status = 'info';
    icon = 'info';
    text;
    textColor;
    iconColor;
    strokeColor;
    hasCloseIcon = false;
    hasStatusIcon = true;
    atomClick;
    handleClick = () => {
        this.atomClick.emit();
    };
    renderIcon() {
        if (!this.hasStatusIcon)
            return null;
        const iconClass = `icon ${this.iconColor || ''}`;
        const icons = {
            check: (h("svg", { viewBox: "0 0 24 24", class: iconClass, width: "24", height: "24" }, h("path", { d: "M20 6L9 17l-5-5", fill: "none", stroke: "currentColor", "stroke-width": "2" }))),
            error: (h("svg", { viewBox: "0 0 24 24", class: iconClass, width: "24", height: "24" }, h("circle", { cx: "12", cy: "12", r: "10", fill: "none", stroke: "currentColor", "stroke-width": "2" }), h("line", { x1: "12", y1: "8", x2: "12", y2: "12", stroke: "currentColor", "stroke-width": "2" }), h("circle", { cx: "12", cy: "16", r: "1", fill: "currentColor" }))),
            warning: (h("svg", { viewBox: "0 0 24 24", class: iconClass, width: "24", height: "24" }, h("path", { d: "M12 2L2 22h20L12 2z", fill: "none", stroke: "currentColor", "stroke-width": "2" }), h("line", { x1: "12", y1: "8", x2: "12", y2: "14", stroke: "currentColor", "stroke-width": "2" }), h("circle", { cx: "12", cy: "17", r: "1", fill: "currentColor" }))),
            info: (h("svg", { viewBox: "0 0 24 24", class: iconClass, width: "24", height: "24" }, h("circle", { cx: "12", cy: "12", r: "10", fill: "none", stroke: "currentColor", "stroke-width": "2" }), h("line", { x1: "12", y1: "10", x2: "12", y2: "16", stroke: "currentColor", "stroke-width": "2" }), h("circle", { cx: "12", cy: "7", r: "1", fill: "currentColor" }))),
        };
        return icons[this.icon] || icons['info'];
    }
    renderCloseIcon() {
        if (!this.hasCloseIcon)
            return null;
        return (h("button", { class: `close-icon ${this.iconColor || ''}`, "aria-label": "Fechar alerta", onClick: this.handleClick }, "\u2716"));
    }
    render() {
        console.log('teste');
        const classes = [
            'alert',
            `alert--${this.status}`,
            this.device === 'mobile' ? 'alert--mobile' : '',
            this.strokeColor,
        ].join(' ');
        return (h("div", { key: '3f58332deaacf52ee09cbe1f2d5b47c291159de4', class: classes }, this.renderIcon(), h("div", { key: 'd069b3c17c528d180e841dcee5c289677346442f', class: `content ${this.textColor || ''}` }, this.text), this.renderCloseIcon()));
    }
    static get is() { return "atom-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["atom-alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["atom-alert.css"]
        };
    }
    static get properties() {
        return {
            "device": {
                "type": "string",
                "attribute": "device",
                "mutable": false,
                "complexType": {
                    "original": "'web' | 'mobile'",
                    "resolved": "\"mobile\" | \"web\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'web'"
            },
            "status": {
                "type": "string",
                "attribute": "status",
                "mutable": false,
                "complexType": {
                    "original": "'success' | 'error' | 'warning' | 'info'",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'info'"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
                "mutable": false,
                "complexType": {
                    "original": "'check' | 'error' | 'warning' | 'info'",
                    "resolved": "\"check\" | \"error\" | \"info\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'info'"
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "textColor": {
                "type": "string",
                "attribute": "textcolor",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "iconColor": {
                "type": "string",
                "attribute": "iconcolor",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "strokeColor": {
                "type": "string",
                "attribute": "strokecolor",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hasCloseIcon": {
                "type": "boolean",
                "attribute": "hascloseicon",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hasStatusIcon": {
                "type": "boolean",
                "attribute": "hasstatusicon",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
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
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=atom-alert.js.map
