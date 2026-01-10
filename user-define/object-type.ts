// let user1 : {userName: string, userId: number};
// user1 = {userName: "shamim", userId: 101};
// console.log(user1);


let users : object[];
users = [];

let user1 : {userName: string, userId: number};
user1 = {userName: "Hossain", userId: 101};
users.push(user1);
//console.log(users);

let user2 : {userName: string, userId: number};
user2 = {userName: "Shamim", userId: 102};
users.push(user2);

for(const key in users){
    // console.log(users[key]["userName"]);
    console.log(users[key]);
}