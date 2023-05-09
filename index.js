// get the basics right

// utilise .reduce()
// 1. input number
// 2. push number to array
// 3. total up array
// 4. display total
// 5. clear all values/html

// additional
// 1. set goal
// 2. display high score (best goal)
// 3. local storage
// 4. use arrow functions where possible

document.querySelector(".container").innerHTML = `
    <header>
        <h1>PUSH-UP <span>CALCULATOR<span></h1>
        <p>Track your push ups! 💪</p>
    </header>

    <div class="question-box">
        <h3>What's your pushup target today?</h3>
        <input type="number" id="target-el" placeholder="e.g. 80"/>
        <button id="target-btn">Submit Target</button>
    </div>

    <div class="user-input-box hide">
        <label for="pushups">Input your push-up sets as you complete them during the day!</label>
        <input type="number" name="pushups" id="user-pushup-input" placeholder="e.g. 62"/>
        <button id="submit-btn">Submit set</button>
    </div>

    <div class="user-dashboard">
        <div id="new-target-el" class="new-target-el"></div>
        <div class="highscores-box">
            <div id="highscore-el"></div>
            <div id="desired-score-el"></div>
        </div>
    </div>
`;

let targetEl = document.getElementById("target-el");
let userInput = document.getElementById("user-pushup-input");
let highscoreEl = document.getElementById("highscore-el");

// submit target event listener
document.getElementById("target-btn").addEventListener("click", () => {
  showHideEls();
  //   show target required in dashboard
  document.getElementById(
    "new-target-el"
  ).innerHTML = `Today's target 🎯: <span>${targetEl.value}</span> pushups`;
});

function showHideEls() {
  document.querySelector(".user-input-box").classList.add("show");
  document.querySelector(".question-box").classList.add("hide");
}

//   highscoreEl.textContent = `Highscore ⭐️ ${userInput.value}`;

// submit actual pushups completed event listener

document.getElementById("submit-btn").addEventListener("click", () => {
  highscoreEl.innerHTML = `Highscore ⭐️ <span>${userInput.value}</span>`;
});
