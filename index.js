import { cimKiiras } from "./fuggvenyek.js";
//import { tartalomIras } from "./fuggvenyek.js";
//import { osszesKutyaKiiras } from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";
//import { kutyaIras } from "./fuggvenyek.js";
import { kutyaIrasCard } from "./fuggvenyek.js";
let nev = "Dézi"
const cim = "Kutyák minden mennyiségben";

// objektumokat hozunk osszetett adatszerkezet eseten kulcs-ertek parok
// egyetlen kutya adata
const kutya1 = {
    nev: "Floki",
    kor: 12,
    nem: "kan"
}

const kutya2 = {
    nev: "Dezi",
    kor: 2,
    nem: "nosteny"
}


kutya1.nev="Jeno"
console.log("elso kutya: ", kutya1)
console.log("cim: ", cim)


//lista - csak azonos tipusu adatok lehetnek benne
const nevlista = ["Dezi", "Jeno", "Bela"]
const szamlista = [5,3,4,23,-34.2]

nevlista[0]= "Floki"

console.log("Lista: ", nevlista)

cimKiiras(cim)
// tartalomIras(kutya1)
//osszesKutyaKiiras(kutyaLista)
// `` ez a symbol angol kiosztason a 0-s magyaron


//sima dives style
kutyaLista.forEach((kutya, index) => {
    console.log(kutya, index)
    //kutyaIras(kutya)
})


//kartyas style
kutyaLista.forEach((kutya, index) => {
    console.log(kutya, index)
    kutyaIrasCard(kutya)
})


//esemenykezelo a gombokhoz
const gombElem = $(".kivalaszt")
gombElem.on("click", (event) => {
   // console.log("gomb kattintva lett")
    console.log(event.target) //az az elem amelyik kivaltotta az esemenyt
})