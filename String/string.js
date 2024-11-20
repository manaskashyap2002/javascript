// let str = "Qs psi dser";
// console.log(str.length);
// console.log(str[0]);
// console.log(str[3]);

// let str1=str.toUpperCase();
// console.log(str1);

// let str2=str.toLowerCase();
// console.log(str2);

// let str3= str.slice(0,4);
// console.log(str3);

// let str4= str.indexOf("s",2);
// console.log(str4);

// let str5= str.lastIndexOf("s",2);
// console.log(str5);

// let str6= str.charAt(0);
// console.log(str6);

// let str7= str.replace('s',"L");
// console.log(str7);

// let str8=str.replaceAll('s',"L");
// console.log(str8);

// let  str9=str.split(" ");
// console.log(str9);

// let str10= str.split();
// console.log(str10);

/////////////////////////////////////////////////////////////////////////
//objects

// let student ={
//     id:99,
//     name:"Manas",
//     marks:[22,44],
//     subject :{web:80,sql:90},
//     isPresent :true
// }
// console.log(student.name);
// console.log(student);
// console.log(student.marks);
// console.log(student.subject.Java);

// //edit
// student.isPresent =false;
// console.log(student);

// //add
// student.age="20";
// console.log(student);

// //delete
// delete student.marks;
// console.log(student);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function student(id,name,marks,subject){
//      this.id=id;
//      this.name=name;
//      this.marks=marks;
//      this.subject=subject;
// }
// let stu1=new student(1,"manas",90,"Maths");
// console.log(stu1);

// class Bike{
//     constructor(id,name,price,engine){
//         this.id=id;
//         this.name=name;
//         this.price=price;
//         this.engine=engine;

//     }
    
// }
// let bi = new Bike(02,"Apache",1500000,"150cc");
// console.log(bi);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// anonymous function
//     function(){
//     for(let i=0;i<50;i++)
//     {
//         if(i%2!=0)
//         {
//            console.log("odd is : "+ i);
//         }
//     }
// }

// function with expresion
//  let odd =function(){
//     for(let i=0;i<50;i++)
//     {
//         if(i%2!=0)
//         {
//            console.log("odd is : "+ i);
//         }
//     }
// }
// odd();


// immediate invoked function expression 
// (function(a,b){
//     for(let i=0;i<50;i++)
//     {
//         if(i%2!=0)
//         {
//            console.log("odd is : "+ i);
//         }
//     }
// })(10,20)

function add(a,b)
{
    return a+b;
}
function mul(c,d)
{
    return c*d;
}

function operation(fname,x,y)
{
    return fname(x,y);
}
let total = operation(add,10,20);
console.log(total);