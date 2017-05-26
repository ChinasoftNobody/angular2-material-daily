import { Angular2MaterialPage } from './app.po';

describe('angular2-material App', () => {
  let page: Angular2MaterialPage;

  beforeEach(() => {
    page = new Angular2MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
