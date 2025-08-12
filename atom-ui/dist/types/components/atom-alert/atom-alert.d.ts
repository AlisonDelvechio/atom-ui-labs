import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtomAlert {
    device: 'web' | 'mobile';
    status: 'success' | 'error' | 'warning' | 'info';
    icon: 'check' | 'error' | 'warning' | 'info';
    text: string;
    textColor: string;
    iconColor: string;
    strokeColor: string;
    hasCloseIcon: boolean;
    hasStatusIcon: boolean;
    atomClick: EventEmitter<void>;
    private handleClick;
    private renderIcon;
    private renderCloseIcon;
    private renderContent;
    render(): any;
}
