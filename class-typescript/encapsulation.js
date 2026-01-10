var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// access modifer public, private, protected, read-only
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
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(username, age, stdId) {
        var _this = _super.call(this, username, age) || this;
        _this.stdId = stdId;
        return _this;
    }
    student.prototype.display = function () {
        console.log("username: ".concat(this.username, ", age: ").concat(this.age, ", id: ").concat(this.stdId));
    };
    student.prototype.setStudentId = function (stdId) {
        this.stdId = stdId;
    };
    student.prototype.getStudentId = function () {
        return this.stdId;
    };
    return student;
}(User));
var student1 = new student("Faizul Islam", 40, 273330005101097);
student1.setStudentId(321654987);
console.log(student1.getStudentId());
var user1 = new User("Asif Akbor", 15);
console.log(user1.username);
// user1.display();
