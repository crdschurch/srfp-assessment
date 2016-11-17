import { CrdsDdkPage } from './app.po';

describe('crds-styleguide App', function() {
  let page: CrdsDdkPage;

  beforeEach(() => {
    page = new CrdsDdkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
