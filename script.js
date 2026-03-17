

// let age = 28 ;
// if (age >= 20) {
//     console.log( "majeur")
// } else {
//     console.log("mineur")
// }
// let nom = "haroun";
//  console.log(nom )
//  let note =15 
// if (note >=16) {
//     console.log("bien")
// } else if (note >= 12) {
//     console.log("moyenne")
// }
// else {
//     console.log("insuffisant")
// }
// let p ="hello world";
// console.log(p)
// let agee = 24;
// let prix = 3000;
// let noms = "Alice";
// let dispo = true;
// // let personne = (nome: "joe", aget: 19 );
// console.log(prix)
// console.log(age)
// console.log(nom)
// console.log(dispo)
// // console.log(personne)
// let ages = 16;
// if ( age >=18 ){
//     console.log("vous etes majeur");
// }else {
//     console.log("vous etes mineur");
// }
// let notes =75;
// if ( note>=90){
//     console.log("excellent");
// }else if ( note >= 70) {
//     console.log("bien")
// } else {
//     console.log("insuffisent")
// }

//  function addition (a,b){
//     return a+b
//  }
//  console.log(addition (5, 3))
//  const multiplier =(x ,y) => x*y;
//  console.log(multiplier(4 , 6));
// const titre = document.querySelector("h1");
// titre.textcontent = "nouveau titre !";
// titre.Style.color ="blue";
let compteur = 0;
const affichage = document.getElementById("count");
const plus = document.getElementById("plus");
const moins = document.getElementById("moins");
plus.addEventListener("click", () =>{
    compteur++;
    affichage.textContent = compteur;
});
moins.addEventListener("click", () => {
    compteur--;
    affichage.textContent = compteur;
});


let nom = "abdou";
console.log("bonjour," +nom)


function carre(nombre) {
    return nombre*nombre;
}
    console.log(carre(4));

console.log(carre(7));

for ( let i = 1 ; i<=10; i++) {
    console.log(i)
}

// document.getElementById("btn").addEventListener
// ("click", () => {
//     alert ("bouton clique !");
// })
function  double ( a,b){
    return (a+b);
}
console.log(double(10,13))

const hr = document.getElementById("couleur");
const page = document.getElementById("changer");


page.addEventListener("click", () => {
    hr.style.backgroundColor = "blue"
}) 



