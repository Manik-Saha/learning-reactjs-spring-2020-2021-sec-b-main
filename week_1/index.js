let students = [
    {id:1, name: 'manik', email: 'manik@gmail.com', salary:1000},
    {id:2, name: 'manik', email: 'manik@gmail.com', salary:10000},
    {id:3, name: 'manik', email: 'manik@gmail.com', salary:108800},
    {id:4, name: 'manikkkk', email: 'manikkkk@gmail.com', salary:10080},
];

let reduce = students.reduce(function (value, arr){
    value.salary += arr.salary;
    return value;
});

let filter = students.filter(function(value) {
    console.log(value.salary);
    return value.salary == 10000;
});
console.log(filter);