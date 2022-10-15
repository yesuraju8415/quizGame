const ques = [
    {
        'que':"which of the following is markup language?",
        'a':"javascript",
        'b':"css",
        'c':"html",
        'd':"python",
        'correct':"c"
    },
    {
        'que':"value of 10+20 is ",
        'a':"3",
        'b':"1020",
        'c':"50",
        'd':"30",
        'correct':"d"
    },
    {
        'que':"javascript was developed by ",
        'a':"1995",
        'b':"1989",
        'c':"1972",
        'd':"non of the above",
        'correct':"a"
    }
];

let index=0;
let total=ques.length;
let right=0,wrong=0;
const queBox = document.querySelector("#quebox");
const options = document.querySelectorAll(".options");

const loadQue = () => {
  
    if (index==total) return endQuiz();
    else{
    reset();
    const data = ques[index];
    queBox.textContent = `${index+1}) ${data.que}`;
    options[0].nextElementSibling.textContent = data.a;
    options[1].nextElementSibling.textContent = data.b;
    options[2].nextElementSibling.textContent = data.c;
    options[3].nextElementSibling.textContent = data.d;
    } 
}



const submitQuiz = () => {
    if(quizStart()){
        document.getElementById("check").innerHTML = "";
        const data = ques[index];
        let ans = getAns();
        if(ans == data.correct){
            right++;
        }
        else{
             wrong--;
        }
        index++;
        loadQue();
}
else{
    document.getElementById("check").innerHTML = "submit answer";
}
}

const getAns = () => {  
    let a; 
    options.forEach((option) => {
        if(option.checked)  {
            a=option.value;
        }

    })
    return a;
}

const reset = () => {
    options.forEach((option) => {
        option.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div id="nd">
         <h3 >thank you for playing</h3>
        <h2>you scored ${right}/${total} </h2>   
        
    <div>
    `
}



const quizStart  = () => {
    for(option of options){
        if(option.checked) return true;
    }
    return false;
}

loadQue();

