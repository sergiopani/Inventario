//const { getProduct } = require("../../../controllers/product");

const app = new Vue({
  el: "#app",
  data: {
    //Array de articulos que parseamos desde el fichero json
    articulos: [],
    articulosOk: [1, 2, 3, 4],
    //Atributos de los aticulos
    f: "",
    l: "",
    t: "",
  },
  created() {
    this.getProducts();
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
    checkState:function(a){      
      if(a.fondo == 'X'){
      
        return "flexCheckChecked";
      }

    },
    
    getProducts() {
      fetch("../data/result.json")
        .then((res) => res.json())
        .then((data) => ((this.articulos = data), console.log(this.articulos)))
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