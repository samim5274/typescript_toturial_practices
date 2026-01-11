const printUserinfo = <X, Y> (userId: X, userAge: Y) => {
    console.log(`User id: ${userId}, Age: ${userAge}`);
}

printUserinfo("101", 25);
printUserinfo(101, "Shamim");