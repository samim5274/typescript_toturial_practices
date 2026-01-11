var User = /** @class */ (function () {
    function User(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }
    User.prototype.formatUser = function () {
        return "name: ".concat(this.fullname, ", Age: ").concat(this.age);
    };
    return User;
}());
var user = new User("Mr. Potato", 22);
console.log(user.formatUser());
