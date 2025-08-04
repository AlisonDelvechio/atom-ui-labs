export declare class MenuAccordion {
    heading: string;
    device: 'web' | 'mobile';
    expanded: boolean;
    items: string[];
    isExpanded: boolean;
    componentWillLoad(): void;
    private renderExpandIcon;
    private getExpandMoreIcon;
    private getExpandLessIcon;
    private getChevronRightIcon;
    toggleAccordion(): void;
    render(): any;
}
