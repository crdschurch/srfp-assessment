import { GroupLeaderApplicationPage } from './app.po';

describe('group-leader-application App', () => {
  let page: GroupLeaderApplicationPage;

  beforeEach(() => {
    page = new GroupLeaderApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
