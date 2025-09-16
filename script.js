let i1 = '';
let i2 = '';
let T = '';

$(document).ready(function(){
  alert("ماشین حساب بیشتر از دو ورودی قبول نمیکند!");
});

function number(input){
    i1 += input; 
    document.getElementById('head').innerText = i1;
}

function sli(){
    if(i1.length > 0){ 
        i1 = i1.substring(0, i1.length - 1);
        document.getElementById('head').innerText = i1;
    }
}

function del(){
    i1 = ''
    document.getElementById('head').innerText = '';
}

function fun(fun){
    if (fun == 1){
        T = '/';
    } else if ( fun == 2){
        T = '*'
    }else if (fun == 3 ){
        T = '-'
    } else {
        T = '+'
    }
    document.getElementById('p').innerText = document.getElementById('head').innerText;
    i1 = '';
    document.getElementById('head').innerText = '';
    i2 = document.getElementById('p').innerText;
    console.log(i2);
    console.log(T)
}

function cal(){
    let num1 = parseFloat(i1); 
    let num2 = parseFloat(i2);

    if (T == '/'){
        document.getElementById('head').innerText = num2 / num1;
    } else if (T == '*'){
        document.getElementById('head').innerText = num2 * num1;
    } else if (T == '-'){
        document.getElementById('head').innerText = num2 - num1;
    } else if (T == '+'){
        document.getElementById('head').innerText = num2 + num1;
    }

    
    i1 = document.getElementById('head').innerText;
    i2 = '';
}
