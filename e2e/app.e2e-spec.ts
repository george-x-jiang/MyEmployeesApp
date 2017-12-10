import { AppPage } from './app.po';

describe('my-employees-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display company name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Howell, Waters and Wright');
  });
});
