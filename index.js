//import { cimKiiras } from "./fuggvenyek.js";
//import { tartalomIras } from "./fuggvenyek.js";
//import { osszesKutyaKiiras } from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";
//import { kutyaIras } from "./fuggvenyek.js";
//import { kutyaIrasCard } from "./fuggvenyek.js";
import Kartyak from "./Kartyak.js";

const kivalasztottLista=[]

const divElem = $(".tartalom")
const kivElem = $(".kivalasztottak")

new Kartyak(kutyaLista, divElem)


//melyik kartyara kattintottunk? az adatait tegyuk bele a listaba
// ha el akarunk erni egy privat adattagot: 1. getter az osztalyban es
//azt a gettert kell meghivni
// a problema, hogy ezt a gettert akkor kene meghivni ha rakattintunk a gombra

//feliratkozunk a sajat esemenyunkre
$(window).on("kivalaszt",(event)=>{
    console.log(event.detail) // event.detail - ezt adtam at a sajat esemenyunkkel, az adott kartyahoz tartozo kutya adata
    kivalasztottLista.push(event.detail) // hozzaadjuk event.detail-unk a kivalasztottLista-hoz
    console.log(kivalasztottLista) // printeljuk a listat referencianak
    new Kartyak(kivalasztottLista,kivElem)
})





//let nev = "Dézi"
// const cim = "Kutyák minden mennyiségben";

// objektumokat hozunk osszetett adatszerkezet eseten kulcs-ertek parok
// egyetlen kutya adata


// const kutya1 = {
//     nev: "Floki",
//     kor: 12,
//     nem: "kan"
// }

// const kutya2 = {
//     nev: "Dezi",
//     kor: 2,
//     nem: "nosteny"
// }


// kutya1.nev="Jeno"
// console.log("elso kutya: ", kutya1)
// console.log("cim: ", cim)


//lista - csak azonos tipusu adatok lehetnek benne
// const nevlista = ["Dezi", "Jeno", "Bela"]
// const szamlista = [5,3,4,23,-34.2]

// nevlista[0]= "Floki"

// console.log("Lista: ", nevlista)

// cimKiiras(cim)
// tartalomIras(kutya1)
//osszesKutyaKiiras(kutyaLista)
// `` ez a symbol angol kiosztason a 0-s magyaron


//sima dives style
// kutyaLista.forEach((kutya, index) => {
//     console.log(kutya, index)
//     //kutyaIras(kutya)
//     new Kartya(kutya)
// })


//kartyas style



