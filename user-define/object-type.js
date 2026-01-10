// let user1 : {userName: string, userId: number};
// user1 = {userName: "shamim", userId: 101};
// console.log(user1);
var users;
users = [];
var user1;
user1 = { userName: "Hossain", userId: 101 };
users.push(user1);
//console.log(users);
var user2;
user2 = { userName: "Shamim", userId: 102 };
users.push(user2);
for (var key in users) {
    console.log(users[key]["userName"]);
}
