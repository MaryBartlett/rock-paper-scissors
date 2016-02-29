import rockPaperScissors from './index';

describe('Controller: rockPaperScissors', function() {
    let $controller;
    let ctrl;

    const rockClick = {
        target: {
            id: 'rock'
        }
    };

    const paperClick = {
        target: {
            id: 'paper'
        }
    };

    const scissorsClick = {
        target: {
            id: 'scissors'
        }
    };

    beforeEach(angular.mock.module(rockPaperScissors));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
        ctrl = $controller('rockPaperScissorsController');

    }));




    describe('.playGame', function () {

        describe('returns \'draw\' if both values are', function () {

            it('rock', function() {
                spyOn(Math, 'random').and.returnValue(0.0); // rock

                expect(ctrl.playGame(rockClick)).toEqual('draw');
            });

            it('paper', function() {
                spyOn(Math, 'random').and.returnValue(0.3); // paper

                expect(ctrl.playGame(paperClick)).toEqual('draw');
            });

            it('scissors', function() {
                spyOn(Math, 'random').and.returnValue(0.8); // scissors

                expect(ctrl.playGame(scissorsClick)).toEqual('draw');
            });

            it('scissors', function() {
                spyOn(Math, 'random').and.returnValue(1); // scissors

                expect(ctrl.playGame(scissorsClick)).toEqual('draw');
            });
        });

        describe('rock beats scissors', function () {

            it('when rock selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.8); // scissors

                expect(ctrl.playGame(rockClick)).toEqual('rock');
            });

            it('when scissors selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.0); // rock

                expect(ctrl.playGame(scissorsClick)).toEqual('rock');
            });
        });


        describe('paper beats rock', function () {

            it('when paper selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.1); // rock

                expect(ctrl.playGame(paperClick)).toEqual('paper');
            });

            it('when rock selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.4); // paper

                expect(ctrl.playGame(rockClick)).toEqual('paper');
            });
        });

        describe('scissors beats paper', function () {

            it('when scissors selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.5); // paper

                expect(ctrl.playGame(scissorsClick)).toEqual('scissors');
            });

            it('when paper selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.9); // scissors

                expect(ctrl.playGame(paperClick)).toEqual('scissors');
            });
        });
    });
});
