//const { getProduct } = require("../../../controllers/product");

const app = new Vue({
    el: "#app",
    data: {
        //Array de articulos que parseamos desde el fichero json
        articulos: [],
        toProduce: [],
        //Array del fetch de json de empresas
        empresas: [],

        //Por defecto primero va a tener la primera empresa de la array
        currentEmpresa: {
            nombre:'',
            serie:'',
        },

        //Atributos de los aticulos
        fondos: [],
        laterales: [],
        tapas: [],

    },
    /*Metodos que se ejecutan al iniciar la pagina*/
    created() {
        this.getProducts();
        this.getEmpresas();
    },
    methods: {
        comprobar: function (index,a) {
            if (this.fondos[index] === true && this.laterales[index] === true && this.tapas[index] === true) {
                this.sendProduction(index,a);
                return true;
            } else if (this.fondos[index] === '' && this.laterales[index] === '' && this.tapas[index] === true) {
                this.sendProduction(index,a);
                return true;
            } else if (this.fondos[index] === true && this.laterales[index] === '' && this.tapas[index] === '') {
                this.sendProduction(index, a);
                return true;
            } else if (this.fondos[index] === '' && this.laterales[index] === true && this.tapas[index] === '') {
                this.sendProduction(index,a);
                return true;
            } else if (this.fondos[index] === true && this.laterales[index] === '' && this.tapas[index] === true) {
                this.sendProduction(index,a);
                return true;
            } else if (this.fondos[index] === '' && this.laterales[index] === true && this.tapas[index] === true) {
                this.sendProduction(index,a);
                return true;
            } else if (this.fondos[index] === true && this.laterales[index] === true && this.tapas[index] === '') {
                this.sendProduction(index,a);
                return true;
            }else{
                this.deleteProduct(index,a);
            }

        },
        sendProduction:function(index,a) {
            //Comprueba que elementos li estan marcados en verde
            this.toProduce[index] = (a);
        },
        deleteProduct:function(index){
          this.toProduce[index] = null;
        },
        showProduction: function () {
            //Eliminar las posiciones que son nulas
            const results = this.toProduce.filter(element => {
                return element !== null;
            });

            console.log(results);
        },
        setSerieByName: function (e) {

            this.currentEmpresa.serie = e;

        },
        filter: function (a) {

            if (a.serie.toUpperCase() === this.currentEmpresa.serie.toUpperCase()) {
                return a;
            }
        },
        setDefault: function (e) {
            this.currentEmpresa.nombre = e.nomfiscli;
            this.currentEmpresa.serie = e.serie;
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