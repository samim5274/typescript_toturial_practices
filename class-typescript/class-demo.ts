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



// class object
// user1: name:samim hossian, age: 25;
// user1: name:Farjana hossian, age: 31;..

let user1 = new User("Shamim Hossain", 25);
user1.display();

let user2 = new User("Farjana Hossain", 25);
user2.display();