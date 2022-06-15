// let asterix = {
//     name: "Asterix",
//     age: 24,
//     friends: ["Obelix", "Idefix", "Majestatix"],
//     friendsNumber: function() {
//         return this.friends.length;
//     }
// }

// //console.log(asterix);

// asterix.job = "warrior";
// asterix.age = asterix.age + 5;

//console.log(asterix);

//console.log(asterix.friendsNumber());


let person = {
    firstName: "Jan",
    lastName: "Novák",
    birth: 1995,
    married: true,
    ageThisYear: function() {
        return 2022 - this.birth;
    },
    toRetirement: function(age = 65) {
        return age -= this.ageThisYear();
    }
}

console.log(person.ageThisYear());
console.log(person.toRetirement());

person.birth = person.birth + 2;

console.log(person.toRetirement());

