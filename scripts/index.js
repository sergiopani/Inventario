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
        currentEmpresa: {},
        currentENombre: "",
        currentESerie: "",

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
        comprobar: function (index) {
            if (this.fondos[index] === true && this.laterales[index] === true && this.tapas[index] === true) {
                return true;
            } else if (this.fondos[index] === '' && this.laterales[index] === '' && this.tapas[index] === true) {
                return true;
            } else if (this.fondos[index] === true && this.laterales[index] === '' && this.tapas[index] === '') {
                return true;
            } else if (this.fondos[index] === '' && this.laterales[index] === true && this.tapas[index] === '') {
                return true;
            } else if (this.fondos[index] === true && this.laterales[index] === '' && this.tapas[index] === true) {
                return true;
            } else if (this.fondos[index] === '' && this.laterales[index] === true && this.tapas[index] === true) {
                return true;
            } else if (this.fondos[index] === true && this.laterales[index] === true && this.tapas[index] === '') {
                return true;
            }

        },
        sendProduction: function (product, index) {
            this.toProduce[index] = product;
        },
        validateProduction: function () {
            for (let i = 0; i < this.toProduce.length; i++) {
                if (this.toProduce[i] === null) {
                    console.log('eliminando')
                    //Elimina el objeto porque se ha deselecionado y ya no pasa el filtro
                    this.toProduce.splice(i, 1);
                }
            }

        },
        showProduction: function () {
            console.log(this.toProduce);
        },
        setSerieByName: function (name) {
            this.currentESerie = name;
        },
        filter: function (a) {

            if (a.serie.toUpperCase() === this.currentESerie.toUpperCase()) {
                return a;
            }
        },

        setDefault: function (e) {
            this.currentEmpresa = e;
            this.currentENombre = e.nomfiscli;
            this.currentESerie = e.serie;
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