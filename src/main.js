'use strict';

require('./main.scss');



export class Rockpaperscissors {

    constructor() {
        console.log("constructor started");
        this.init();
    }

    // selectComputerPlayer() {
    //     console.log("selectComputerPlayer");
    //     this.computerChoice = Math.random();
    //     if (this.computerChoice <= 0.24) {
    //         this.computerChoice = "Rock";
    //     } else if (this.computerChoice > 0.24 && this.computerChoice <= 0.50) {
    //         this.computerChoice = "Paper";
    //     } else {
    //         this.computerChoice = "Scissors";
    //     }
    // }

    selectPlayer(event) {
        console.log("select player");
        this.userChoice = event.target.value;
        document.querySelector('#playerSelected').innerHTML = "Player selected : " + this.userChoice;
    }

    // play(choice1, choice2) {
    //     console.log("play");
    //     choice1 = choice1.toLowerCase();
    //     choice2 = choice2.toLowerCase();
    //     if (choice1 === choice2) {
    //         return "It's a tie!";
    //     }
    //     if (choice1 === "rock") {
    //         if (choice2 === "scissors") {
    //             // rock wins
    //             return "You win!";
    //         } else {
    //             // paper wins
    //             return "You lose! Try again.";
    //         }
    //     }
    //     if (choice1 === "paper") {
    //         if (choice2 === "rock") {
    //             // paper wins
    //             return "You win!";
    //         } else {
    //             // scissors wins
    //             return "You lose! Try again.";
    //         }
    //     }
    //     if (choice1 === "scissors") {
    //         if (choice2 === "rock") {
    //             // rock wins
    //             return "You lose! Try again.";
    //         } else {
    //             // scissors wins
    //             return "You win!";
    //         }
    //     }
    // }

    playGame() {
        console.log("playGame");
            this.computerChoice = Math.random();
            if (this.computerChoice <= 0.24) {
                this.computerChoice = "rock";
            } else if (this.computerChoice > 0.24 && this.computerChoice <= 0.50) {
                this.computerChoice = "paper";
            } else {
                this.computerChoice = "scissors";
            }

            let choice1 = this.computerChoice;
            let choice2 = this.userChoice;
            let results = "";
            if (choice1 === choice2) {
                results = "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    results = "You win!";
                } else {
                    // paper wins
                    results = "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    results = "You win!";
                } else {
                    // scissors wins
                    results = "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    // rock wins
                    results = "You lose! Try again.";
                } else {
                    // scissors wins
                    results = "You win!";
                }
            }
            // this.selectComputerPlayer();
            //let results = this.play(this.userChoice, this.computerChoice);
            document.querySelector('#app').innerHTML = '<div class="main-component"><h1 class="main-component__title">' + results + '</h1></div>';
        

       
    }

    resetGame() {
        document.querySelector('#app').innerHTML = "";
        document.querySelector('#playerSelected').innerHTML = "";
    }


    init() {
        console.log("init");
        let rock = document.querySelector('#rock');
        let paper = document.querySelector('#paper');
        let scissors = document.querySelector('#scissors');
        let startGame = document.querySelector('#start');
        let restart = document.querySelector('#restart');
        rock.addEventListener('click', this.selectPlayer, false);
        paper.addEventListener('click', this.selectPlayer, false);
        scissors.addEventListener('click', this.selectPlayer, false);
        startGame.addEventListener('click', this.playGame, false);
        restart.addEventListener('click', this.resetGame, false);
    }




}

window.startplay = new Rockpaperscissors();



