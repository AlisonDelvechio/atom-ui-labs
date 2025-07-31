import { newE2EPage } from '@stencil/core/testing';

describe('atom-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<atom-button></atom-button>');

    const element = await page.find('atom-button');
    expect(element).toHaveClass('hydrated');
  });
});
