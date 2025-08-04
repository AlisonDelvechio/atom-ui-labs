import { newE2EPage } from '@stencil/core/testing';

describe('menu-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<menu-accordion></menu-accordion>');

    const element = await page.find('menu-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
