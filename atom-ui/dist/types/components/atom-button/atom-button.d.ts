import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtomButton {
    /** Texto opcional para acessibilidade */
    label: string;
    /** Tipo do botão (button, submit, etc) */
    type: 'button' | 'submit' | 'reset';
    /** Estilo customizável */
    variant: 'primary' | 'secondary';
    /** Evento emitido ao clicar */
    atomClick: EventEmitter<void>;
    private handleClick;
    render(): any;
}
