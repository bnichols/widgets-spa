describe('app routes', function() {
  describe('state', function() {
    var dashboardView = 'dashboard/dashboard.html';
    var userView = 'user/user.html';
    var widgetView = 'widget/widget.html';
    var singleWidgetView = 'widget/widget-single.html';
    var singleUserView = 'user/user-single.html';

    beforeEach(function() {
      module('app');
      bard.inject('$httpBackend', '$location',
        '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(dashboardView, '');
      $templateCache.put(userView, '');
      $templateCache.put(widgetView, '');
      $templateCache.put(singleWidgetView, '');
      $templateCache.put(singleUserView, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    // Test dashboard route
    describe('dashboard', function() {
      it('should map state dashboard to url #/ ', function() {
        expect($state.href('index', {})).to.equal('#/');
      });

      it('should map /dashboard route to dashboard template', function() {
        expect($state.get('index').templateUrl).to.equal(dashboardView);
      });

      it('should work with $state.go', function() {
        $state.go('index');
        $rootScope.$apply();
        expect($state.is('index'));
      });
    });

    // Test user route
    describe('user', function() {
      it('should map state user to url #/user ', function() {
        expect($state.href('user', {})).to.equal('#/user');
      });

      it('should map /user route to user template', function() {
        expect($state.get('user').templateUrl).to.equal(userView);
      });

      it('should work with $state.go', function() {
        $state.go('user');
        $rootScope.$apply();
        expect($state.is('user'));
      });
    });

    // Test widget route
    describe('widget', function() {
      it('should map state widget to url #/widget ', function() {
        expect($state.href('widget', {})).to.equal('#/widget');
      });

      it('should map /widget route to widget template', function() {
        expect($state.get('widget').templateUrl).to.equal(widgetView);
      });

      it('should work with $state.go', function() {
        $state.go('widget');
        $rootScope.$apply();
        expect($state.is('widget'));
      });
    });

    // Test createWidget route
    describe('createWidget', function() {
      it('should map state createWidget to url #/widget/create ', function() {
        expect($state.href('createWidget', {})).to.equal('#/widget/create');
      });

      it('should map /widget/create route to createWidget template',
        function() {
          expect($state.get('createWidget')
            .templateUrl).to.equal(singleWidgetView);
        }
      );

      it('should work with $state.go', function() {
        $state.go('createWidget');
        $rootScope.$apply();
        expect($state.is('createWidget'));
      });
    });

    // Test editWidget route
    describe('editWidget', function() {
      it('should map state editWidget to url #/widget/edit ', function() {
        expect($state.href('editWidget', {})).to.equal('#/widget/edit/');
      });

      it('should map /widget/edit route to editWidget template',
        function() {
          expect($state.get('editWidget')
            .templateUrl).to.equal(singleWidgetView);
        }
      );

      it('should work with $state.go', function() {
        $state.go('editWidget');
        $rootScope.$apply();
        expect($state.is('editWidget'));
      });
    });

    // Test viewUser route
    describe('viewUser', function() {
      it('should map state viewUser to url #/user/view ', function() {
        expect($state.href('viewUser', {})).to.equal('#/user/view/');
      });

      it('should map /user/view route to viewUser template',
        function() {
          expect($state.get('viewUser')
            .templateUrl).to.equal(singleUserView);
        }
      );

      it('should work with $state.go', function() {
        $state.go('viewUser');
        $rootScope.$apply();
        expect($state.is('viewUser'));
      });
    });

  });
});
