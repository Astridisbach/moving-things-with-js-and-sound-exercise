"use strict"; // Tvinger streng syntaks for at undgå almindelige fejl

// Henter lyd-elementet til game over-lyd
const gameOverSound = document.getElementById("gameoverSound");

// Funktion til at afspille game over-lyden
function playGameOverSound(){
    gameOverSound.currentTime = 0; // Nulstiller lyden, så den starter fra begyndelsen
    gameOverSound.play(); // Afspiller lyden
}

// Henter "dodger"-elementet fra DOM'en
const dodger = document.getElementById("dodger");

// Sætter startpositionen for dodger
    dodger.style.left = "175px";
    dodger.style.bottom = "175px";

// Funktion til at flytte dodger til venstre
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", ""); // Fjerner "px" fra værdien
    const left = parseInt(leftNumbers, 10); // Konverterer til et heltal

    if(left > 0){ // Sørger for, at dodger ikke går udenfor venstre grænse
        dodger.style.left = `${left - 7}px`; // Flytter dodger 7 pixels til venstre
        playSoundOnMovement(); // Afspiller bevægelseslyd
    }
    if(left <= 0){ // Hvis dodger når venstre kant, afspilles game over-lyd
        playGameOverSound();
    }
}

// Funktion til at flytte dodger til højre
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if(left < 360){ // Sørger for, at dodger ikke går udenfor højre grænse
        dodger.style.left = `${left + 7}px`; // Flytter dodger 7 pixels til højre
        playSoundOnMovement();
    }
    if(left >= 360){ // Hvis dodger når højre kant, afspilles game over-lyd
        playGameOverSound();
    }
}

// Funktion til at flytte dodger opad
function moveDodgerUp(){
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if(bottom < 360){ // Sørger for, at dodger ikke går udenfor øvre grænse
        dodger.style.bottom = `${bottom + 7}px`; // Flytter dodger 7 pixels op
        playSoundOnMovement();
    }
    if(bottom >= 360){ // Hvis dodger når toppen, afspilles game over-lyd
        playGameOverSound();
    }
}

// Funktion til at flytte dodger nedad
function moveDodgerDown(){
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if(bottom > 0){ // Sørger for, at dodger ikke går udenfor nederste grænse
        dodger.style.bottom = `${bottom - 7}px`; // Flytter dodger 7 pixels ned
        playSoundOnMovement();
    }
    if(bottom <= 0){ // Hvis dodger når bunden, afspilles game over-lyd
        playGameOverSound();
    }
}

// Lytter efter tastaturinput og flytter dodger i den tilsvarende retning
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
    if(e.key === "ArrowUp"){
        moveDodgerUp();
    }
    if(e.key === "ArrowDown"){
        moveDodgerDown();
    }
});

// Henter lyd-elementet til bevægelseslyd
const movementSound = document.getElementById("movementSound");

// Funktion til at afspille bevægelseslyd
function playSoundOnMovement(){
    movementSound.currentTime = 0; // Nulstiller lyden, så den starter fra begyndelsen
    movementSound.play(); // Afspiller lyden
}