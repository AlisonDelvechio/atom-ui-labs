import { r as registerInstance, h } from './index-C63bCTfv.js';

const menuAccordionCss = ".accordion{border:1px solid #d1d5db;border-radius:0.5rem;overflow:hidden;background-color:#f9fafb;box-shadow:0px 1px 4px rgba(0, 0, 0, 0.2)}.accordion.mobile{font-size:0.9rem;width:730px}.accordion.mobile .accordion-header{width:96%}.accordion.web{font-size:1rem}.accordion.expanded{border-color:rgb(180.3902439024, 186.8780487805, 196.6097560976)}.accordion .accordion-header{all:unset;display:flex;justify-content:space-between;align-items:center;width:97%;padding:1rem;background-color:#f3f4f6;cursor:pointer}.accordion .accordion-header .title{font-weight:bold;line-height:1.2}.accordion .accordion-header .icon-wrapper{background-color:#1d4ed8;border-radius:9999px;padding:0.3rem;display:flex;align-items:center;justify-content:center}.accordion .accordion-header .icon-wrapper .icon{fill:white}.accordion .accordion-content{background-color:white;max-height:0;overflow:hidden;opacity:0;transition:max-height 0.1s ease, opacity 0.1s ease}.accordion .accordion-content.expanded{max-height:1000px;opacity:1}.accordion .accordion-content.collapsed{max-height:0;opacity:0}.accordion .accordion-content .accordion-slot-wrapper ::slotted(.accordion-item){display:flex;justify-content:space-between;align-items:center;padding:0.75rem 1rem;background-color:#e5e7eb;border-bottom:1px solid #d1d5db;color:inherit;text-decoration:none;transition:background-color 0.2s ease}.accordion .accordion-content .accordion-slot-wrapper ::slotted(.accordion-item):hover{background-color:rgb(217.4695652174, 220.3565217391, 226.1304347826)}.accordion .accordion-content .accordion-slot-wrapper ::slotted(.accordion-item) span{margin-left:16px}.accordion .accordion-content .accordion-slot-wrapper ::slotted(.accordion-item) .icon{margin-left:0.5rem;width:1.2rem;height:1.2rem}";

const MenuAccordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
};
MenuAccordion.style = menuAccordionCss;

export { MenuAccordion as menu_accordion };
//# sourceMappingURL=menu-accordion.entry.js.map

//# sourceMappingURL=menu-accordion.entry.js.map