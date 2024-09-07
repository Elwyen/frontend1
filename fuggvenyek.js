export function cimKiiras(cim){
    // a header h1 tagjebe fuzzuk hozza meg a cimet
    //megfogjuk a header taget
    const headerElem =$("header");
    // document.getElementById("cimsor").innerHTML = "sziahelo"
    
    //html dom elem
    console.log(headerElem)
    
    //ha javascript lenne: headerElem.innerHTML += "<p>"+ cim +"</p>";
    headerElem.append(`<p> ${cim}  </p>`)
    }

    /* keszits fuggvenyt amivel az elso kutya adatait irhatjuk ki a tartalom nevezetu classba 
    divbe legyen, a nev, h3-as cimben,  a kor p a nem p tagben*/
export function tartalomIras(kutya){
        // a tartalom classba irjuk ki az elso kutya adatait
        const tartalom = $(".tartalom");
        tartalom.append(`<div> 
        <h3> ${kutya.nev}</h3> 
        <p> ${kutya.kor} </p> 
        <p> ${kutya.nem} </p> 
        </div>`)
    }



    //rossz megoldasxd
// export function osszesKutyaKiiras(kutyaLista){

//     const tartalom = $(".tartalom");
//     tartalom.append(`<div class="tartalomdiv"><ul class="list-group list-group-horizontal"></ul></div>`)
//     const tartalomUl = $(".list-group-horizontal")
//     kutyaLista.forEach(kutya => {
//         tartalomUl.append(`<li class="list-group-item"> 
//         <h3> ${kutya.nev}</h3>
//         <p> ${kutya.kor} </p> 
//         <p> ${kutya.nem} </p> 
//         </li>`)
//     })
// }


export function kutyaIras(kutya){
    const tartalom = $(".tartalom");
    tartalom.append(`<div class="col-lg-4 col-md-6"> 
    <h3> ${kutya.nev}</h3> 
    <p> ${kutya.kor} </p> 
    <p> ${kutya.nem} </p> 
    </div>`)
}

export function kutyaIrasCard(kutya){
    const tartalom = $(".tartalom");
    tartalom.append(`<div class="col-lg-4 col-md-6 card"> 
    <div class="card-body">
    <h3 class="card-title"> ${kutya.nev}</h3> 
    <p class="card-text"> ${kutya.kor} </p> 
    <p class="card-text"> ${kutya.nem} </p> 
    <button class="kivalaszt btn btn-success">Kivalaszt</button>
    </div>`)
}


