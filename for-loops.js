const uc=require('upper-case');
let users=[
    {
        name:"Ibrahimi",
        lastName:"Gerbiqi",
        age:23,
        city:{
            name:"Prizren",
            postalCode:"20000",
        }
    },
    {
        name:"john",
        lastName:"Krasinski",
        age:22,
        city:{
            name:"Prizren",
            postalCode:"20000",
        }
    },
    {
        name:"Kaley",
        lastName:"Cuoco",
        age:24,
        city:{
            name:"Prizren",
            postalCode:"20000",
        }
    },
    {
        name:"Michael",
        lastName:"Scoot",
        age:23,
        city:{
            name:"Prizren",
            postalCode:"20000",
        }
    },
    {
        name:"Spiderman",
        lastName:"Badmat",
        age:23,
        city:{
            name:"Prizren",
            postalCode:"20000",
            density:"29kmh"
        }
    }
]
console.log(users);

for(const key of users){
    key.name=uc.upperCase(key.name);
    console.log(key);
}
for(const user of users){
    user.city.name=uc.upperCase(user.city.name);
    console.log(user);
}