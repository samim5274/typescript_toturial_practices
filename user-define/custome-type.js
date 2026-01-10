var users;
users = [];
var user1;
user1 = { userName: "Hossain", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Shamim", userId: 102 };
users.push(user2);
var user3;
user3 = { userName: "Ali", userId: 103 };
users.push(user3);
var getRequest;
getRequest = "POST";
function requestHandler(requestType) {
    console.log(requestHandler);
}
requestHandler("GET");
for (var key in users) {
    console.log(users[key]);
}
