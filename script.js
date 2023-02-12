const clickGiver = document.querySelector(".click-click");
const clickDisplay = document.querySelector(".click-counter");

const clickGenerators = document.querySelectorAll(".click-generator");

let clickCounter = 0;
let clickMultiplier = 1;

window.onload = function () {
    clickGiver.addEventListener("click", function () {
        clickCounter += clickMultiplier;
        const formattedNumber = clickCounter.toLocaleString("en");
        clickDisplay.innerHTML = formattedNumber + " clicks";
    });
    const formattedNumber = clickCounter.toLocaleString("en");
    clickDisplay.innerHTML = formattedNumber + " clicks";

    let isCalled = false;
    let generatorCost = 50;
    let toGenerate = 0;

    for (let a = 0; a < clickGenerators.length; a++) {
        clickGenerators[a].innerHTML = generatorCost + " clicks";

        function generateClicks() {
            setInterval(function() {
                clickCounter += toGenerate;
                clickDisplay.innerHTML = clickCounter + ' clicks';
            }, 1000);
        }

        clickGenerators[a].addEventListener("click", function checkIf() {
            if (clickCounter >= generatorCost) {

                if (isCalled == false) {
                    generateClicks();
                    isCalled = true;
                }

                toGenerate++;
                clickCounter = clickCounter - generatorCost;
                generatorCost = generatorCost + 100;
                for (let b = 0; b < clickGenerators.length; b++) {
                    clickGenerators[b].innerHTML = generatorCost + " clicks";
                }

                clickDisplay.innerHTML = clickCounter + " clicks";

                removeEventListener();
            }
            function removeEventListener() {
                clickGenerators[a].removeEventListener('click', checkIf, false);
                clickGenerators[a].style.color = "red";
            }

        });
    }
};

/* First Upgrade */

const fUpgrade = document.querySelector(".first-upgrade");
const fText = document.querySelector(".first-text");
const fCost = document.querySelector(".first-cost");

let firstCost = 100;
let firstMultiplier = 1;

fUpgrade.addEventListener("click", function () {
    if (clickCounter >= firstCost) {
        clickCounter = clickCounter - firstCost;
        clickMultiplier += firstMultiplier;
        firstCost *= 10;
        const formattedFCost = firstCost.toLocaleString("en");
        fCost.innerHTML = formattedFCost + " clicks";
    }
    clickDisplay.innerHTML = clickCounter + " clicks";
});

/* Second Upgrade */

const SUpgrade = document.querySelector(".second-upgrade");
const SText = document.querySelector(".second-text");
const SCost = document.querySelector(".second-cost");

let secondCost = 1e3;
let secondMultiplier = 5;

SUpgrade.addEventListener("click", function () {
    if (clickCounter >= secondCost) {
        clickCounter = clickCounter - secondCost;
        clickMultiplier += secondMultiplier;
        secondCost *= 10;
        const formattedSCost = secondCost.toLocaleString("en");
        SCost.innerHTML = formattedSCost + " clicks";
    }
    clickDisplay.innerHTML = clickCounter + " clicks";
});

/* Third Upgrade */

const TUpgrade = document.querySelector(".third-upgrade");
const TText = document.querySelector(".third-text");
const TCost = document.querySelector(".third-cost");

let thirdCost = 1e4;
let thirdMultiplier = 10;

TUpgrade.addEventListener("click", function () {
    if (clickCounter >= thirdCost) {
        clickCounter = clickCounter - thirdCost;
        clickMultiplier += thirdMultiplier;
        thirdCost *= 10;
        const formattedTCost = thirdCost.toLocaleString("en");
        TCost.innerHTML = formattedTCost + " clicks";
    }
    clickDisplay.innerHTML = clickCounter + " clicks";
});

/* Fourth Upgrade */

const foUpgrade = document.querySelector(".fourth-upgrade");
const foText = document.querySelector(".fourth-text");
const foCost = document.querySelector(".fourth-cost");

let fourthCost = 5e4;
let fourthMultiplier = 25;

foUpgrade.addEventListener("click", function () {
    if (clickCounter >= fourthCost) {
        clickCounter = clickCounter - fourthCost;
        clickMultiplier += fourthMultiplier;
        fourthCost *= 10;
        const formattedFoCost = fourthCost.toLocaleString("en");
        foCost.innerHTML = formattedFoCost + " clicks";
    }
    clickDisplay.innerHTML = clickCounter + " clicks";
});

/* Fifth Upgrade */

const fiUpgrade = document.querySelector(".fifth-upgrade");
const fiText = document.querySelector(".fifth-text");
const fiCost = document.querySelector(".fifth-cost");

let fifthCost = 1e5;
let fifthMultiplier = 50;

fiUpgrade.addEventListener("click", function () {
    if (clickCounter >= fifthCost) {
        clickCounter = clickCounter - fifthCost;
        clickMultiplier += fifthMultiplier;
        fifthCost *= 10;
        const formattedFiCost = fifthCost.toLocaleString("en");
        fiCost.innerHTML = formattedFiCost + " clicks";
    }
    clickDisplay.innerHTML = clickCounter + " clicks";
});

clickDisplay.innerHTML = clickCounter + " clicks";
