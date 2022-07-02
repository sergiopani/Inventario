//const { getProduct } = require("../../../controllers/product");

const app = new Vue({
  el: "#app",
  data: {
    //Array de articulos que parseamos desde el fichero json
    articulos: [],
    articulosProducir:[],
    //Array del fetch de json de empresas
    empresas: [],

    //Por defecto primero va a tener la primera empresa de la array
    currentEmpresa: {},
    currentENombre:"",
    currentESerie:"",

    //Atributos de los aticulos
    fondos:[],
    laterales:[],
    tapas:[],

  },
  /*Metodos que se ejecutan al iniciar la pagina*/
  created() {
    this.getProducts();
    this.getEmpresas();
  },
  methods: {
    comprobar:function (index){
      console.log(this.fondos[0])
      if(this.fondos[index] === true && this.laterales[index] === true && this.tapas[index] === true){
        return true;
      }else if(this.fondos[index] === undefined && this.laterales[index] === true && this.tapas[index] === true){
        return true;
      }else if(this.fondos[index] === undefined && this.laterales[index] === undefined && this.tapas[index] === true){
        return true;
      }else if(this.fondos[index] === true && this.laterales[index] === undefined && this.tapas[index] === undefined){
        return true;
      }else if(this.fondos[index] === undefined && this.laterales[index] === true && this.tapas[index] === undefined){
        return true;
      }
    },
    setSerieByName:function(name){
      this.currentESerie = name;
    },
    filter:function(a){

      if(a.serie.toUpperCase() === this.currentESerie.toUpperCase()){
        return a;
      }
    },

    setDefault:function (e){
      this.currentEmpresa = e;
      this.currentENombre = e.nomfiscli;
      this.currentESerie = e.serie;
    },
    //Devolemos si esta checheado con una okChecked
    /*
    printStateF: function (a) {
      if (a.fondo === "X") {
        return this.showUnChecked();

      }
    },
    printStateL: function (a) {
      if (a.lateral === "X") {
        return this.showUnChecked();
      }
    },
    printStateT: function (a) {
      if (a.tapa === "X") {
        return this.showUnChecked();
      }
    },
    showUnChecked: () => {
      return `<div class="form-check">
            <input class="form-check-input"  type="checkbox" value="accepted" unchecked-value="not_accepted" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">            
            </label>
            </div>
            `;
    },
    */

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