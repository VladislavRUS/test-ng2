import { AnimTestPage } from './app.po';

describe('anim-test App', () => {
  let page: AnimTestPage;

  beforeEach(() => {
    page = new AnimTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
