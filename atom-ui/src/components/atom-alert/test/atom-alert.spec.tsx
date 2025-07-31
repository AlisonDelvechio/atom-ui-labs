import { newSpecPage } from '@stencil/core/testing';
import { AtomAlert } from '../atom-alert';

describe('atom-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert></atom-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <atom-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </atom-alert>
    `);
  });
});
