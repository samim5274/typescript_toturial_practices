interface IUserFormatter {
    formatUser(): string;
}

class User implements IUserFormatter{
    constructor(private fullname:string, private age:number){}
    formatUser(): string {
        return `name: ${this.fullname}, Age: ${this.age}`;
    }
}

let user = new User("Mr. Potato", 22);
console.log(user.formatUser());