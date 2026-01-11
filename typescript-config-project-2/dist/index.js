const userform = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
userform.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
        usercountry: userCountry.value,
        userfeedback: userFeedback.value,
    };
    console.log(data);
});
// function signature
let userInfo1;
userInfo1 = () => {
    console.log("Shamim Hossain is 25 years old.");
};
userInfo1();
let userInfo2;
userInfo2 = (name) => {
    console.log(`${name}`);
};
userInfo2("Fahim Hossain");
let userInfo3;
userInfo3 = (name, age) => {
    return `Name: ${name}, Age: ${age}`;
};
console.log(userInfo3("Fahim Hossain x", 25));
export {};
//# sourceMappingURL=index.js.map