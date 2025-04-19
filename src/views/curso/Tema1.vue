<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Límites'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El concepto de límite es central en el cálculo y captura la idea de estudiar el comportamiento de una función f(x) cuando la variable independiente x se acerca arbitrariamente a un valor a, pero sin llegar a ser exactamente a. Esto se denota como: 

      
        .tabla-a.color-acento-botones.mb-3
          table
            thead
              tr
                td.bg-color-8.text-center.text-bold lim (x→a) f(x) = L
                td.bg-color-8.text-center Se lee "el límite de f(x), cuando x tiende a a.
           
        p(data-aos="fade-left") Intuitivamente, significa que f(x) puede acercarse tanto como se quiera a L eligiendo valores de x suficientemente cercanos a a.
        p(data-aos="fade-left") Gráficamente, el límite representa la tendencia de la gráfica de la función cerca del punto (a,L). Aunque la función podría no estar definida en x=a, si el límite existe, la gráfica tendrá una "tendencia clara" cerca de ese punto (Chíguil Figueroa & Castillo Soto, 2024, p.12). 
    
    h2.mb-5(data-aos="fade-left") Ejemplo 

    p.mb-4 A continuación, se presenta un ejemplo:

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Función")
            img.mb-3(src="@/assets/curso/tema1/2-1.svg", style="max-width: 120px")
            p Su dominio es todos los reales excepto x=1, pues daría una división por cero. Sin embargo, el límite de f(x) cuando x→1 sí existe y es igual a 2.
    
          .div(titulo="Interpretación gráfica")
            img.mb-3(src="@/assets/curso/tema1/2-1.svg", style="max-width: 120px")
            p Con la línea discontinua roja representando el límite de la función cuando x tiende a 1, que es 2. Como puede ver, aunque la función no está definida en x=1, las ramas laterales se acercan al valor 2, mostrando la "tendencia" de la función cerca de ese punto.
    
    .bg-full-width.bg_img_2
      .px-4.px-md-5.py-4
        .titulo-figura.mb-4
          h5 Figura 1.
          span Gráfico de la función f(x) = (x<sup>2</sup>-1/(x-1))
        .row.justify-content-center.align-items-center.mb-5.bg-color-8
          .col-lg-6.p-4
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
        
        p.mb-4 En el contexto empresarial, los límites permiten modelar situaciones donde interesa conocer el valor al que tiende una variable cuando otra se acerca a cierto valor. Por ejemplo, en un modelo de ingreso <b>I(x)=50x-0.1x2</b> con x el número de unidades vendidas, I(100) representaría el ingreso con 100 unidades exactas. Sin embargo, <b>lim (x→100) I(x)=4900</b> nos da el ingreso al que nos acercaremos vendiendo casi 100 unidades, una cantidad más realista y manejable.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 LÍMITES POR DEFINICIÓN: DEMOSTRACIÓN 
                      p.mb-0 Para ampliar los conceptos sobre Límites, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/57Z-e5kingg" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    
    h2(data-aos="fade-left") Ejercicio resuelto
    p.mb-5 Encuentra el límite de la función f(x) = (x2 - 4) / (x - 2) cuando x tiende a 2.

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 1" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 1
            p Sustituir x por 2 en la función.
            p.text-center lim (x→2) f(x) = lim (x→2) (x2 - 4) / (x - 2)
            p.text-center = (22 - 4) / (2 - 2)
            p.text-center = 0 / 0     (Indeterminación 0/0)

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 2" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 2
            p Como se obtiene una indeterminación, se debe factorizar el numerador.
            p.text-center lim (x→2) f(x) = lim (x→2) (x - 2)(x + 2) / (x - 2)


    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 3" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 3
            p Simplificar la expresión.
            p lim (x→2) f(x) = lim (x→2) (x + 2) = 2 + 2 = 4
            p Por lo tanto, el límite de la función f(x) = (x2 - 4) / (x - 2) cuando x tiende a 2 es igual a 4.

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='', style="width: 100%;")
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Notación y simbología de límites

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1(data-aos="fade-left")
        p La notación de límites utiliza símbolos específicos para representar el proceso de tender hacia un valor. El símbolo principal es lím, seguido de la variable y el valor al que tiende en subíndice: 
        div.bg-color-8.p-4.text-center.mb-3
          h5.mb-0 lim (x→a).
        p Esto indica que x se aproxima al número a (Bruzual & Domínguez, 2016, p. 27). El símbolo → se lee "tiende a". A la derecha del símbolo lim se escribe la función cuyo límite se está calculando: 
        div.bg-color-8.p-4.text-center.mb-3
          h5.mb-0 lim (x→a) f(x).
        p Si el límite existe, se completa la notación con el símbolo =, seguido del valor del límite: lim (x→a) f(x) = L (García Franchini & Alvarado Arellano, 2016, p. 60). 
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Aquí, L es un número real al que la función f(x) se puede acercar tanto como se quiera tomando valores de x suficientemente cercanos para a. Cuando a o L son ∞ o -∞ (infinito), se usan estas notaciones en lugar de un número.

    .bg-full-width.bg_img_2
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
          .col-lg-8(data-aos="fade-left")
            p La notación y simbología utilizada para representar límites es esencial para comprender y comunicar conceptos relacionados con el cálculo diferencial. La notación estándar para el límite de una función f(x) cuando x tiende a un valor a es: 
            div.bg-color-8.p-4.text-center.mb-3
              h5.mb-0 lim (x→a) f(x) = L
            p A continuación, se presenta un resumen de los elementos clave en la notación de límites:
        
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/10.svg" alt="" style="width: 90px")
              h5.text-center Lim
              p.mb-0.text-center Indica que se trata de un límite
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/10.svg" alt="" style="width: 90px")
              h5.text-center x→a 
              p.mb-0.text-center Representa que la variable independiente x se aproxima a a
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/10.svg" alt="" style="width: 90px")
              h5.text-center f(x) 
              p.mb-0.text-center Es la función cuyo límite se está calculando.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/10.svg" alt="" style="width: 90px")
              h5.text-center L 
              p.mb-0.text-center Valor del límite, es decir, el valor al que tiende f(x) cuando x se acerca al valor a
    
    .bg-full-width.bg_img_1
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
          .col-lg-8(data-aos="fade-left")
            p Por ejemplo, para f(x)=(2x2+3x)/(x2+1), el límite cuando x→1 se escribe como: 
            div.bg-color-8.p-4.text-center.mb-3
              h5.mb-0 lim [x→1] ((2x2+3x)/(x2+1)).
            p Para calcular este límite, se sustituye x=1 en la función:
            div.bg-color-8.p-4.text-center.mb-5
              h5.mb-0 lim [x→1] ((2x2+3x)/(x2+1)) = ((2(1)2+3(1))/(12+1)) = (2+3)/(1+1) = 5/2
            div.bg-color-1.p-4
              p.mb-0 Es importante destacar que la flecha "tiende a" no implica que x llegue a ser igual al valor a, sino que se acerca a ese valor tanto como se desee, sin necesariamente alcanzarlo. Esta notación permite expresar de manera concisa y precisa el comportamiento de una función en las proximidades de un punto.
        
        p.mb-4 Además de esta notación, existen símbolos específicos para representar ciertos tipos de límites:
        
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/12.svg" alt="" style="width: 90px")
              h5.text-center lim (x→a⁺) f(x)
              p.mb-0.text-center Límite por la derecha, cuando x se acerca a a por valores mayores que a.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/12.svg" alt="" style="width: 90px")
              h5.text-center lim (x→a⁻) f(x) 
              p.mb-0.text-center Límite por la izquierda, cuando x se acerca a a por valores menores que a.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/12.svg" alt="" style="width: 90px")
              h5.text-center lim (x→±∞) f(x) 
              p.mb-0.text-center Límite cuando x tiende a más o menos infinito.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Límite de una función
    
    .bg-full-width.bg_img_3
      .px-4.px-md-5.py-4
        p.mb-4 El límite de una función f(x) cuando x tiende al valor a, denotado lim (x→a) f(x), es el valor L al que la función se acerca a medida que x se acerca a a, sin necesariamente alcanzar ese valor. Formalmente, para todo ɛ>0 (un número arbitrariamente pequeño), debe existir un δ>0 tal que si 0<|x-a|<δ, entonces |f(x)-L|<ɛ (Palacios Pineda, 2017, p.18). Esta definición captura la idea de que f(x) se aproxima a L cuando x está suficientemente cerca de a.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Límites: Introducción y propiedades 
                      p.mb-0 Para ampliar los conceptos sobre los Límites y sus propiedades, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/U1QtL6Hlr84" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1(data-aos="fade-left")
        p Para calcular límites, una técnica común es la sustitución directa: evaluar f(a) si está definida. Si f es continua en a, entonces <b>lim (x→a) f(x) = f(a)</b> (Ortiz Campos et al., 2016, p.88). Sin embargo, existen funciones con discontinuidades evitables donde el límite existe pero no coincide con f(a).  
        div.bg-color-8.p-4.mb-3
          h5 Por ejemplo, sea:
          p.text-center f(x)=(x2-1)/(x-1) para x≠1, y f(1)=0.
          p.text-center Aunque f(1)=0, el límite cuando x→1 es lim (x→1) (x2-1)/(x-1) = lim (x→1) (x+1) = 2.
          p En el ámbito empresarial, los límites de funciones tienen diversas aplicaciones. Por ejemplo, al analizar la relación entre el precio de un producto y la cantidad demandada, se puede utilizar el concepto de límite para determinar el comportamiento de la demanda a medida que el precio se acerca a un valor específico, lo que puede ayudar a tomar decisiones sobre estrategias de precios y maximización de ingresos.
    
    h2(data-aos="fade-left") Ejercicio resuelto
    p.mb-5 Calcular el límite de la función f(x) = (x2 - 9) / (x - 3) cuando x tiende a 3.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Sustituir x por 3 en la función.
            p.text-center lim (x→3) f(x) = lim (x→3) (x2 - 9) / (x - 3)
            p.text-center = (32 - 9) / (3 - 3)
            p.text-center = 0 / 0     (Indeterminación 0/0)

    
          .div(titulo="Paso 2")
            p Como se obtiene una indeterminación, se debe factorizar el numerador.
            p lim (x→3) f(x) = lim (x→3) (x - 3)(x + 3) / (x - 3)
    
          .div(titulo="Paso 3")
            p Simplificar la expresión.
            p lim (x→3) f(x) = lim (x→3) (x + 3) = 3 + 3 = 6
    
          .div(titulo="Paso 4")
            p Por lo tanto, el límite de la función f(x) = (x2 - 9) / (x - 3) cuando x tiende a 3 es igual a 6.
            p Gráfica de la función f(x)=(x2–9)/(x–3), donde la línea discontinua roja representa el valor del límite en x=3, que es 6. Como puede ver, aunque la función tiene una indeterminación en x=3, su comportamiento cerca de este punto muestra que se aproxima a 6.
            img.d-block.mb-4(src="@/assets/curso/tema1/17.png" alt="" style="width: 300px")

    .bg-full-width.bg_img
      .px-4.px-md-5.py-4
        #t_1_3.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.3] Límites laterales y límites bilaterales
        
        p.mb-4 Los límites laterales estudian el comportamiento de una función f(x) cuando x se acerca a a por la izquierda o por la derecha.

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 El límite lateral izquierdo
                  p.mb-0 Se denota como lim (x→a⁻) f(x) y considera valores de x menores que a. 
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 El límite lateral derecho		
                  p.mb-0 Se denota como lim (x→a⁺) f(x), considera valores de x mayores que a. 
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1(data-aos="fade-left")
        p Si ambos límites laterales existen y son iguales, entonces el límite bilateral <b>lim (x→a) f(x)</b> existe y es igual a ese valor común
        p Gráficamente, los límites laterales se interpretan como la tendencia de la gráfica de f(x) al acercarse a a por la izquierda (x<'a) o por la derecha (x>a). Si la gráfica tiene una "discontinuidad de salto" en x=a, los límites laterales existen, pero son distintos (Chíguil Figueroa & Castillo Soto, 2024, p.19).  
        div.bg-color-8.p-4.mb-3
          h5 Por ejemplo, sea:
          p Sea f(x)=1 si x<1 y f(x)=2 si x≥1. Entonces lim (x→1⁻) f(x)=1 pero lim (x→1⁺) f(x)=2, así que lim (x→1) f(x) no existe.
          p La función f(x) está definida de la siguiente manera:
          p.text-center.text-bold f(x)={1,si x<1 2,si x ≥1 
          p Por lo tanto:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 El límite cuando x se acerca a 1 desde la izquierda (x→1−) es 1.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 El límite cuando x se acerca a 1 desde la derecha (x→1+) es 2.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-5
              p.mb-0 Dado que los límites laterales no coinciden, el límite total limx→1f(x) no existe.
    
    p.mb-4 A continuación, se grafica esta función para visualizar cómo se comporta la discontinuidad de salto en x=1.

   
    .titulo-figura.mb-4
      h5 Figura 2.
      span Gráfico de la función con discontinuidad de salto.
    .row.justify-content-center.align-items-center.mb-5.bg-color-8
      .col-lg-6.p-4
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-5
        p Gráfica de la función con la discontinuidad de salto en x=1. Como puede observar, la función toma el valor de 1 cuando x<1 y el valor de 2 cuando x≥1. La línea discontinua en x=1 representa la ubicación de la discontinuidad, donde los límites laterales desde la izquierda y la derecha no coinciden, lo que implica que el límite global no existe. 
    
    h2(data-aos="fade-left") Aplicación empresarial de los límites laterales
    p.mb-5 Los límites laterales son útiles para analizar funciones de costos e ingresos cuando existen cambios abruptos en ciertos niveles de producción. En empresas con estructuras de costos que varían drásticamente al alcanzar un volumen específico de producción, estos límites permiten evaluar el comportamiento financiero antes y después del punto crítico.
    

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")  
        div.bg-color-8.p-4.mb-3
          h5 Ejemplo: política de descuentos
          p Consideremos una política de descuento del 30% en ventas hasta 1000 unidades. Sea P(x) el precio unitario con descuento para una venta de x unidades, con P(x)=7 si x≤1000 y P(x)=10 si x>1000.
          P.mb-0 Aunque P(1000) considera solo el precio con descuento, los límites laterales revelan el cambio inminente:  
          P.mb-0 lim (x→1000⁻) P(x) = $7 (precio límite aplicando descuento)  
          P lim (x→1000⁺) P(x) = $10 (precio límite ya sin descuento)

          P.mb-0 Así, los límites laterales capturan las distintas tendencias del precio cerca de 1000 unidades.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Aplicaciones en economía, costos, ingresos y demanda 
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Aplicaciones en economía, costos, ingresos y demanda</b>, donde se exploran las aplicaciones de los límites en el análisis económico y empresarial. A través de ejemplos prácticos, se detallan conceptos fundamentales como el costo marginal y la elasticidad de la demanda, demostrando cómo estas herramientas matemáticas permiten tomar decisiones estratégicas en el ámbito financiero y comercial.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicaciones en economía, costos, ingresos y demanda .
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/19.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/275845?page=1" target="_blank" rel="noopener noreferrer") Chíguil Figueroa, F. & Castillo Soto, M. (2024). Manual de cálculo diferencial e integral. Usos y aplicaciones en la modelación microeconómica: (1 ed.). Editorial Miguel Ángel Porrúa. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/40405?page=1" target="_blank" rel="noopener noreferrer") Ortiz Campos, F. J. Ortiz Cerecedo, F. J. & Ortiz Cerecedo, F. J. (2016). Cálculo diferencial: (2 ed.). Grupo Editorial Patria.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40498" target="_blank" rel="noopener noreferrer") Palacios Pineda, L. M. (2017). Cálculo de varias variables: ( ed.). Grupo Editorial Patria.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.khanacademy.org/math/differential-calculus/dc-limits " target="_blank" rel="noopener noreferrer") Khan Academy ofrece una lección interactiva que cubre el concepto de límites en cálculo, diseñada para estudiantes de todos los niveles. La explicación es clara y cuenta con ejercicios prácticos. Khan Academy. (n.d.). Unidad 1: Límites y continuidad. Khan Academy.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-2/v/introduction-to-limits-hd" target="_blank" rel="noopener noreferrer") Khan Academy. (n.d.). Introducción a límites. Khan Academy.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.matesfacil.com/BAC/limites/ejercicios-resueltos-limites-1.html" target="_blank" rel="noopener noreferrer") MatesFacil.com ofrece ejemplos prácticos resueltos sobre límites de varios niveles de complejidad. Es una herramienta útil para estudiantes que desean comprender este tema fundamental en cálculo. MatesFacil.com. (n.d.). Cálculo de límites, con y sin indeterminaciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.desmos.com/calculator" target="_blank" rel="noopener noreferrer") Desmos es una plataforma interactiva de gráficos matemáticos que ofrece un simulador de límites. Permite a los usuarios observar el comportamiento de una función cuando se acerca a un punto específico. Además, proporciona una visualización clara del valor del límite en el gráfico.    

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/57Z-e5kingg" target="_blank" rel="noopener noreferrer") Épsilon Akdemy. (2022, 8 de julio). Límites por definición: Demostración. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/U1QtL6Hlr84  " target="_blank" rel="noopener noreferrer") Innova Math. (2021, 7 de enero). Límites: Introducción y propiedades. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
