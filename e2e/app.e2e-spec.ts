import { Angular2BlogAppPage } from './app.po';

describe('angular2-blog-app App', function() {
  let page: Angular2BlogAppPage;

  beforeEach(() => {
    page = new Angular2BlogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
