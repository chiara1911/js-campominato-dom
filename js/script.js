
// CAMPO MINATO - DOM


// 1. Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco

// 2. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
// >> - Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// >> - In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.




// >> - La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).
// >> - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



// 2. creare bottone per generare quadratini
"use strict";

const send = document.querySelector('input');
const result = document.getElementById('result');
let bombAr = [];
const numBomb = 16;
let squareNum;
let difference;

// richiamo funzionalità al bottone

send.addEventListener('click', function () {
    // dichiaro la costante della griglia intera
    const playground = document.getElementById('playground');
    // dichiaro quanti quadratini voglio in totale
    squareNum = parseInt(document.getElementById('difficult').value);
    bombAr = createBombs();
    console.log(bombAr);
    difference = squareNum - numBomb;

    playground.innerHTML = '';
    //richiamo il ciclo per stampare i vari quadrati
    for (let i = 1; i <= squareNum; i++) {
        // genero quadratino chiamando la funzione
        let square1 = miniSquare(i, squareNum);
        // appendo il quadratino alla griglia
        playground.append(square1);
    }

});
// creazione bombe
function createBombs() {
    let bombs = [];
    let i = 0;
    //  generare 16 numeri random 
    while (i < numBomb) {
        //  generato un numero random
        let bomb = parseInt(getRndInteger(1, squareNum));
        // e l'aggiungo solo se non è già presente
        if (!bombs.includes(bomb)) {
            i++;
            bombs.push(bomb);
        }
    }
    return bombs;
}


// fare una funzione per creare un quadratino

function miniSquare(squareEl, allBox) {

    let squareWidth = Math.sqrt(allBox);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = squareEl;



    square.addEventListener('click', function () {
        if (bombAr.includes(squareEl)) {
            square.classList.add('bomb');
            square.innerHTML ='<i class="fa-solid fa-bomb fa-flip fa-xl"></i>';
            alert("OPS! Hai trovato una bomba, quindi hai perso!");

        } else {
            square.classList.add('active');
            result.innerHTML = 'hai cliccato la casella' + ' ' + squareEl;
            difference--;
            if (difference === 0) {
                alert('hai vinto');
            }

        }

    })
    return square;

};


//utility

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// fare funzione per numero random rosso(bomba)
//     bomb.addEventListener('click', function () {
//         const cpu = document.getElementById('cpu');
//         const cpuNum = getRndInteger(1, 100);
//         let bomb = miniSquare(cpuNum);

//         square.classList.add('bomb');
//         console.log(cpuNum);
//     });
//     return squareNum;