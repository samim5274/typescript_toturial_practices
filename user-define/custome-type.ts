type UseType = {userName: string, userId: number};

let users : UseType[];
users = [];

let user1 : UseType;
user1 = {userName: "Hossain", userId: 101};
users.push(user1);

let user2 : UseType;
user2 = {userName: "Shamim", userId: 102};
users.push(user2);

let user3 : UseType;
user3 = {userName: "Ali", userId: 103};
users.push(user3);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "POST";

function requestHandler(requestType: RequestType){
    console.log(requestHandler);
}

requestHandler("GET");

for(const key in users){
    console.log(users[key]);
}