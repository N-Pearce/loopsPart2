const words = [
    'wizard',
    'octopus',
    'household',
    'cat',
    'monkey',
    'weapon',
    'elephant',
    {test: 'GIJoe'}
]

// 'Some' returns true if at least one element passes the condition

const atLeastOne = words.some(function(word){
    return word.length > 8;
})

const hasHold = words.some(function(word){
    return word.indexOf('hold') !== -1;
})

// 'Every' returns false unless every element passes the condition

const longWords = words.every(function(w){
    return w.length > 3;
})

function allStrings(arr){
    return arr.every(function(el){
        return typeof el === 'string';
    })
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(function(checkbox){
        return checkbox.checked;
    })
    if(!allChecked) alert("Please agree to all fields");
    console.log(allChecked);
})

// Writing Some and Every

function mySome(arr, callback){
    for (let i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)) return true;
    }
    return false;
}

const mS = mySome([4, 5, 6, 7], function(n){
    return n > 5;
})

function myEvery(arr, callback){
    for (let i=0; i<arr.length; i++){
        if(!callback(arr[i], i, arr)) return false;
    }
    return true;
}

const mE = myEvery([4, 5, 6, 7], function(n){
    return n > 3;
})