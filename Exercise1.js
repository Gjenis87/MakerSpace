//for(let index = 0;index < array.length; index++){
   // const element=array[index];

//}
//
let uc = require('upper-case')
const arr=["a","b","c"];
//tek in e kemi poziten e merr vetem poziten e te gjithave elemetneve
// for( const key in arr){
//     console.log(key);

// }
//of perdoret kur kemi nevoj tju qasemi vetem elementeve ose deshrirojme te bejme ndryshime ne te gjitha elementet ;
// for(const key of arr){
//     console.log(key);
// }
 /*Krijo nje list te user’ve me gjatsi 5,
secili user permban: name,surname,age
dhe po ashtu informatat e qytetit: name,postalCode.
1 user te ket 1 properti tek qyteti i cili nuk esht tek user’et tjer.
Ne terminal te shfaqet useri numer 3.
Te behet ndryshimi i emrave te userve nga lowerCase ne upperCase*/
const obj=[
    {name:"Gjenis",
        surname:"Alkovac",
        city:"Prizren ,20000",
        density:"218184k",
    },
    {
        name:"Gjenis",
        surname:"Alkovac",
        age:21,
    
    },
    {
        name:"Rea",
        surname:"Krasniqi",
        age:20,
        

    },
    {
        name:"Mukki",
        surname:"Smani",
        age:21,
        
    },
    {
        name:"Sara",
        surname:"Bajraktari",
        age:21,
        

    },
    {
        name:"Era",
        surname:"Kroqi",
        age:21,
        
    }

]


for(const key of obj){
    console.log(key);
    key.name= uc.upperCase(key.name);
    key.surname=uc.upperCase(key.surname);
    console.log(key);
}
console.log(obj[2]);
for(const key in obj){
    if(obj[key].name === "REA"){
        console.log(key, obj[key])
    }
}