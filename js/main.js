class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    anunalSalary(){
        console.log(this.salary*12);
    }
}

class Manager extends Employee{
    constructor(name,salary,bonus){
        super(name,salary)
        this.bonus=bonus;
    }
    anunalSalary(){
        console.log(this.salary*12+this.bonus,"Total Salary per year with bonus");
    }
}

let employee=new Employee("Rahul",40000);
employee.anunalSalary();

let bonus=new Manager("virat",50000,3000);
bonus.anunalSalary();