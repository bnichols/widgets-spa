/* jshint -W030 */
describe('WidgetController', function() {
  var controller;
  var widgets = testData.getMockWidgets();

  beforeEach(function() {
    bard.appModule('app');
    bard.appModule('app.widget');
    bard.inject('$controller', '$q', '$log',
      '$rootScope', 'widgetDataservice', '$state');
    $state.current = {name: 'widget'};
  });

  beforeEach(function() {
    sinon.stub(widgetDataservice, 'getAll').returns($q.when(widgets));
    controller = $controller('WidgetController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Widget controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have widgets count of 3', function() {
        expect(controller.widgets).to.have.length(3);
      });
    });
  });
});
