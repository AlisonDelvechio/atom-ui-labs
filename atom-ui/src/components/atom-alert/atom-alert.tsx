import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'atom-alert',
  styleUrl: 'atom-alert.scss',
  shadow: true,
})
export class AtomAlert {
  @Prop() device: 'web' | 'mobile' = 'web';
  @Prop() status: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Prop() icon: 'check' | 'error' | 'warning' | 'info' = 'info';
  @Prop() text: string;
  @Prop({ attribute: 'textcolor' }) textColor: string;
  @Prop({ attribute: 'iconcolor' }) iconColor: string; 
  @Prop({ attribute: 'strokecolor' }) strokeColor: string;
  @Prop({ attribute: 'hascloseicon' }) hasCloseIcon: boolean = false;
  @Prop({ attribute: 'hasstatusicon' }) hasStatusIcon: boolean = true;
  @Event() atomClick: EventEmitter<void>;

  private handleClick = () => {
    this.atomClick.emit();
  };

  private renderIcon() {
    if (!this.hasStatusIcon) return null;

    const iconClass = `icon ${this.iconColor || ''}`;

    const icons = {
      check: (
        <svg viewBox="0 0 24 24" class={iconClass} width="24" height="24">
          <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
      ),
      error: (
        <svg viewBox="0 0 24 24" class={iconClass} width="24" height="24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" />
          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" stroke-width="2" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      ),
      warning: (
        <svg viewBox="0 0 24 24" class={iconClass} width="24" height="24">
          <path d="M12 2L2 22h20L12 2z" fill="none" stroke="currentColor" stroke-width="2" />
          <line x1="12" y1="8" x2="12" y2="14" stroke="currentColor" stroke-width="2" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      ),
      info: (
        <svg viewBox="0 0 24 24" class={iconClass} width="24" height="24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" />
          <line x1="12" y1="10" x2="12" y2="16" stroke="currentColor" stroke-width="2" />
          <circle cx="12" cy="7" r="1" fill="currentColor" />
        </svg>
      ),
    };

    return icons[this.icon] || icons['info'];
  }

  private renderCloseIcon() {
    if (!this.hasCloseIcon) return null;

    return (
      <button
        class={`close-icon ${this.iconColor || ''}`}
        aria-label="Fechar alerta"
        onClick={this.handleClick}
      >
        ✖
      </button>
    );
  }

  render() {
    console.log('teste');
    const classes = [
      'alert',
      `alert--${this.status}`,
      this.device === 'mobile' ? 'alert--mobile' : '',
      this.strokeColor,
    ].join(' ');

    return (
      <div class={classes}>
        {this.renderIcon()}
        <div class={`content ${this.textColor || ''}`}>
          {this.text}
        </div>
        {this.renderCloseIcon()}
      </div>
    );
  }
}