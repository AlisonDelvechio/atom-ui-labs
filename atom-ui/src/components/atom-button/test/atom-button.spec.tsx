import { newSpecPage } from '@stencil/core/testing';
import { AtomButton } from '../atom-button';

describe('atom-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: `<atom-button></atom-button>`,
    });
    expect(page.root).toEqualHtml(`
      <atom-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </atom-button>
    `);
  });
});
