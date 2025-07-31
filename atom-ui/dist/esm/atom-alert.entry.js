import { r as registerInstance, c as createEvent, h } from './index-C63bCTfv.js';

const atomAlertCss = ".alert{height:44px;width:30.5rem;max-width:1216px;min-width:384px;border-radius:5px;padding:25px;display:flex;align-items:center;font-family:sans-serif;box-sizing:border-box;box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.2);gap:0.5rem}.alert.alert--mobile{width:19.5rem;height:60px}.alert.alert--success{background-color:#cff3de;border:1px solid #074e25}.alert.alert--error{background-color:#f5ced5;border:1px solid #520413}.alert.alert--warning{background-color:#fef4d6;border:1px solid #644f13}.alert.alert--info{background-color:#ccdfee;border:1px solid #002744}.content{flex:1;font-size:1rem;line-height:1.4;word-break:break-word}.icon{width:1.5rem;height:1.5rem;flex-shrink:0}.close-icon{background:transparent;border:none;font-size:1.25rem;cursor:pointer;padding:0;line-height:1}.text-red-700{color:#520413}.text-green-700{color:#074e25}.text-yellow-700{color:#644f13}.text-blue-700{color:#003a66}.text-gray-700{color:#374151}.icon-red-600{color:#dc2626}.icon-green-600{color:#16a34a}.icon-yellow-600{color:#ca8a04}.icon-blue-600{color:#2563eb}.icon-gray-600{color:#4b5563}.stroke-red-200{border-left-color:#fecaca}.stroke-green-200{border-left-color:#bbf7d0}.stroke-yellow-200{border-left-color:#979471}.stroke-blue-200{border-left-color:#bfdbfe}.stroke-gray-200{border-left-color:#e5e7eb}";

const AtomAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atomClick = createEvent(this, "atomClick");
    }
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
        const classes = [
            'alert',
            `alert--${this.status}`,
            this.device === 'mobile' ? 'alert--mobile' : '',
            this.strokeColor,
        ].join(' ');
        return (h("div", { key: '92df9fc096072a732e1b08623df7f375008fb9a9', class: classes }, this.renderIcon(), h("div", { key: '245bbd61a7ae0576355dea425adae9bfc8eccbe5', class: `content ${this.textColor || ''}` }, this.text), this.renderCloseIcon()));
    }
};
AtomAlert.style = atomAlertCss;

export { AtomAlert as atom_alert };
//# sourceMappingURL=atom-alert.entry.js.map

//# sourceMappingURL=atom-alert.entry.js.map