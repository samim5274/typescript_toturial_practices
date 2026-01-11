interface IUser {
    id: number; 
    name: string; 
    age: number;
}

let users: IUser[] = [];

let user1:IUser = {
    id:1,    name: "Shamim Hossain",    age: 32,
}

let user2:IUser = {
    id:2,    name: "Fahim Hossain",    age: 25,
}

users.push(user1);
users.push(user2);

const printUserInfo = (user:IUser) => {
    console.log(`User id = ${user.id}, Name = ${user.name}, Age = ${user.age}`)
}

users.forEach(user => printUserInfo(user));