import { Rockpaperscissors } from "main";

describe("main", function() {

    describe("on click start the game", function() {

        it("playGame called", function() {
            window.startplay.playGame();
            assert.isNotNull(results, 'results is not null');
        });

    });

});