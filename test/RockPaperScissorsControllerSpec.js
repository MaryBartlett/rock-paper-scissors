describe('RockPaperScissorsController', function() {
    var scope, controller;

    // Initialization of the AngularJS application before each test case
    beforeEach(module('RockPaperScissors'));

    // Injection of dependencies
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope;
        controller = $controller;
    }));

    it('should set winner onto scope', function() {

        // Starting the controller
        controller('RockPaperScissors', {'$scope': scope });

        // We expect the controller to put the right value onto the scope
        expect(scope.winner).toEqual(0);

    });

});