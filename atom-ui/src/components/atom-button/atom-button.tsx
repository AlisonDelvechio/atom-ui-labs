import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'atom-button',
  styleUrl: 'atom-button.scss',
  shadow: true,
})
export class AtomButton {
  /** Texto opcional para acessibilidade */
  @Prop() label: string;

  /** Tipo do botão (button, submit, etc) */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /** Estilo customizável */
  @Prop() variant: 'primary' | 'secondary' = 'primary';

  /** Evento emitido ao clicar */
  @Event() atomClick: EventEmitter<void>;

  private handleClick = () => {
    this.atomClick.emit();
  };

  render() {
    return (
      <button
        type={this.type}
        class={`atom-button ${this.variant}`}
        onClick={this.handleClick}
        aria-label={this.label}
      >
        <slot />
      </button>
    );
  }
}