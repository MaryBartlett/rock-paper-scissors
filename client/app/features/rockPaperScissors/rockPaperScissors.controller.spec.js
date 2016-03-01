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
                ctrl.playGame(rockClick);

                expect(ctrl.winner).toEqual('draw');
            });

            it('paper', function() {
                spyOn(Math, 'random').and.returnValue(0.3); // paper
                ctrl.playGame(paperClick);

                expect(ctrl.winner).toEqual('draw');
            });

            it('scissors', function() {
                spyOn(Math, 'random').and.returnValue(0.8); // scissors
                ctrl.playGame(scissorsClick);

                expect(ctrl.winner).toEqual('draw');
            });

            it('scissors', function() {
                spyOn(Math, 'random').and.returnValue(1); // scissors
                ctrl.playGame(scissorsClick);

                expect(ctrl.winner).toEqual('draw');
            });
        });

        describe('rock beats scissors', function () {

            it('when rock selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.8); // scissors
                ctrl.playGame(rockClick);

                expect(ctrl.winner).toEqual('player');
            });

            it('when scissors selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.0); // rock
                ctrl.playGame(scissorsClick);

                expect(ctrl.winner).toEqual('computer');
            });
        });


        describe('paper beats rock', function () {

            it('when paper selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.1); // rock
                ctrl.playGame(paperClick);

                expect(ctrl.winner).toEqual('player');
            });

            it('when rock selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.4); // paper
                ctrl.playGame(rockClick)

                expect(ctrl.winner).toEqual('computer');
            });
        });

        describe('scissors beats paper', function () {

            it('when scissors selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.5); // paper
                ctrl.playGame(scissorsClick);

                expect(ctrl.winner).toEqual('player');
            });

            it('when paper selected by user', function () {
                spyOn(Math, 'random').and.returnValue(0.9); // scissors
                ctrl.playGame(paperClick);

                expect(ctrl.winner).toEqual('computer');
            });
        });

        describe('score card gets updated', function () {
            // not the best tests - ideally this would be testing only one change
            // need to figure out how to properly create a new instance of the controller each time

            it('gets updated when player is the winner', function () {
                spyOn(Math, 'random').and.returnValue(0.5); // paper
                ctrl.playGame(scissorsClick);

                expect(ctrl.scoreCard).toEqual({
                    computer: 3,
                    player: 4,
                    draw: 4
                });
            });

            it('gets updated when computer is the winner', function () {
                spyOn(Math, 'random').and.returnValue(0.0); // rock
                ctrl.playGame(scissorsClick);

                expect(ctrl.scoreCard).toEqual({
                    computer: 4,
                    player: 4,
                    draw: 4
                });
            });

            it('gets updated when it is a draw', function () {
                spyOn(Math, 'random').and.returnValue(0.0); // rock
                ctrl.playGame(rockClick);

                expect(ctrl.scoreCard).toEqual({
                    computer: 4,
                    player: 4,
                    draw: 5
                });
            });

        });
    });
});
