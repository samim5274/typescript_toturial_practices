var users = [];
var user1 = {
    id: 1, name: "Shamim Hossain", age: 32,
};
var user2 = {
    id: 2, name: "Fahim Hossain", age: 25,
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("User id = ".concat(user.id, ", Name = ").concat(user.name, ", Age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
