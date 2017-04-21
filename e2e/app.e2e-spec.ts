import { ProductStore2.0Page } from './app.po';

describe('product-store2.0 App', () => {
  let page: ProductStore2.0Page;

  beforeEach(() => {
    page = new ProductStore2.0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
