var testData = (function() {
  return {
    getMockWidgets: getMockWidgets,
    getMockUsers: getMockUsers
  };

  function getMockWidgets() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/',
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'dashboard',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      }
    ];
  }

  function getMockWidgets() {
    return [
      {name: 'Widget 1', color: 'red', price: 3.33, melts: false, inventory: 55},
      {name: 'Widget 2', color: 'green', price: 10.00, melts: true, inventory: 1},
      {name: 'Widget 3', color: 'yellow', price: 999.99, melts: true, inventory: 22}
    ];
  }

  function getMockUsers() {
    return [
      {name: 'Brent Nichols', gravatar: 'http://fake.url'},
      {name: 'Thomas Hopkins', gravatar: 'http://anotherFake.url'},
    ];
  }
})();
