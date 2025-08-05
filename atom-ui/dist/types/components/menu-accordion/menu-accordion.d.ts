export declare class MenuAccordion {
    heading: string;
    device: 'web' | 'mobile';
    expanded: boolean;
    isExpanded: boolean;
    componentWillLoad(): void;
    toggleAccordion(): void;
    private renderExpandIcon;
    private getExpandMoreIcon;
    private getExpandLessIcon;
    render(): any;
}
