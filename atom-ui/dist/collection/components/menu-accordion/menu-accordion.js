import { h } from "@stencil/core";
export class MenuAccordion {
    heading = '';
    device = 'web';
    expanded = false;
    items = [];
    isExpanded;
    componentWillLoad() {
        this.isExpanded = this.expanded;
    }
    renderExpandIcon() {
        return this.isExpanded ? this.getExpandLessIcon() : this.getExpandMoreIcon();
    }
    getExpandMoreIcon() {
        return (h("svg", { class: "icon", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" })));
    }
    getExpandLessIcon() {
        return (h("svg", { class: "icon", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" })));
    }
    getChevronRightIcon() {
        return (h("svg", { class: "icon", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: "M10 17l5-5-5-5v10z" })));
    }
    toggleAccordion() {
        this.isExpanded = !this.isExpanded;
    }
    render() {
        return (h("div", { key: 'c8b4d6ca5943b5b14b1de5c8480aee1f9507f141', class: `accordion ${this.device} ${this.isExpanded ? 'expanded' : ''}` }, h("button", { key: '8c8f86a762a7c2d6b13c379cca4846bf335c06c3', class: "accordion-header", onClick: () => this.toggleAccordion(), "aria-expanded": this.isExpanded }, h("span", { key: 'e3423d174c71a467b3a35361113ddf643833c0de', class: "title" }, this.heading), this.renderExpandIcon()), this.isExpanded && (h("div", { key: '48232b3d74bc1a7feb9990041d5f0d4744408e3a', class: "accordion-content" }, this.items.map((item) => (h("div", { class: "accordion-item" }, h("span", null, item), this.getChevronRightIcon())))))));
    }
    static get is() { return "menu-accordion"; }
    static get originalStyleUrls() {
        return {
            "$": ["menu-accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["menu-accordion.css"]
        };
    }
    static get properties() {
        return {
            "heading": {
                "type": "string",
                "attribute": "heading",
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
                "reflect": false,
                "defaultValue": "''"
            },
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
            "expanded": {
                "type": "boolean",
                "attribute": "expanded",
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
            "items": {
                "type": "unknown",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "isExpanded": {}
        };
    }
}
//# sourceMappingURL=menu-accordion.js.map
