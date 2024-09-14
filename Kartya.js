export default class Kartya {
  #kutya = {}; //privat adattak a # miatt

  constructor(kutya, szuloElem) {
    // inicializalja az adattagokat
    this.#kutya = kutya;
    this.szuloElem = szuloElem;
    this.kutyaIrasCard();
    this.gombElem = $(".kivalaszt:last");
    this.#esemenyKezelo();
  }

  #esemenyKezelo() {
    // const gombElem = $(".kivalaszt");
    this.gombElem.on("click", (event) => {
        // nyil fuggveny es function nevtelen fuggveny kozott az a kulonbseg hogy a this nyilt fuggveny eseten a konkret osztaly peldanyra mutat 
        //function nevtelen fuggveny eseten pedig arra a HTML elemre amelyik kivaltotta az esemenyt
      // console.log("gomb kattintva lett")
      console.log(event.target); //az az elem amelyik kivaltotta az esemenyt
      console.log(this.#kutya.nev); //az elem amelyikhez a függ
      console.log(this, "teszt")
    });
  }
  //tagfuggveny
  kutyaIrasCard() {
    //const tartalom = $(".tartalom");
    this.szuloElem.append(`
                    <div class="col-lg-4 col-md-6 card"> 
                        <div class="card-body">
                            <h3 class="card-title"> ${this.#kutya.nev}</h3> 
                            <p class="card-text"> ${this.#kutya.kor} </p> 
                            <p class="card-text"> ${this.#kutya.nem} </p> 
                            <button class="kivalaszt btn btn-success">Kivalaszt</button>
                    </div>`);
  

    }

}
