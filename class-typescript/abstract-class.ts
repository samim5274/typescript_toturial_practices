abstract class User{
    // properties, methos, constrcutor
    username: string;
    age: number;

    constructor(username:string, age:number){
        this.username = username;
        this.age = age;
    }

    abstract display():void;
}


class student extends User {
    stdId: number;

    constructor(username:string, age:number, stdId:number){
        super(username, age);
        this.stdId = stdId;
    }

    display():void{
        console.log(`username: ${this.username}, age: ${this.age}, id: ${this.stdId}`);
    }
}

let student1 = new student("Faizul Islam", 40, 273330005101097);
student1.display();