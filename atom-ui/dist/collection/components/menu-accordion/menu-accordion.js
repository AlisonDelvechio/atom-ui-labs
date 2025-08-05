import { h } from "@stencil/core";
export class MenuAccordion {
    heading = '';
    device = 'web';
    expanded = false;
    isExpanded;
    componentWillLoad() {
        this.isExpanded = this.expanded;
    }
    toggleAccordion() {
        this.isExpanded = !this.isExpanded;
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
    render() {
        return (h("div", { key: 'b84472288da2f19de7cd26bd3217e6bbc254dae2', class: `accordion ${this.device} ${this.isExpanded ? 'expanded' : ''}` }, h("button", { key: '1375bfd07952dc121c188201484b43a42a1f75f8', class: "accordion-header", onClick: () => this.toggleAccordion(), "aria-expanded": this.isExpanded }, h("span", { key: '1da65b0b09fbe2b88433d3238317257ba38c81fb', class: "title" }, this.heading), this.renderExpandIcon()), h("div", { key: '8ef9c0551ba6f79c5b900be3d03e5d745f3f32ff', class: `accordion-content ${this.isExpanded ? 'expanded' : 'collapsed'}` }, h("div", { key: '3edc13f9a2d632ecfd63fb638baf8a4ec6802edf', class: "accordion-slot-wrapper" }, h("slot", { key: '8e424b70616c0ac466391ed8806776d635fa1413' })))));
    }
    static get is() { return "menu-accordion"; }
    static get encapsulation() { return "shadow"; }
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
