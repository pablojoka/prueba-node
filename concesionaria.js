const autos = require('./autos.js');

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };

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
    totalDeVentas: function(){
        let preciosVentas = this.listaDeVentas(concesionaria.autos);
        if (preciosVentas == 0){
            return 0;
        }else{
            let totalPrecioVentas = preciosVentas.reduce(function(acum,num){
                return acum + num;
            })
            return totalPrecioVentas;
        }
    }

}

concesionaria.venderAuto('APL123');

console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.listaDeVentas(concesionaria.autos));



/*totalDeVentas: function(){
    let preciosVentas = this.listaDeVentas(concesionaria.autos);
    if (preciosVentas == []){
        return 0;
    }else{
        let totalPrecioVentas = preciosVentas.reduce(function(acum,num){
            return acum + num;
        })
        return totalPrecioVentas;
    }
}*/