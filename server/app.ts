interface Animal {
    run(): void;
}

class Human implements Animal {

    private noOfLegs: number;
    private noOfHands: number;

    public constructor(noOfLegs: number, noOfHands: number) {
        this.noOfLegs = noOfLegs;
        this.noOfHands = noOfHands;
    }
    public getNoOfHands(): number {
        return this.noOfHands;
    }
    public setNoOfHands(noOfHands: number): void {
        this.noOfHands = noOfHands;
    }

    public getNoOfLegs(): number {
        return this.noOfLegs;
    }

    public setNoOfLegs(noOfLegs: number): void {
        this.noOfLegs = noOfLegs;
    }

    run(): void {
        console.log("run() of Human!");
    }
}

class Employee extends Human {

    private empCode: number;
    private empName: string;

    public constructor(noOfLegs: number, noOfHands: number,
                       empCode: number, empName: string) {
        super(noOfLegs, noOfHands);
        this.empCode = empCode;
        this.empName = empName;
    }
    public getEmpCode(): number {
        return this.empCode;
    }
    public setEmpCode(empCode: number) {
        this.empCode = empCode;
    }
    public getEmpName(): string {
        return this.empName;
    }
    public setEmpName(empName: string) {
        this.empName = empName;
    }

    run(): void {
        console.log("run() of Employee!");
    }
}

// let human = new Human(2, 2);
// console.log("No of Legs: " + human.getNoOfLegs());
// console.log("No of Hands: " +human.getNoOfHands());

let employee = new Employee(2, 2,
    1234, "Saman");
console.log(employee.getNoOfLegs());
console.log(employee.getNoOfHands());
console.log(employee.getEmpCode());
console.log(employee.getEmpName());
employee.setNoOfLegs(3);
console.log(employee.getNoOfLegs());

const human = <Human> employee;
human.run();