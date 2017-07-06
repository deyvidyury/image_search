import { ImageSearchPage } from './app.po';

describe('image-search App', () => {
  let page: ImageSearchPage;

  beforeEach(() => {
    page = new ImageSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
