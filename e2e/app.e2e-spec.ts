import { TryingglobalformsPage } from './app.po';

describe('tryingglobalforms App', function() {
  let page: TryingglobalformsPage;

  beforeEach(() => {
    page = new TryingglobalformsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
