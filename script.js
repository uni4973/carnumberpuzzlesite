"use strict";

function cal(nums,goal){
    

    function change(a){
        if(a == 0){
            return(" + ")
        }
        if(a == 1){
            return(" - ")
        }
        if(a == 2){
            return(" × ")
        }
        if(a == 3){
            return(" ÷ ")
        }
    }


    let numbers = [Number(nums.charAt(0)), Number(nums.charAt(1)), Number(nums.charAt(2)), Number(nums.charAt(3))]
    
    outer :for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                if(i != j){
                    for(let k = 0; k < 4; k++){
                        if(k != i && k != j){
                            for(let l = 0; l < 4; l++){
                                if(l != i && l != j && l != k){
                                    for(let m = 0; m < 4; m++){
                                        for(let n = 0; n < 4;n++){
                                            for(let o = 0; o < 4; o++){
                                                if(m == 0){
                                                    answer = numbers[i] + numbers[j]
                                                }
                                                else if(m == 1){
                                                    answer = numbers[i] - numbers[j]
                                                }
                                                else if(m == 2){
                                                    answer = numbers[i] * numbers[j]
                                                }
                                                else{
                                                    answer = numbers[i] / numbers[j]
                                                }

                                                if(n == 0){
                                                    answer = answer + numbers[k]
                                                }
                                                else if(n == 1){
                                                    answer = answer - numbers[k]
                                                }
                                                else if(n == 2){
                                                    answer = answer * numbers[k]
                                                }
                                                else{
                                                    answer = answer / numbers[k]
                                                }
                                                
                                                if(o == 0){
                                                    answer = answer + numbers[l]
                                                }
                                                else if(o == 1){
                                                    answer = answer - numbers[l]
                                                }
                                                else if(o == 2){
                                                    answer = answer * numbers[l]
                                                }
                                                else{
                                                    answer = answer / numbers[l]
                                                }
                                                if(answer == goal){
                                                    return("((" + String(numbers[i]) + change(m) + String(numbers[j]) + ")" + change(n) + String(numbers[k]) + ")" + change(o) + String(numbers[l]));
                                                }

                                                if(m == 0){
                                                    answer = numbers[i] + numbers[j]
                                                }
                                                else if(m == 1){
                                                    answer = numbers[i] - numbers[j]
                                                }
                                                else if(m == 2){
                                                    answer = numbers[i] * numbers[j]
                                                }
                                                else{
                                                    answer = numbers[i] / numbers[j]
                                                }

                                                if(o == 0){
                                                    answer2 = numbers[k] + numbers[l]
                                                }
                                                else if(o == 1){
                                                    answer2 = numbers[k] - numbers[l]
                                                }
                                                else if(o == 2){
                                                    answer2 = numbers[k] * numbers[l]
                                                }
                                                else{
                                                    answer2 = numbers[k] / numbers[l]
                                                }

                                                if(n == 0){
                                                    answer = answer + answer2
                                                }
                                                else if(n == 1){
                                                    answer = answer - answer2
                                                }
                                                else if(n == 2){
                                                    answer = answer * answer2
                                                }
                                                else{
                                                    answer = answer / answer2
                                                }
                                                if(answer == goal){
                                                    return("(" + String(numbers[i]) + change(m) + String(numbers[j]) + ")" + change(n) + "(" + String(numbers[k]) + change(o) + String(numbers[l] + ")"));
                                                }
                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        
    }
    
return("この問題には答えはありません")
}


const submit = document.getElementById('submit');
const quiz = document.getElementById('quiz');
const Answer = document.getElementById('answer');
const Goal = document.getElementById("goal")

let answer;
let answer2;

submit.addEventListener("click", () => {
    let num = quiz.value;
    let goal = Goal.value;
    if(isFinite(num) && num >= 1000 && num <= 9999 && Number.isInteger(Number(num))){
        if(isFinite(goal) && Number.isInteger(Number(goal))){
            Answer.textContent = cal(num,goal);
        }
        else{
            alert("作る整数を入力してください")
        }
    }
    else{
        alert("4桁の整数を入力してください")
    }

});
