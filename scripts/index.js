//const { getProduct } = require("../../../controllers/product");

const app = new Vue({
  el: "#app",
  data: {
    //Array de articulos que parseamos desde el fichero json
    articulos: [],
    //Succes equivale al color verde
    color: "success",
    //Contador que nos dice en que posicion del array se encuentra cada producto
    cont: 0,
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

    pushCurrentProduct: function (a) {
      //console.log(this.productos.indexOf(a,0));          
      console.log(a);          
      this.of += this.articulos[id].serie + " " + this.articulos[id].numero;
      this.articulo += this.articulos[id].denoart;
      this.cantidad += this.articulos[id].cantidad;
      this.f += this.articulos[id].fondo;
      this.l += this.articulos[id].lateral;
      this.t += this.articulos[id].tapa;
    },
    
    /*METODOS DE FUNCIONALIDADES*/

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
    getProducts() {
      fetch("../data/result.json")
        .then((res) => res.json())
        .then((data) => ((this.articulos = data), console.log(this.articulos)))
        .catch((err) => console.log(err.message));
    },
  },
});
