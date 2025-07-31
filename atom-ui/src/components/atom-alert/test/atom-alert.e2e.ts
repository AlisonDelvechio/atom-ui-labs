import { newE2EPage } from '@stencil/core/testing';

describe('atom-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<atom-alert></atom-alert>');

    const element = await page.find('atom-alert');
    expect(element).toHaveClass('hydrated');
  });
});
