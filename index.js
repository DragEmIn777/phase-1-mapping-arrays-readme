//Map method
console.log([1, 2, 3].map(num => num * num));


//Making .map from scratch 
const map = (array, callback) => {
    const newArr = [];

    for (const element of array){
        newArr.push(callback(element));
    }

    return newArr;
}

console.log(map([1,2,3], num => num*num))



const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];

const newEngineers = map(oldAccounts, account => Object.assign({}, account, {accessLevel: "admin"}));

console.log(newEngineers)

const userIDs = map(newEngineers, eng => eng.userID + 3)
console.log(userIDs)




//using built in .map
const equippedEngineers = newEngineers.map(eng => Object.assign({}, eng, {equipment: "laptop"}))

console.log(equippedEngineers)