import { Frontend4parsePage } from './app.po';

describe('frontend4parse App', () => {
  let page: Frontend4parsePage;

  beforeEach(() => {
    page = new Frontend4parsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
