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
        return (h("div", { key: '092ec8fc5e80eb02502643f39986fa0d459cda1b', class: `accordion ${this.device} ${this.isExpanded ? 'expanded' : ''}` }, h("button", { key: '4d88679f8debb28380a7b833da34025b034bb033', class: "accordion-header", onClick: () => this.toggleAccordion(), "aria-expanded": this.isExpanded }, h("span", { key: '1852cd61aa0a8f31bf08b1233d4d632e6b69e583', class: "title" }, this.heading), this.renderExpandIcon()), h("div", { key: '9ae592e74550c064910727d543dddc1e8177d39b', class: `accordion-content ${this.isExpanded ? 'expanded' : 'collapsed'}` }, h("div", { key: '6e99963ec7e1c43c9e84846dcf9776d0649a854a', class: "accordion-slot-wrapper" }, h("slot", { key: '227a572f83b93302a2bf95d538288d339d551d23' })))));
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
