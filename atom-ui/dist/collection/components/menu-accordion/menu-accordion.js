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
        return (h("div", { class: "icon-wrapper" }, this.isExpanded ? this.getExpandLessIcon() : this.getExpandMoreIcon()));
    }
    getExpandMoreIcon() {
        return (h("svg", { class: "icon", width: "16", height: "16", viewBox: "0 0 24 24" }, h("path", { d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" })));
    }
    getExpandLessIcon() {
        return (h("svg", { class: "icon", width: "16", height: "16", viewBox: "0 0 24 24" }, h("path", { d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" })));
    }
    render() {
        return (h("div", { key: '7c144ab802662ab506c46e81d9006d98bad069ce', class: `accordion ${this.device} ${this.isExpanded ? 'expanded' : ''}` }, h("button", { key: '260730ec59300c9b1a843f1adde0501660482b25', class: "accordion-header", onClick: () => this.toggleAccordion(), "aria-expanded": this.isExpanded }, h("span", { key: '7bdfed98f12f06eb442fe23f4b095cf3a23bf135', class: "title" }, this.heading), this.renderExpandIcon()), h("div", { key: '05a009ac4c35e8122b1f956fa2658be0c53c3c77', class: `accordion-content ${this.isExpanded ? 'expanded' : 'collapsed'}` }, h("div", { key: '7c4c45e9c7c46c201ed202b28c0b6bc29dafdc30', class: "accordion-slot-wrapper" }, h("slot", { key: '0b131eef9845dc96e682272f805b1039a947f999' })))));
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
