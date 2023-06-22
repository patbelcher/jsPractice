class Person { 
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    compareAge(otherPerson) {
        if(this.age < otherPerson.age) {
            return otherPerson.name + " is older than me.";
            } else if (this.age > otherPerson.age) {
                return otherPerson.name + "is younger than me.";
            } else {
                return otherPerson.name + " is the same age as me";
            }
        }
    }      

    //create instances of Person
    const p1 = new Person("Sam", 24);
    const p2 = new Person("Mary", 36);
    const p3 = new Person("Jane", 24);

    //compare ages
    console.log(p1.compareAge(p3));