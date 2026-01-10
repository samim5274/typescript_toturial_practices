class User{
    // properties, methos, constrcutor
    username: string;
    age: number;

    constructor(username:string, age:number){
        this.username = username;
        this.age = age;
    }

    display():void{
        console.log(`username: ${this.username}, age: ${this.age}`);
    }
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

let user1 = new User("Shamim Hossain", 25);
user1.display();

let user2 = new User("Farjana Hossain", 25);
user2.display();