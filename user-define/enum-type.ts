// enum - store constant; duplicate value is not allowed

// enum - type : numeric, string, hetergenous

// numeric enum
enum RequestType {
    ReadData=3,
    SaveData=1,
    DeleteData,
}

// console.log(RequestType);
// console.log(RequestType.ReadData);
// console.log(RequestType["ReadData"]);


// string enum
enum RequestType2{
    ReadData = "Read_Data",
    DeleteData = "Delete_Data",
}

console.log(RequestType2);



// hetergenous enum
enum RequestType3{
    ReadData = "Read_Data",
    DeleteData = "Delete_Data",
    id = 101,
}

console.log(RequestType3);