var User = /** @class */ (function () {
    function User(username, age) {
        this.username = username;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.username, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1: name:samim hossian, age: 25;
// user1: name:Farjana hossian, age: 31;..
var user1 = new User("Shamim Hossain", 25);
user1.display();
var user2 = new User("Farjana Hossain", 25);
user2.display();
