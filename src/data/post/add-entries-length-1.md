---
author: Absynthe
publishDate: 2025-01-03T23:24:00.000Z
title: Light/Dark Mode Toggle
excerpt: For all these projects, you can write unit tests to test individual
  functions (e.g., calculations, input validation) and integration tests for the
  overall functionality (e.g., simulating clicks, verifying DOM changes). Use
  console.log and browser developer tools for debugging. Let me know which
  project you’d like to work on, and I can help you get started!
image: ~/assets/images/mtg-wallpaper.png
category: Web Development
tags:
  - web dev
canonical: "{{site.url}}/blog/{{slug}}"
---
```javascript
let playerScore = 0;
let computerScore = 0;

const statusElement = document.getElementById('status');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resetButton = document.getElementById('reset');
const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.getAttribute('data-choice');
    playRound(playerChoice);
  });
});

resetButton.addEventListener('click', resetGame);

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateStatus(playerChoice, computerChoice, result);
  updateScore(result);
}

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'draw';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

function updateStatus(playerChoice, computerChoice, result) {
  if (result === 'win') {
    statusElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You win!`;
  } else if (result === 'lose') {
    statusElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You lose!`;
  } else {
    statusElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. It's a draw!`;
  }
}

function updateScore(result) {
  if (result === 'win') playerScore++;
  if (result === 'lose') computerScore++;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  statusElement.textContent = 'Make your move!';
}
```
