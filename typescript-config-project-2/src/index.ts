const userform = document.querySelector(".user-form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;

userform.addEventListener("submit", (event: Event) =>{
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
let userInfo1: () => void;
userInfo1 = () =>{
    console.log("Shamim Hossain is 25 years old.");
}
userInfo1();

let userInfo2: (name:string) => void;
userInfo2 = (name: string) =>{
    console.log(`${name}`);
}
userInfo2("Fahim Hossain");

let userInfo3: (name:string, age: number) => string;
userInfo3 = (name: string, age:number) =>{
    return `Name: ${name}, Age: ${age}`;
}
console.log(userInfo3("Fahim Hossain x",25));