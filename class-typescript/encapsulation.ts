// access modifer public, private, protected, read-only
class User{
    // properties, methos, constrcutor
    readonly username: string;
    public age: number;

    constructor(username:string, age:number){
        this.username = username;
        this.age = age;
    }

    display():void{
        console.log(`username: ${this.username}, age: ${this.age}`);
    }
}


class student extends User {
    private stdId: number;

    constructor(username:string, age:number, stdId:number){
        super(username, age);
        this.stdId = stdId;
    }

    display():void{
        console.log(`username: ${this.username}, age: ${this.age}, id: ${this.stdId}`);
    }

    setStudentId(stdId: number):void{
        this.stdId = stdId;
    }

    getStudentId():number{
        return this.stdId;
    }
}

let student1 = new student("Faizul Islam", 40, 273330005101097);
student1.setStudentId(321654987);
console.log(student1.getStudentId());

let user1 = new User("Asif Akbor", 15);
console.log(user1.username);
// user1.display();