import { p as proxyCustomElement, H, h } from './p-N8UsypW3.js';

const menuAccordionCss = ".accordion{border:1px solid #d1d5db;border-radius:0.5rem;overflow:hidden;background-color:#f9fafb;box-shadow:0px 1px 4px 0px rgba(0, 0, 0, 0.2)}.accordion.mobile{font-size:0.9rem;width:730px}.accordion.web{font-size:1rem}.accordion.expanded{border-color:rgb(180.3902439024, 186.8780487805, 196.6097560976)}.accordion .accordion-header{all:unset;display:flex;justify-content:space-between;align-items:center;width:97%;padding:1rem;background-color:#f3f4f6;cursor:pointer}.accordion .accordion-header .title{font-weight:bold;line-height:1.2}.accordion .accordion-header .icon{display:flex;align-items:center;justify-content:center;height:1.5rem;width:1.5rem;fill:currentColor}.accordion .accordion-content{padding:0.5rem 1rem;background-color:white}.accordion .accordion-content .accordion-item{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0;border-bottom:1px solid #f3f4f6;cursor:pointer}.accordion .accordion-content .accordion-item span:first-child{margin-right:0.5rem}.accordion .accordion-content .accordion-item .icon{font-size:1.2rem}.accordion .accordion-content .accordion-item:last-child{border-bottom:none}";

const MenuAccordion$1 = /*@__PURE__*/ proxyCustomElement(class MenuAccordion extends H {
    constructor() {
        super();
        this.__registerHost();
    }
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
    static get style() { return menuAccordionCss; }
}, [0, "menu-accordion", {
        "heading": [1],
        "device": [1],
        "expanded": [4],
        "items": [16],
        "isExpanded": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["menu-accordion"];
    components.forEach(tagName => { switch (tagName) {
        case "menu-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MenuAccordion$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MenuAccordion = MenuAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { MenuAccordion, defineCustomElement };
//# sourceMappingURL=menu-accordion.js.map

//# sourceMappingURL=menu-accordion.js.map