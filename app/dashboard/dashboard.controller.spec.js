/* jshint -W030 */
describe('DashboardController', function() {
  var controller;
  var users = testData.getMockUsers();
  var widgets = testData.getMockWidgets();

  beforeEach(function() {
    bard.appModule('app');
    bard.appModule('app.dashboard');
    bard.inject('$controller', '$q', '$log',
      '$rootScope', 'userDataservice', 'widgetDataservice');
  });

  beforeEach(function() {
    sinon.stub(userDataservice, 'getAll').returns($q.when(users));
    sinon.stub(widgetDataservice, 'getAll').returns($q.when(widgets));
    controller = $controller('DashboardController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Dashboard controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have user count of 2', function() {
        expect(controller.users).to.have.length(2);
      });

      it('should have widget count of 3', function() {
        expect(controller.widgets).to.have.length(3);
      });
    });
  });
});
