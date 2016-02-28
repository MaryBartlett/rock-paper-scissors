import rockPaperScissors from './index';

describe('Controller: rockPaperScissors', function() {
  let $controller, ctrl;

    beforeEach(angular.mock.module(rockPaperScissors));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
        ctrl = $controller('rockPaperScissorsController');
    }));


    describe('determineWinner', function () {

        it('returns \'draw\' if both values are the same', function() {
            expect(ctrl.winner('rock', 'rock')).toEqual('draw');
            expect(ctrl.winner('paper', 'paper')).toEqual('draw');
            expect(ctrl.winner('scissors', 'scissors')).toEqual('draw');
        });

        it('rock beats scissors', function () {
            expect(ctrl.winner('rock', 'scissors')).toEqual('rock');
            expect(ctrl.winner('scissors', 'rock')).toEqual('rock');
        });

        it('paper beats rock', function () {
            expect(ctrl.winner('rock', 'paper')).toEqual('paper');
            expect(ctrl.winner('paper', 'rock')).toEqual('paper');
        });

        it('scissors beats paper', function () {
            expect(ctrl.winner('paper', 'scissors')).toEqual('scissors');
            expect(ctrl.winner('scissors', 'paper')).toEqual('scissors');
        });
  });


    describe('randomValue', function () {

        it('returns rock when Math.random and Math.round results in 0', function () {
            spyOn(Math, 'random').and.returnValue(0.0);
            expect(ctrl.randomValue()).toEqual('rock');
        });

        it('returns paper when Math.random and Math.round results in 1', function () {
            spyOn(Math, 'random').and.returnValue(0.3);
            expect(ctrl.randomValue()).toEqual('paper');
        });


        it('returns paper when Math.random and Math.round results in 2', function () {
            spyOn(Math, 'random').and.returnValue(0.8);
            expect(ctrl.randomValue()).toEqual('scissors');
        });

        it('returns scissors when Math.random and Math.round results in 2', function () {
            spyOn(Math, 'random').and.returnValue(1);
            expect(ctrl.randomValue()).toEqual('scissors');
        });

    });
});
