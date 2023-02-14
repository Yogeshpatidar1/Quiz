const quizData = [{
    question: "What is the full form of Wi-Fi?",
    a: "Wireless focus",
    b: "Wired Fidelity",
    c: "wired focus",
    d: "Wireless fidelity",
    correct: "d",
},
{
    question: "Ordered lists are",
    a: "not similar to the bullets created in MS Word",
    b: "not similar to the numbered lists created MS Word",
    c: "similar to the numbered lists created MS Word",
    d: "similar to the bullets created in MS word",
    correct: "c",
},
{
    question: "The item present within the angled brackets in an HTML tag is",
    a: "identifier",
    b: "data",
    c: "tags",
    d: "text",
    correct: "a",
},
{
    question: "BORDER attributes specifies the",
    a: "thickness of the border around the table",
    b: "space between two borders",
    c: "space between two cells",
    d: "width of the table",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Your Score is : ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);