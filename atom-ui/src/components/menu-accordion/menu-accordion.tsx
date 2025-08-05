import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'menu-accordion',
  styleUrl: 'menu-accordion.scss',
  shadow: true,
})
export class MenuAccordion {
  @Prop() heading: string = '';
  @Prop() device: 'web' | 'mobile' = 'web';
  @Prop() expanded: boolean = false;

  @State() isExpanded: boolean;

  componentWillLoad() {
    this.isExpanded = this.expanded;
  }

  toggleAccordion() {
    this.isExpanded = !this.isExpanded;
  }

  private renderExpandIcon() {
    return this.isExpanded ? this.getExpandLessIcon() : this.getExpandMoreIcon();
  }

  private getExpandMoreIcon() {
    return (
      <svg class="icon" width="24" height="24" viewBox="0 0 24 24">
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
      </svg>
    );
  }

  private getExpandLessIcon() {
    return (
      <svg class="icon" width="24" height="24" viewBox="0 0 24 24">
        <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    );
  }

  render() {
    return (
      <div class={`accordion ${this.device} ${this.isExpanded ? 'expanded' : ''}`}>
        <button
          class="accordion-header"
          onClick={() => this.toggleAccordion()}
          aria-expanded={this.isExpanded}
        >
          <span class="title">{this.heading}</span>
          {this.renderExpandIcon()}
        </button>

        <div class={`accordion-content ${this.isExpanded ? 'expanded' : 'collapsed'}`}>
          <div class="accordion-slot-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}