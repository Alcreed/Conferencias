(function(){
    "use strict"
    
    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){
        
        // var map = L.map('mapa').setView([5.025092, -74.00107], 16);

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // }).addTo(map);

        // L.marker([5.025092, -74.00107]).addTo(map)
        //     .bindPopup('GDLWebCamp <br> Práctica de desarrollo.')
        //     .openPopup();

        //Campos datos usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_completo = document.getElementById('pase_completo');
        var pase_dosdias = document.getElementById('pase_dosdias');

        //Botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var listaProductos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        calcular.addEventListener('click', CalcularTiquetes);

        pase_dia.addEventListener('blur', MostrarDias);
        pase_dosdias.addEventListener('blur', MostrarDias);
        pase_completo.addEventListener('blur', MostrarDias);

        nombre.addEventListener('blur', ValidarDatosUsuario);
        apellido.addEventListener('blur', ValidarDatosUsuario);
        email.addEventListener('blur', ValidarDatosUsuario);
        email.addEventListener('blur', ValidarMail);

        function ValidarDatosUsuario(){
            if(this.value == '')
            {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Este campo es obligatorio";
            }
            else{
                errorDiv.style.display = "none";
            }
        }

        function ValidarMail()
        {
            if(this.value.indexOf('@') > -1)
            {
                errorDiv.style.display = "none";
            }
            else{
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Debe tener al menos un @";
            }
        }

        function CalcularTiquetes(event){
            event.preventDefault();
            if(regalo.value === '')
            {
                alert("Selecciona un regalo");
                regalo.focus();
            }
            else{
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletosCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var totalPago = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                var listadoProductos = [];

                if(boletosDia >= 1)
                {
                    listadoProductos.push(boletosDia + " Boletos por día");
                }
                if(boletos2Dias >= 1){
                    listadoProductos.push(boletos2Dias + " Boletos por 2 días");
                }
                if(boletosCompleto >= 1){
                    listadoProductos.push(boletosCompleto + " Boletos por todos los días");
                }
                if(cantCamisas >= 1)
                {
                    listadoProductos.push(cantCamisas + " Camisas");
                }
                if(cantEtiquetas >= 1){
                    listadoProductos.push(cantEtiquetas + " Etiquetas");
                }

                listaProductos.style.display = "block";
                listaProductos.innerHTML = '';
                for(var i = 0; i < listadoProductos.length; i++)
                {
                    listaProductos.innerHTML += listadoProductos[i] + '<br/>';
                }

                suma.innerHTML = "$ " + totalPago.toFixed(2);
            }
        }

        function MostrarDias()
        {
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletosCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];

            if(boletosDia > 0)
            {
                diasElegidos.push('viernes');
            }
            if(boletos2Dias > 0)
            {
                diasElegidos.push('viernes','sabado');
            }
            if(boletosCompleto > 0)
            {
                diasElegidos.push('viernes','sabado', 'domingo');
            }

            for(var i = 0; i < diasElegidos.length; i++)
            {
                document.getElementById(diasElegidos[i]).style.display = "block";
            }
        }

    });
})();