let students = ['rat', 'bat', 'mat','dot','boot'];
let filter = students.filter(function(value) { 
    return value[0] == 'b';
});

let filter2 = students.filter(function(value) {
    return value[1] == 'a';
});

let find = students.find(function(value, index, array){
    return value[0] == 'b';
});

let join = students.join('-');

let f1 = function(){
    return 10+20;
}
function sum(f){
    return f();
}

let number = [10, 22 ,33, 506, 67, 56, 78];
let map = number.map(mapping);

function mapping(value){
    return value * 2;
}
console.log(map);