import { newSpecPage } from '@stencil/core/testing';
import { MenuAccordion } from '../menu-accordion';

describe('menu-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MenuAccordion],
      html: `<menu-accordion></menu-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <menu-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </menu-accordion>
    `);
  });
});
