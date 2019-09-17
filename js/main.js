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

$(function(){
    'use strict';

    //Programa de Conferencias
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', MostrarInformacion);

    function MostrarInformacion()
    {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;
    }

    //Menú fijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra-navegacion').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > windowHeight)
        {
            $('.barra-navegacion').addClass('fixed');
            $('body').css({'margin-top':barraAltura + 'px'});
        }
        else{
            $('.barra-navegacion').removeClass('fixed');
            $('body').css({'margin-top':'0px'});
        }
    })

    //Lettering
    $('.titulo').lettering();

    //Animaciones números
    $('.resumen-evento span:nth-child(1) p').animateNumber({number: 6}, 1200);
    $('.resumen-evento span:nth-child(2) p').animateNumber({number: 15}, 1200);
    $('.resumen-evento span:nth-child(3) p').animateNumber({number: 3}, 1200);
    $('.resumen-evento span:nth-child(4) p').animateNumber({number: 9}, 1200);

    //Cuenta regresiva
    $('.tiempo').countdown('2019/09/20 09:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

});