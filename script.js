// // { calculate } import './calculator';

// // TODO: Faire la manipulation du DOM dans ce fichier
console.log(34)



let boutons= document.querySelectorAll("button")
let input= document.getElementById("input")
let screen=document.getElementById("calcul")
document.querySelector('form').addEventListener("submit", function(event){
    event.preventDefault();  
})
let str=""

boutons.forEach(calcule);
function calcule(b){ 
    b.addEventListener("click", operation)
    function operation(e){
        if (e.target.innerText=="="){
            screen.innerText+=input.value;
            input.value=eval(screen.innerText);
            // console.log(str)
        }
        else if(e.target.innerText=='×'){
            str+='*';
            input.value='';
            screen.innerText=str;
            str='';
        }
        else if(e.target.innerText=='÷'){
            str+='/';
            input.value='';
            screen.innerText=str;
            str='';
        }
        else if(e.target.innerText=='C'){
            input.value='';
            str='';
        }
        else if(e.target.innerText=='AC'){
            input.value='';
            screen.innerText='';
            str='';
        }
        else if(e.target.innerText=='+'){
            str+='+';
            input.value='';
            screen.innerText=str;
            str='';
        }
        else if(e.target.innerText=='-'){
            str+='-';
            input.value='';
            screen.innerText=str;
            str='';
        }
        else if(e.target.innerText=='%'){
            str+= str/str*100;
            input.value='';
            screen.innerText=str;
            str='';
        }
        else if(e.target.innerText=='+/-'){
            if (str.includes('-')){
                str=str.replace('-','');
                input.value=str;
            }
            else {
                str='-'+str;
                input.value=str;
          }
        }
        else {
            str+=e.target.innerText
            input.value=str
        }
    }
}