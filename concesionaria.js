const autos = require('./autos.js');


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
    listaDeVentas: function (patente) {
        let listaDePrecios = [];
        let autosYaVendidos = autos.filter(elemento => elemento.vendido == true);
        for (let i = 0; i < autosYaVendidos.length; i++) {
            let precioDeAuto = autosYaVendidos[i].precio;
            listaDePrecios.push(precioDeAuto);
        }
        let autoVendido = this.venderAuto(patente);
        listaDePrecios.push(autoVendido.precio);

        return listaDePrecios;
        
        
    }


    /*Al llamar a la función listaDeVentas debe retornar una lista con los precios de las ventas, la lista original debe devolver una lista vacia
Al vender al auto con patente 'JJK116' y luego llamar a la función listaDeVentas debe contener el precio del auto vendido */
    

/*listaDeVentas: function (patente) {
        let listaDePrecios = [];
        let autosYaVendidos = autos.filter(elemento => elemento.vendido == true);
        for (let i = 0; i < autosYaVendidos.length; i++) {
            let precioDeAuto = autosYaVendidos[i].precio;
            listaDePrecios.push(precioDeAuto);
        }
        let autoVendido = this.venderAuto(patente);
        listaDePrecios.push(autoVendido.precio);

        return listaDePrecios;
        
        
    }
*/
  
}
//console.log(concesionaria.venderAuto('APL123'));
console.log(concesionaria.listaDeVentas('APL123'));







    /*listaDeVenta: function () {
        let autosVendidos = autos.filter(elemento => elemento.vendido == true);
        let listaDePrecios = [];
        for (let i = 0; i < autosVendidos.length; i++) {
            let precioDeAuto = autosVendidos[i].precio;
            listaDePrecios.push(precioDeAuto);
        }
        return listaDePrecios;
    }*/





  //asdhasidahs

//console.log(concesionaria.buscarAuto('APL123'))
//concesionaria.venderAuto('APL123');


