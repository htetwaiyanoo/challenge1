var agagofmass=250;
var agagofheight=5;
var agagofBMI=agagofmass/agagofheight**2;
console.log(agagofBMI)

var mgmgofmass=300;
var mgmgofheight=6;
var mgmgofBMI=mgmgofmass/mgmgofheight**2
console.log(mgmgofBMI)

console.log(agagofBMI>=mgmgofBMI)


if(mgmgofBMI >= agagofBMI)
{
console.log("agag is winner")
}else if(agagofBMI >= mgmgofBMI )
{
    console.log("mgmg is loser")
}
(mgmgofBMI>=agagofBMI) ? console.log("win") : console.log("lose")

let job="web developer"
let age=16
switch(job){
    case"web developer":console.log(`Mgmg job is` + ` ` +(job))
break;

case 16: console.log("my job is " + ` ` + job + ` ` +" and I'm " + ` ` + age)
break;

default:
    console.log("I'm " + ` `+ age + ` ` + "and still 109;110")
}