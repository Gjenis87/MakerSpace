let era ="3";
let sara=3;
console.log(typeof(era));
if(typeof(era)=="string"){
    era=parseInt(era);
    console.log(era);
 }

 if(sara==era){
     console.log(true);
 }else{
     console.log(false);
 }
//parseint is built-in funcitions or oxcillary function they come with javascript
 let str ="kosova";
 console.log(parseInt(str));
 if(str!=NaN){
     str=parseInt(str);
 }

 let num=21;
 console.log(num.toString());
//to concat to strings in javascript
 let h="endrit";
 let g="bossi";
 let hg =h + " " +g;
 console.log(hg);


 function mbledhja(){
    let a = 10;
    let b = 5;
    return a+5;
 }
 mbledhja();

 let shuma=mbledhja();
 console.log(shuma);

 function mbledhja1(c,d){
     return c+d;

 }
 let num1=79;
 let num2=69;
 let num3=77;
 let shuma1=mbledhja1(num1,num2);
 console.log(shuma1);


//funksioni mund te jete  funksion callback qe kthen ne rezzultat dhe mundet mu kon funksion pa return type.
 function kikiriki(kiki,riki,kikiriki){
     return kiki+riki+kikiriki;
 }
 console.log(kikiriki(num1,num2,num2));


 //array
//nese dojm mu qas ne arrayin mbrenda array i qasemi nepermjet ksaj metodes [][];
 let lista=["gjenis",7,69,"era",()=>{},["GJenis",5]];
 console.log(lista[5][0]);

 //objekti ka karakteristekn id property dhe value
 let students=[
        {id:1,name:"Gjenus",mbiemri:"Alkovac"},
        {id:2,name:"Drilon",mbiemri:"Cocaj"}
    ];

 //JSON = MATRICE JSON IS ARRAY WITH OBJECTS











