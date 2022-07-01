//const { getProduct } = require("../../../controllers/product");

const app = new Vue({
  el: "#app",
  data: {
    //Array de articulos que parseamos desde el fichero json
    articulos: [],
    articulosOk: [],
    //Array del fetch de json de empresas
    empresas: [],
    currentEmpresa: "(PA 28819) 00001 Star Quads SL",
    //Atributos de los aticulos
    f: "",
    l: "",
    t: "",

    //Checkeds
    checked: `<div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">            
          </label>
        </div>`,
    unchecked: `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">            
            </label>
            </div>`,
  },
  created() {
    this.getProducts();
    this.getEmpresas();
  },
  methods: {
    /* METODOS DE MODAL
     */
    abrirModal: function (actualPosition) {
      //Pasamos la posicion actual del array
      this.actualPosition = actualPosition;
      var x = document.getElementById("modale");
      if (x.style.display != "block") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    cerrarModal: function () {
      var x = document.getElementById("modale");
      if (x.style.display != "block") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    getColor: function (a) {
      if (a.fondo == "X" && a.lateral == "X" && a.tapa == "X") {
        //Se puede enviar a produccion ya que EL fondo el lateral y la tapa estan OK
        return "green-color";
      }
      return "white-color";
    },

    validateProduction(a) {
      if (a.fondo == "X" && a.lateral == "X" && a.tapa == "X") {
        console.log("Estoyyy aqui");
        //Se puede enviar a produccion ya que EL fondo el lateral y la tapa estan OK
        this.articulosOk.push(a);
      }
    },
    checkProduction: function () {
      console.log(this.articulosOk);
    },

    //Devolemos si esta checheado con una okChecked
    checkStateF: function (a) {
      if (a.fondo == "X") {
        return this.unchecked;
      }
    },
    checkStateL: function (a) {
      if (a.lateral == "X") {
        return this.unchecked;
      }
    },
    checkStateT: function (a) {
      if (a.tapa == "X") {
        return this.unchecked;
      }
    },
    showChecked: () => {
      return `<div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label" for="flexCheckChecked">            
          </label>
        </div>`;
    },

    showUnChecked: () => {
      return `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">            
            </label>
            </div>`;
    },
    getProducts() {
      fetch("../data/result.json")
        .then((res) => res.json())
        .then((data) => ((this.articulos = data), console.log(this.articulos)))
        .catch((err) => console.log(err.message));
    },
    getEmpresas() {
      fetch("../data/empresas.json")
        .then((res) => res.json())
        .then((data) => ((this.empresas = data), console.log(this.empresas)))
        .catch((err) => console.log(err.message));
    },
  },
});


/*METODOS DE GETTERS*/

/*
     getProductos() {
       fetch("/products")
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           this.productos = data.productos;
           console.log(this.productos);
         })
         .catch((err) => console.log(err.message));
     },
   },
   */