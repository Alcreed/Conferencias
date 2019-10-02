<?php include_once 'includes/templates/header.php'; ?>

    <section class="informacion contenedor">
        <h2>La mejor conferencia de diseño web en español</h2>
        <img src="img/separador.png" alt="Imagen separador" class="separador">
        <p>Mauris varius imperdiet consectetur. Phasellus pharetra consequat imperdiet. Donec facilisis turpis ut arcu pulvinar, sed mollis arcu mollis. Nullam posuere sagittis tincidunt. In accumsan augue a est vestibulum venenatis. Donec mollis, augue sit amet feugiat faucibus, ex turpis rhoncus nulla, porta suscipit tellus sapien ut leo. Mauris tempor ex nec elit dapibus sagittis. In ultrices dolor nec tortor maximus aliquam. Aliquam ornare metus vel elit fringilla viverra. Curabitur quis vestibulum libero. Donec id viverra magna. Aliquam vitae fringilla elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </section>

    <section class="programa">
        <div class="contenedor-video">
            <video autoplay loop poster="img/bg-talleres.jpg">
                <source src="video/video.mp4" type="video/mp4">
                <source src="video/video.webm" type="video/webm">
                <source src="video/video.ogv" type="video/ogv">
            </video>

            <div class="contenido-programa">
                <div class="contenedor">
                    <div class="programa-evento">
                        <div class="titulo-programa">
                            <h2>Programa del Evento</h2>
                            <img src="img/separador.png" alt="Imagen separador" class="separador">
                        </div>
                        <nav class="menu-programa">
                            <a href="#talleres"><i class="fas fa-code"></i> Talleres</a>
                            <a href="#conferencias"><i class="far fa-comment"></i> Conferencias</a>
                            <a href="#seminarios"><i class="fas fa-university"></i> Seminarios</a>
                        </nav>

                        <div id="talleres" class="info-curso ocultar">
                            <div class="detalle-evento border">
                                <h3>HTML5, CSS3 y JavaScript</h3>
                                <p><i class="far fa-clock"></i> 16:00 hrs</p>
                                <p><i class="far fa-calendar"></i> 10 de Dic</p>
                                <p><i class="fas fa-user"></i> Alfonso González</p>
                            </div>
                            <div class="detalle-evento">
                                <h3>Responsive Web Design</h3>
                                <p><i class="far fa-clock"></i> 20:00 hrs</p>
                                <p><i class="far fa-calendar"></i> 10 de Dic</p>
                                <p><i class="fas fa-user"></i> Alfonso González</p>
                            </div>
                            <div class="ver-todas">
                                <a href="#" class="boton">Ver todas</a>
                            </div>
                        </div>
                        <div id="conferencias" class="info-curso ocultar">
                            <div class="detalle-evento border">
                                <h3>Cómo ser freelancer</h3>
                                <p><i class="far fa-clock"></i> 10:00 hrs</p>
                                <p><i class="far fa-calendar"></i> 10 de Dic</p>
                                <p><i class="fas fa-user"></i> Gregorio Sanchez</p>
                            </div>
                            <div class="detalle-evento">
                                <h3>Tecnologías del futuro</h3>
                                <p><i class="far fa-clock"></i> 17:00 hrs</p>
                                <p><i class="far fa-calendar"></i> 10 de Dic</p>
                                <p><i class="fas fa-user"></i> Susan Sanchez</p>
                            </div>
                            <div class="ver-todas">
                                <a href="#" class="boton">Ver todas</a>
                            </div>
                        </div>
                        <div id="seminarios" class="info-curso ocultar">
                            <div class="detalle-evento border">
                                <h3>Diseño UI para móviles</h3>
                                <p><i class="far fa-clock"></i> 17:00 hrs</p>
                                <p><i class="far fa-calendar"></i> 11 de Dic</p>
                                <p><i class="fas fa-user"></i> Harold Garcia</p>
                            </div>
                            <div class="detalle-evento">
                                <h3>Aprende a programar en una mañana</h3>
                                <p><i class="far fa-clock"></i> 10:00 hrs</p>
                                <p><i class="far fa-calendar"></i> 11 de Dic</p>
                                <p><i class="fas fa-user"></i> Susana Rivera</p>
                            </div>
                            <div class="ver-todas">
                                <a href="#" class="boton">Ver todas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="invitados contenedor">
        <div class="titulo-invitados">
            <h2>Nuestros Invitados</h2>
            <img src="img/separador.png" alt="Imagen separador" class="separador">
        </div>
        <div class="ponentes contenedor">
            <div class="ponente">
                <img src="img/invitado1.jpg" alt="Imagen ponente 1">
                <p>Rafael Bautista</p>
            </div>
            <div class="ponente">
                <img src="img/invitado2.jpg" alt="Imagen ponente 2">
                <p>Shari Herrera</p>
            </div>
            <div class="ponente">
                <img src="img/invitado3.jpg" alt="Imagen ponente 3">
                <p>Gregorio Sanchez</p>
            </div>
            <div class="ponente">
                <img src="img/invitado4.jpg" alt="Imagen ponente 5">
                <p>Susana Rivera</p>
            </div>
            <div class="ponente">
                <img src="img/invitado5.jpg" alt="Imagen ponente 5">
                <p>Harold Garcia</p>
            </div>
            <div class="ponente">
                <img src="img/invitado6.jpg" alt="Imagen ponente 6">
                <p>Susan Sanchez</p>
            </div>
        </div>
    </section>

    <section class="contador parallax">
        <div class="contenedor resumen-evento">
            <span><p class="numero">0</p>Invitados</span>
            <span><p class="numero">0</p>Talleres</span>
            <span><p class="numero">0</p>Días</span>
            <span><p class="numero">0</p>Conferencias</span>
        </div>
    </section>

    <section class="precios contenedor">
        <div class="titulo-precios">
            <h2>Precios</h2>
            <img src="img/separador.png" alt="Imagen separador" class="separador">
        </div>
        <div class="tarjetas-precios">
            <div class="tarjeta">
                <h3>Pase por día</h3>
                <p class="numero">$30</p>
                <p><i class="fas fa-check"></i> Bocadillos gratis</p>
                <p><i class="fas fa-check"></i> Todas las conferencias</p>
                <p><i class="fas fa-check"></i> Todos los talleres</p>
                <a href="#" class="boton">Comprar</a>
            </div>
            <div class="tarjeta">
                <h3>Todos los días</h3>
                <p class="numero">$50</p>
                <p><i class="fas fa-check"></i> Bocadillos gratis</p>
                <p><i class="fas fa-check"></i> Todas las conferencias</p>
                <p><i class="fas fa-check"></i> Todos los talleres</p>
                <a href="#" class="boton">Comprar</a>
            </div>
            <div class="tarjeta">
                <h3>Pase por 2 días</h3>
                <p class="numero">$45</p>
                <p><i class="fas fa-check"></i> Bocadillos gratis</p>
                <p><i class="fas fa-check"></i> Todas las conferencias</p>
                <p><i class="fas fa-check"></i> Todos los talleres</p>
                <a href="#" class="boton">Comprar</a>
            </div>
        </div>
    </section>
    
    <div id="mapa" class="mapa"></div>
    
    <section class="testimoniales contenedor">
        <div class="titulo-testimoniales">
            <h2>Testimoniales</h2>
            <img src="img/separador.png" alt="Imagen separador" class="separador">
        </div>
        <div class="tarjetas-testimoniales">
            <div class="testimonial">
                <blockquote>
                    <p>Sed suscipit ut libero sed congue. Maecenas pellentesque nulla odio, et vulputate augue bibendum eget. Nulla pulvinar, lacus vitae volutpat aliquet, ligula augue rutrum lacus, sit amet dignissim tortor metus sed eros. Donec in lectus vitae lectus eleifend lobortis.</p>
                    <footer>
                        <img src="img/testimonial.jpg" alt="Imagen testimonial">
                        <cite>Herbert Alfonso González Gutiérrez <span>Diseñador Independiente</span></cite>
                    </footer>
                </blockquote>
            </div>
            <div class="testimonial">
                <blockquote>
                    <p>Sed suscipit ut libero sed congue. Maecenas pellentesque nulla odio, et vulputate augue bibendum eget. Nulla pulvinar, lacus vitae volutpat aliquet, ligula augue rutrum lacus, sit amet dignissim tortor metus sed eros. Donec in lectus vitae lectus eleifend lobortis.</p>
                    <footer>
                        <img src="img/testimonial.jpg" alt="Imagen testimonial">
                        <cite>Herbert Alfonso González Gutiérrez <span>Diseñador Independiente</span></cite>
                    </footer>
                </blockquote>
            </div>
            <div class="testimonial">
                <blockquote>
                    <p>Sed suscipit ut libero sed congue. Maecenas pellentesque nulla odio, et vulputate augue bibendum eget. Nulla pulvinar, lacus vitae volutpat aliquet, ligula augue rutrum lacus, sit amet dignissim tortor metus sed eros. Donec in lectus vitae lectus eleifend lobortis.</p>
                    <footer>
                        <img src="img/testimonial.jpg" alt="Imagen testimonial">
                        <cite>Herbert Alfonso González Gutiérrez <span>Diseñador Independiente</span></cite>
                    </footer>
                </blockquote>
            </div>
        </div>
    </section>

    <section class="newsletter">
        <div class="contenido-newsletter contenedor">
            <p>Registrate al newsletter</p>
            <h1>GDLWebCamp</h1>
            <a href="#" class="boton boton-registro">Registro</a>
        </div>
    </section>

    <section class="cuenta-regresiva contenedor">
        <div class="titulo-cuenta">
            <h2>Faltan</h2>
            <img src="img/separador.png" alt="Imagen separador" class="separador">
        </div>
        <div class="tiempo">
            <span><p id="dias" class="numero"></p>Días</span>
            <span><p id="horas" class="numero"></p>Horas</span>
            <span><p id="minutos" class="numero"></p>Minutos</span>
            <span><p id="segundos" class="numero"></p>Segundos</span>
        </div>
    </section>

    <?php include_once 'includes/templates/footer.php'; ?>