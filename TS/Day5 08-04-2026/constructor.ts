class Student {
    constructor(public name: string, public age: number) {}

    display() {
        console.log(this.name, this.age);
    }
}

let s1 = new Student("Adish", 21);
s1.display();