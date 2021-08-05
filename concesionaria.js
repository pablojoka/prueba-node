const autos = require('./autos.js');

let persona = [{
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
},
{
    nombre: "Pedro",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
},
{
    nombre: "Mirta",
    capacidadDePagoEnCuotas: 100,
    capacidadDePagoTotal: 100000000
},
];

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        let autoEncontrado = autos.filter(elemento => elemento.patente == patente);
        if (autoEncontrado != "") {
            return autoEncontrado[0];
        } else {
            return null;
        }

    },
    venderAuto: function (patente) {
        let autoVendido = this.buscarAuto(patente);
        autoVendido.vendido = true;
        return autoVendido;
    },
    autosParaLaVenta: function () {
        let autosALaVenta = autos.filter(elemento => elemento.vendido == false);
        return autosALaVenta;
    },
    autosNuevos: function () {
        let autosEnVenta = this.autosParaLaVenta();
        let autos0Km = autosEnVenta.filter(elemento => elemento.km < 100);
        return autos0Km;
    },
    listaDeVentas: function () {
        let autosVentas = autos;
        let arrDePrecios = [];
        let autosYaVendidos = autosVentas.filter(elemento => elemento.vendido == true);//Devuelve Los Objetos de los autos vendidos.

        autosYaVendidos.forEach(function (element) {
            arrDePrecios.push(element.precio)
        })
        return arrDePrecios
    },
    totalDeVentas: function () {
        let preciosVentas = this.listaDeVentas(concesionaria.autos);
        if (preciosVentas == 0) {
            return 0;
        } else {
            let totalPrecioVentas = preciosVentas.reduce(function (acum, num) {
                return acum + num;
            })
            return totalPrecioVentas;
        }
    },
    puedeComprar: function (auto, comprador) {
        let autoBuscado = this.buscarAuto(auto); //devuelve el objeto Auto
        let cliente = persona.filter(elemento => elemento.nombre == comprador);
        cliente = cliente[0]; //devuelve el objeto de la persona
        let unaCuota = autoBuscado.precio / autoBuscado.cuotas;
        if (cliente.capacidadDePagoEnCuotas >= unaCuota && cliente.capacidadDePagoTotal >= autoBuscado.precio) {
            return true;

        } else {
            return false
        }
        //NO SE CUAL ES EL PROBLEMA DE ARRIBA

    },
    autosQuePuedeComprar: function (comprador) {
        let autosALaVenta = this.autosParaLaVenta();//array con autos a la venta
        let listaAutosPosiblesDeCompra = [];

        for (let i = 0; i < autosALaVenta.length; i++) {
            let autoIndividual = autosALaVenta;
            let posibilidadDeCompra = this.puedeComprar(autosALaVenta[i].patente, comprador);
            if (posibilidadDeCompra == true) {
                listaAutosPosiblesDeCompra.push(autoIndividual[i]);
            }else{
                continue
            }


        }
        return listaAutosPosiblesDeCompra;

    }
    

}
console.log(concesionaria.autosQuePuedeComprar("Pedro"));


//console.log(concesionaria.puedeComprar('APL123',"Pedro"));
//console.log(concesionaria.puedeComprar('APL123', "Mirta"));

