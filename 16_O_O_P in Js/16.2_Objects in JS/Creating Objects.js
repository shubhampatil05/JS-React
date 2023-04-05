


// JavaScript is an object-based language. Everything is an object in JavaScript.
//JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.


// We can create Objects in 3 ways 

//1. By object literal
//2. By creating instance of Object directly (using new keyword)
//3. By using an object constructor (using new keyword)




// Using Object Literals

let Employee = {

    Name: 'Jenny',
    Id: 3282,
    Age: 27

}

console.log(Employee.Name + ' ' + Employee.Id + ' ' + Employee.Age);




// By creating Instance Of Object Directly (using new keyword)


let Car = new Object();

Car.Company = 'Tata';
Car.Model = 'Nexon';
Car.Price = 1700000;


for (value in Car) {

    console.log(Car[value]);

}




// By Using Object Constructor


function Courses(A, B, C) {

    this.A = A;
    this.B = B;
    this.C = C;

}

let Output = new Courses('HTML', 'CSS', 'JavaScript');

for (value in Output) {

    console.log(Output[value]);

}



// Using Object Method

function Emp(Name, Id, Salary) {


    this.Name = Name;
    this.Id = Id;
    this.Salary = Salary;


    this.UpdateSalary = UpdateSalary;


    function UpdateSalary(NewSalary) {

        this.Salary = NewSalary;

    }

};

let Info = new Emp('Rishabh', 3282, 51000)
console.log(Info.Name + ' ' + Info.Id + ' ' + Info.Salary);

console.log(Info.Salary);
Info.UpdateSalary(9000);
console.log(Info.Salary);