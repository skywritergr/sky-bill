'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('skyBillApp'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope) {
    jasmine.getJSONFixtures().fixturesPath='base/test/mock';

    scope = $rootScope.$new();
    scope.data = getJSONFixture('data.json');
  }));

  it('should attach a JSON object to the scope', function () {
    expect(scope.data).not.toBeUndefined(); 
  });

  it('should have 3 subscriptions', function(){
    expect(scope.data.package.subscriptions.length).toBe(3);
  });

  it('should have a total cost of 136.03', function(){
    expect(scope.data.total).toBe(136.03);
  })
});
