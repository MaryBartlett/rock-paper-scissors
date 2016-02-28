import rockPaperScissors from './index';

describe('Controller: rockPaperScissors', function() {
  let $controller;

  beforeEach(angular.mock.module(rockPaperScissors));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to Name', function() {
    let ctrl = $controller('rockPaperScissorsController');
    expect(ctrl.name).toBe('Name');
  });
});
