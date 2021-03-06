const ResponsePage = require('../../src/js/pages/responsePage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Response Page', () => {
  beforeEach(() => {
    page = new ResponsePage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      // expect(page.$el).toContainHtml('<h1>response 0</h1>');
    });
  });

  describe('clicking the watch face', () => {
    it('should take the user to the tapPage (Home)', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('tap');
    });
  });

  describe('clicking the top button', () => {
    it('should take the user to the tapPage (Home)', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('top');
      expect(window.App.navigate).toHaveBeenCalledWith('tap');
    });
  });
});
