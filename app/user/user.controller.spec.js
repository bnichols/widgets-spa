/* jshint -W030 */
describe('UserController', function() {
  var controller;
  var users = testData.getMockUsers();

  beforeEach(function() {
    bard.appModule('app');
    bard.appModule('app.user');
    bard.inject('$controller', '$q', '$log',
      '$rootScope', 'userDataservice', '$state');
    $state.current = {name: 'user'};
  });

  beforeEach(function() {
    sinon.stub(userDataservice, 'getAll').returns($q.when(users));
    controller = $controller('UserController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('User controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have user count of 2', function() {
        expect(controller.users).to.have.length(2);
      });
    });
  });
});
