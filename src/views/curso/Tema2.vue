<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Propiedades y Álgebra de límites'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Las propiedades algebraicas de los límites permiten simplificar su cálculo en funciones complejas. Estas estrategias incluyen factorización, racionalización y el uso de expresiones conjugadas para resolver indeterminaciones.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los <b>límites infinitos</b> también juegan un papel clave, pues ayudan a describir el <b>comportamiento asintótico de las funciones</b>, un concepto relevante en economía y optimización empresarial.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Propiedades algebraicas básicas de los límites
    
    p.mb-4 Las propiedades algebraicas de los límites permiten simplificar cálculos y deducir el límite de funciones complejas a partir de los límites de funciones más simples. Algunas propiedades clave son (Ortiz Campos et al., 2016, p.92):

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/3.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="3%" y="31.5%" numero="+")
                h5 Suma
                p lim(x→a) [f(x)+g(x)] = lim(x→a) f(x) + lim(x→a) g(x)
    
              .bg-color-white.box-shadow.p-3(x="6%" y="13%" numero="+")
                h5 Diferencia
                p lim(x→a) [f(x)-g(x)] = lim(x→a) f(x) - lim(x→a) g(x)
    
              .bg-color-white.box-shadow.p-3(x="2%" y="47.5%" numero="+")
                h5 Producto
                p lim(x→a) [f(x)*g(x)] = lim(x→a) f(x) * lim(x→a) g(x)  
    
              .bg-color-white.box-shadow.p-3(x="92%" y="13%" numero="+")
                h5 Cociente
                p lim(x→a) [f(x)/g(x)] = lim(x→a) f(x) / lim(x→a) g(x), si lim(x→a) g(x)≠0
    
              .bg-color-white.box-shadow.p-3(x="97.5%" y="25%" numero="+")
                h5 Potencia
                p lim(x→a) [f(x)n] = [lim(x→a) f(x)]n, n entero positivo
              .bg-color-white.box-shadow.p-3(x="94.5%" y="67%" numero="+")
                h5 Raíz
                p lim(x→a) [f(x)(1/n)] = [lim(x→a) f(x)](1/n), n impar o lim(x→a) f(x)>0 si n par
    
    .bg-full-width.bg_img_3
      .px-4.px-md-5.py-4
        p.mb-4 Estas reglas nos dicen que el límite de una suma, diferencia, producto o cociente es la suma, diferencia, producto o cociente de los límites (si existen y, para el cociente, si el límite del denominador no es 0).  

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Propiedades de los límites.  
                      p.mb-0 Para ampliar los conceptos sobre las propiedades de los límites, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/CvJRAiGAQY8 " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
    
    h2.mb-5(data-aos="fade-left") Ejemplo aplicado en economía

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1(data-aos="fade-left")
        p Supongamos que una empresa quiere analizar el comportamiento de sus ingresos totales, que están dados por la función 
        div.bg-color-8.p-4.text-center.mb-3
          h5.mb-0 I(x) = x * p(x)
        p.mb-5 Donde x es la cantidad vendida y p(x) es la función de precio. Utilizando las propiedades de los límites, se puede calcular el límite de los ingresos totales cuando la cantidad vendida tiende a un valor específico, descomponiendo la función en el producto de dos funciones más simples y aplicando la propiedad del producto.
        h5 Ejercicio resuelto
        p Calcula el límite de la función h(x) = (3x2 + 2x) / (x - 1) cuando x tiende a 1, utilizando las propiedades de límites.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p.mb-0 Descomponer la función h(x) en la suma de dos funciones más simples.
            p h(x) = (3x2 + 2x) / (x - 1) = [3x2 / (x - 1)] + [2x / (x - 1)]
    
          .div(titulo="Paso 2")
            p.mb-0 Aplicar la propiedad de la suma para calcular el límite.
            p vlim (x→1) h(x) = lim (x→1) [3x2 / (x - 1)] + lim (x→1) [2x / (x - 1)]

    
          .div(titulo="Paso 3")
            p Calcular el primer límite utilizando la propiedad del cociente y la factorización.
            p.mb-0.text-center lim (x→1) [3x2 / (x - 1)] = 
            p.mb-0.text-center lim (x→1) [3x(x + 1) / (x - 1)] = 
            p.mb-0.text-center lim (x→1) [3x] = 3

    
          .div(titulo="Paso 4")
            p Calcular el segundo límite utilizando la propiedad del cociente y la factorización.
            p.mb-0.text-center lim (x→1) [2x / (x - 1)] = 
            p.mb-0.text-center lim (x→1) [2(x - 1 + 1) / (x - 1)] = 
            p.mb-0.text-center lim (x→1) [2 + 2 / (x - 1)] = 
            p.mb-0.text-center 2 + lim (x→1) [2 / (x - 1)] = ∞

          .div(titulo="Paso 5")
            p Sumar los límites obtenidos.
            p.text-center lim (x→1) h(x) = 3 + ∞ = ∞
            p Por lo tanto, el límite de la función h(x) = (3x2 + 2x) / (x - 1) cuando x tiende a 1 es igual a infinito.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Límite de funciones
    
    p.mb-4 El límite de una función describe el comportamiento de la función cuando la variable independiente se aproxima a un determinado valor. Es una herramienta fundamental en el cálculo y el análisis matemático.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Límite de funciones
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Límite de funciones</b>, donde se presentan de manera detallada las propiedades fundamentales de los límites y su aplicación en distintos tipos de funciones. A través de explicaciones claras y ejercicios resueltos, se abordan conceptos clave como la suma, producto, cociente y potencia de límites, junto con estrategias para resolver casos complejos. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Límite de funciones.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Cálculo de límites aplicando propiedades algebraicas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El cálculo de límites utilizando propiedades algebraicas es una herramienta fundamental para simplificar y resolver problemas de límites más complejos. Al descomponer funciones en operaciones más simples, como sumas, diferencias, productos y cocientes, se pueden aplicar las propiedades correspondientes para calcular el límite de cada parte y luego combinar los resultados.
        p(data-aos="fade-left") El cálculo de límites usando propiedades algebraicas es un método sistemático y potente que sigue estos pasos (Chíguil Figueroa & Castillo Soto, 2024, p.22):
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-lg-1
              h5 Identificar funciones simples
              p Analizar la función dada y descomponerla en expresiones más simples.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-lg-1
              h5 Calcular los límites de funciones simples
              p Usar reglas directas como:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 lim(x→a) c = c para constantes c.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 lim(x→a) x = a para la variable independiente
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 lim(x→a) xn = an para potencias (n entero)
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 Límites conocidos: lim(x→0) (sen(x)/x) = 1, etc.
           

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-lg-1
              h5 Aplicar las propiedades de los límites
              p Combinar estos límites usando las propiedades adecuadas: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 lim(x→a) [f(x)±g(x)] = lim(x→a) f(x) ± lim(x→a) g(x) 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 lim(x→a) [f(x)*g(x)] = lim(x→a) f(x) * lim(x→a) g(x) 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 lim(x→a) [f(x)/g(x)] = lim(x→a) f(x) / lim(x→a) g(x), si lim(x→a) g(x)≠0
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-5
                  p.mb-0 lim(x→a) [f(x)n] = [lim(x→a) f(x)]n
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-lg-1
              h5 Simplificar el resultado
              p Verificar que no haya indeterminaciones y comprobar condiciones como denominadores no nulos.
    
    h2.mb-5(data-aos="fade-left") Método en acción con un ejemplo

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1(data-aos="fade-left")
        p Supongamos que una empresa tiene una función de costos C(x) = (1500x + 2000) / (x - 10), donde x es la cantidad producida. Para analizar el comportamiento de los costos cuando la producción se acerca a 10 unidades, se puede calcular el límite aplicando propiedades algebraicas:  
        div.bg-color-8.p-4.mb-3
          p.mb-0 lim (x→10) C(x) = lim (x→10) [(1500x + 2000) / (x - 10)]
          p.ms-4.mb-0 = [lim (x→10) (1500x + 2000)] / [lim (x→10) (x - 10)], siempre que lim (x→10) (x - 10) ≠ 0
          p.ms-4.mb-0 = (1500 * 10 + 2000) / (10 - 10)
          p.ms-4 = 17000 / 0 (Indeterminación)
          p Para resolver la indeterminación, se puede factorizar el numerador y simplificar:
          p.mb-0 lim (x→10) C(x) = lim (x→10) [(1500(x - 10) + 17000) / (x - 10)]
          p.ms-4.mb-0 = lim (x→10) [1500 + 17000 / (x - 10)]
          p.ms-4.mb-0 = 1500 + lim (x→10) [17000 / (x - 10)]
          p.ms-4.mb-0 = 1500 + ∞
          p.ms-4 = ∞
    
    p.mb-4 Este resultado indica que los costos tienden a infinito cuando la producción se acerca a 10 unidades, lo que podría sugerir una ineficiencia en el proceso productivo en ese nivel de output.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        h5 Ejercicio resuelto
        p Calcula el límite de la función f(x) = (x2 - 4x + 3) / (x - 1) cuando x tiende a 1 utilizando propiedades algebraicas.
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p.mb-0 Factorizar el numerador de la función.
            p f(x) = (x2 - 4x + 3) / (x - 1) = [(x - 1)(x - 3)] / (x - 1)

    
          .div(titulo="Paso 2")
            p.mb-0 Aplicar la propiedad del cociente.
            p lim (x→1) f(x) = [lim (x→1) (x - 1)(x - 3)] / [lim (x→1) (x - 1)], siempre que lim (x→1) (x - 1) ≠ 0

    
          .div(titulo="Paso 3")
            p.mb-0 Simplificar la expresión y calcular los límites.
            p.mb-0 lim (x→1) f(x) = [lim (x→1) (x - 3)] = 1 - 3 = -2
            p.mb-0 Por lo tanto, el límite de la función f(x) = (x2 - 4x + 3) / (x - 1) cuando x tiende a 1 es igual a -2.


    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Evaluación de Límites e Indeterminaciones
    
    p.mb-4 Como se evidenció en el apartado anterior, en algunos casos de límites se presentan algunas indeterminaciones que impiden solucionar los ejercicios, por lo que es necesario identificarlas, evaluarlas y aplicar métodos complementarios para poder encontrar la solución, lo que se presenta a continuación.

    .bg-full-width.bg_img_4
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1(data-aos="fade-left")
            h2(data-aos="fade-left") a. Sustitución directa y su aplicación en funciones polinómicas
            p La sustitución directa es una técnica para calcular límites que consiste en reemplazar la variable independiente por el valor al que tiende y simplificar la expresión resultante. Esta técnica es especialmente útil para funciones polinómicas, ya que al sustituir el valor de la variable y realizar las operaciones correspondientes, se obtiene directamente el valor del límite.  
            div.bg-color-8.p-4.mb-3
              p Supongamos que se tiene una función de demanda Q(p) = 100 - 2p2, donde p es el precio del producto. Para calcular el límite de la demanda cuando el precio tiende a 5, se puede aplicar la sustitución directa:

              p.mb-0 lim (p→5) Q(p) = lim (p→5) (100 - 2p2)
              p.ms-4.mb-0 = 100 - 2(5)2
              p.ms-4.mb-0 = 100 - 2 * 25
              p.ms-4.mb-0 = 100 - 50
              p.ms-4 = 50
              p Esto significa que, cuando el precio se acerca a 5 unidades monetarias, la cantidad demandada tiende a 50 unidades.
        
        h5 Ejercicio resuelto
        p.mb-5 Calcula el límite de la función <b>f(x) = 3x3 - 2x2 + 4x - 1</b> cuando x tiende a -1 utilizando sustitución directa.

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Paso 1. 
                  p.mb-0 Sustituir x por -1 en la función.
                  p.mb-0 lim (x→-1) f(x) = lim (x→-1) (3x3 - 2x2 + 4x - 1)
                  p.mb-0 = 3(-1)3 - 2(-1)2 + 4(-1) - 1
 
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-2.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Paso 2. 	
                  p.mb-0 Simplificar la expresión.
                  p.mb-0 lim (x→-1) f(x) = -3 - 2 - 4 - 1
                  p.mb-0 = -10


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        p Por lo tanto, el límite de la función <b>f(x) = 3x3 - 2x2 + 4x - 1</b> cuando x tiende a -1 es igual a -10.
        h2(data-aos="fade-left") b. Indeterminaciones comunes
        p Las indeterminaciones son expresiones que resultan de calcular un límite y que no tienen un valor definido. Las indeterminaciones más comunes son:
      
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Tipos de indeterminaciones en límites
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-6(width="30%").text-center  Indeterminación
            th.bg-color-6.text-center Descripción
        tbody
          tr
            td.text-center 0/0	
            td Cuando tanto el numerador como el denominador tienden a cero.
          tr
            td.text-center ∞/∞
            td Cuando tanto el numerador como el denominador tienden a infinito.
          tr
            td.text-center 0*∞
            td Cuando un factor tiende a cero y el otro a infinito.
          tr
            td.text-center ∞-∞
            td Cuando se resta una cantidad infinita de otra cantidad infinita.
          tr
            td.text-center 00, 1∞, ∞0
            td Cuando se elevan expresiones indeterminadas a una potencia.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Para resolver estas indeterminaciones, se pueden aplicar diversas técnicas, como la factorización, la racionalización o la multiplicación por el conjugado (Palacios Pineda, 2017).

        p(data-aos="fade-left") Supongamos que una empresa tiene una función de ingresos I(x) = (x2 - 9) / (x - 3), donde x es la cantidad vendida. Al calcular el límite de los ingresos cuando las ventas tienden a 3 unidades, se obtiene una indeterminación 0/0:
        .bg-color-10.p-4(data-aos="fade-left")
          h5 Paso 1 
          p.mb-0 lim (x→3) I(x) = lim (x→3) [(x2 - 9) / (x - 3)]
          p.ms-4.mb-0 = (32 - 9) / (3 - 3)
          p.ms-4.mb-0 = 0 / 0 (Indeterminación)
        .bg-color-1.p-4(data-aos="fade-left")
          h5 Paso 2 
          p.mb-0 Para resolver esta indeterminación, se puede factorizar el numerador:
          p.mb-0 lim (x→3) I(x) = lim (x→3) [(x - 3)(x + 3) / (x - 3)]
          p.ms-4.mb-0 = lim (x→3) (x + 3)
          p.ms-4.mb-0 = 3 + 3
          p.ms-4.mb-0 = 6
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Así, se concluye que los ingresos tienden a 6 unidades monetarias cuando las ventas se acercan a 3 unidades.
    
    h2(data-aos="fade-left") c. Métodos de resolución
    p.mb-5 Existen varios métodos para resolver indeterminaciones al calcular límites. Algunos de los más comunes son:

    .bg-full-width.bg_img_2
      .px-4.px-md-5.py-4
        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Límites usando factorización 
                      p.mb-0 Para ampliar los conceptos sobre factorización, le invitamos a ver el siguiente ejercicio resuelto en el vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/eOtzlHQHs4U " target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right
          
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        h5 Ejercicio resuelto
        p Calcula el límite de la función f(x) = (√x - √3) / (x - 3) cuando x tiende a 3 utilizando el método de racionalización.
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Identificar la indeterminación.
            p.mb-0 lim (x→3) f(x) = lim (x→3) [(√x - √3) / (x - 3)]
            p.mb-0 = (√3 - √3) / (3 - 3)
            p.mb-0 = 0 / 0 (Indeterminación)

    
          .div(titulo="Paso 2")
            p Racionalizar el numerador multiplicando por el conjugado.
            p.mb-0 lim (x→3) f(x) = lim (x→3) [(√x - √3) / (x - 3)] * [(√x + √3) / (√x + √3)]
            p.mb-0 = lim (x→3) [(x - 3) / ((x - 3)(√x + √3))]
            p.mb-0 = lim (x→3) [1 / (√x + √3)]


    
          .div(titulo="Paso 3")
            p Sustituir x por 3 y simplificar.
            p.mb-0 lim (x→3) f(x) = 1 / (√3 + √3)
            p = 1 / (2√3)

            p.mb-0 Por lo tanto, el límite de la función f(x) = (√x - √3) / (x - 3) cuando x tiende a 3 es igual a 1 / (2√3).

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Límites infinitos y asíntotas

    p.mb-4 Los límites infinitos y los límites en el infinito son dos conceptos distintos pero relacionados que nos ayudan a entender el comportamiento de funciones en situaciones extremas.  

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") <b>Un límite infinito</b> se presenta cuando la función tiende a infinito (positivo o negativo) a medida que la variable independiente se acerca a un valor finito. Se denota como:
    
        .bg-color-8.p-5(data-aos="fade-left")
          h5.mb-5.text-center lim (x→a) f(x) = ∞ o lim (x→a) f(x) = -∞
          p.mb-0 Un límite infinito ocurre cuando los valores de una función crecen o decrecen sin cota mientras la variable independiente se acerca a un valor específico. Matemáticamente, decimos que <b>lim(x→a) f(x) =</b> ∞ si para cualquier número positivo M, existe un δ>0 tal que f(x)>M cuando 0<|x-a|<δ. Por ejemplo, en la función f(x)=1/(x-2), cuando x se acerca a 2, los valores de f(x) crecen sin límite, por lo que lim(x→2) 1/(x-2) = ∞.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Por otro lado, un límite en el infinito se presenta cuando la variable independiente tiende a infinito (positivo o negativo) y se busca el valor al que se aproxima la función. Se denota como:
    
        .bg-color-8.p-5(data-aos="fade-left")
          h5.text-center lim (x→∞) f(x) = L o lim (x→-∞) f(x) = L
          p.mb-0 Un límite en el infinito examina el comportamiento de una función cuando la variable independiente crece o decrece sin límite. Escribimos lim(x→∞) f(x) = L si los valores de f(x) se aproximan a L cuando x crece indefinidamente. Por ejemplo, para f(x)=1/x, lim(x→∞) 1/x = 0, pues la función se acerca cada vez más a cero conforme x crece.
    
    h2.mb-5(data-aos="fade-left") Asíntotas verticales y horizontales

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") Las asíntotas son líneas rectas que describen el comportamiento límite de una función cuando la variable independiente o la función misma tienden a infinito. Existen dos tipos principales de asíntotas: verticales y horizontales.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 <b>Una asíntota vertical</b> se presenta cuando la función tiende a infinito (positivo o negativo) a medida que la variable independiente se acerca a un valor finito. La ecuación de una asíntota vertical es x = a, donde a es el valor al que tiende la variable independiente cuando la función se hace infinita.
    
    p.mb-4 En otras palabras, una asíntota vertical es una línea x=a donde la función crece o decrece sin límite al acercarse a x=a. Ocurre cuando lim(x→a) f(x) = ±∞. La función f(x)=1/x tiene una asíntota vertical en x=0, pues lim(x→0) 1/x = ∞ por la derecha y lim(x→0) 1/x = -∞ por la izquierda.

    .titulo-figura.mb-4
      h5 Figura 3.
      span Gráfico de la función f(x) = 1/x
    .row.justify-content-center.align-items-center.mb-5.bg-color-8
      .col-lg-6.p-4
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
              
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-2
        p(data-aos="fade-left") Gráfica de la función f(x)=1/x. La línea discontinua roja representa la asíntota vertical en x=0. Como puede ver, la función tiende a +∞ cuando x se acerca a 0 desde la derecha y a −∞ cuando x se acerca a 0 desde la izquierda. Esto confirma la presencia de la asíntota vertical en x=0.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg.order-2
              p.mb-0 Mientras que la asíntota horizontal se presenta cuando la función tiende a un valor finito a medida que la variable independiente tiende a infinito (positivo o negativo). La ecuación de una asíntota horizontal es y = L, donde L es el valor al que tiende la función cuando la variable independiente se hace infinita (Palacios Pineda, 2017).
    
    p.mb-4 Una asíntota horizontal es una línea y=L donde la función se aproxima cuando x tiende a infinito. Se da cuando lim(x→±∞) f(x) = L. La función f(x)=x/(x+1) tiene una asíntota horizontal en y=1, pues lim(x→∞) x/(x+1) = 1.

    .titulo-figura.mb-4
      h5 Figura 4.
      span Gráfico de la función f(x) = (x/(x+1))
    .row.justify-content-center.align-items-center.mb-5.bg-color-8
      .col-lg-6.p-4
        figure
          img(src="@/assets/curso/tema2/24.png", data-aos="zoom-in")
    
    p.mb-5 La gráfica de la función f(x)=(x/(x+1)). La línea discontinua roja representa la asíntota horizontal en y=1. Como puede ver, a medida que x se aleja de 0 (tanto hacia el infinito positivo como negativo), la función se acerca a y=1, lo que confirma que la función tiene una asíntota horizontal en y=1.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/25.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1(data-aos="fade-left")
        h2(data-aos="fade-left") Interpretación económica de las asíntotas en costos y precios
        p.mb-5 Las asíntotas tienen aplicaciones clave en la economía y la gestión empresarial, ya que ayudan a modelar y comprender restricciones de costos, precios y capacidad productiva.
        h2(data-aos="fade-left") Relación entre asíntotas y costos
        p.mb-5 Las asíntotas pueden proporcionar información importante sobre el comportamiento de los costos en una empresa:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/26.png")
            .col-lg-7.order-lg-1
              h5 Asíntota horizontal
              p Representa el <b>costo mínimo</b> al que tiende la empresa a medida que aumenta la producción. Puede indicar la presencia de <b>economías de escala</b>, donde el costo unitario disminuye con el incremento en la producción.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/27.png")
            .col-lg-7.order-lg-1
              h5  Asíntota vertical
              p Puede sugerir un <b>nivel máximo de producción,</b> mostrando que más allá de un cierto punto, los costos se disparan debido a <b>limitaciones tecnológicas o de recursos.</b>
           

    h2(data-aos="fade-left") Asíntotas en precios y demanda
    p.mb-5 En el análisis de precios y demanda, las asíntotas reflejan restricciones y comportamientos del mercado:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Asíntota horizontal" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Asíntota horizontal
            p Representa el <b>precio mínimo</b> al que puede llegar un producto cuando la cantidad demandada crece. Esto puede indicar la existencia de un <b>precio de reserva</b>, por debajo del cual los consumidores no comprarán.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/28.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Asíntota vertical" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Asíntota vertical
            p Puede sugerir un límite máximo en la cantidad demandada, sin importar qué tan bajo sea el precio.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/29.png', alt='')

    h2(data-aos="fade-left") Ejemplo 
    p.mb-5 Un ejemplo concreto es la función de costo promedio CA(x)=F/x + v, donde F son los costos fijos y v el costo variable unitario. Esta función tiene:

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color
                  li.mb-5.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Una asíntota vertical en x=0 (los costos promedios se disparan con volúmenes muy pequeños)
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Una asíntota horizontal en y=v (a grandes volúmenes, el costo promedio se aproxima al costo variable)
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/30.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/31.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") Estas asíntotas ayudan a los gerentes a entender los límites prácticos de sus operaciones y a planificar la capacidad y precios de manera más efectiva. La asíntota horizontal del costo promedio, por ejemplo, indica el mínimo precio viable a largo plazo para mantener la rentabilidad.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La comprensión de los límites infinitos y las asíntotas no solo es matemáticamente importante, sino que proporciona <em>insights</em> valiosos para la toma de decisiones empresariales, permitiendo anticipar comportamientos extremos y establecer límites realistas en modelos económicos.
    
    h2(data-aos="fade-left") Teoremas sobre límites y continuidad
    p.mb-5 Los teoremas sobre límites y continuidad son fundamentales en el cálculo y el análisis matemático, ya que permiten establecer reglas y propiedades clave para el comportamiento de funciones.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Teoremas sobre límites y continuidad
            p.mb-4(data-aos="fade-right") Se invita a leer el documento <b>Teoremas sobre límites y continuidad</b>, el cual proporciona una exploración detallada sobre los teoremas fundamentales en el análisis de funciones. En este documento, se presentan resultados clave como el <b>Teorema del Sándwich, el Teorema del Valor Intermedio y el Teorema de la Conservación de Signo</b>, los cuales permiten comprender el comportamiento de las funciones de manera abstracta y general
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Teoremas sobre límites y continuidad.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/32.png', alt='')
        



    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/117596?page=1" target="_blank" rel="noopener noreferrer") Bruzual, R. & Domínguez, M. (2016). Cálculo diferencial en varias variables: ( ed.). D - Universidad Central de Venezuela. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/275845?page=1" target="_blank" rel="noopener noreferrer") Chíguil Figueroa, F. & Castillo Soto, M. (2024). Manual de cálcuculo diferencial e integral. Usos y aplicaciones en la modelación microeconómica: (1 ed.). Editorial Miguel Ángel Porrúa.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40452" target="_blank" rel="noopener noreferrer") García Franchini, C. & Alvarado Arellano, M. (2016). Cálculo diferencial en competencias: ( ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/40405?page=1" target="_blank" rel="noopener noreferrer") Ortiz Campos, F. J. Ortiz Cerecedo, F. J. & Ortiz Cerecedo, F. J. (2016). Cálculo diferencial: (2 ed.). Grupo Editorial Patria.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40498" target="_blank" rel="noopener noreferrer") Palacios Pineda, L. M. (2017). Cálculo de varias variables: ( ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://openstax.org/books/c%C3%A1lculo-volumen-3/pages/4-2-limites-y-continuidad " target="_blank" rel="noopener noreferrer") Bienvenido a Cálculo volumen 3, un recurso de OpenStax. Este libro de texto fue escrito para aumentar el acceso de los estudiantes a materiales de aprendizaje de alta calidad, a la vez que se mantienen los más altos estándares de rigor académico a bajo costo o sin costo alguno. OpenStax. (2022, 24 de marzo). Límites y continuidad.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.geogebra.org" target="_blank" rel="noopener noreferrer") GeoGebra ofrece una calculadora en línea que incluye herramientas para calcular y visualizar los límites de funciones. Además de mostrar los gráficos, puede explorar cómo se comporta la función a medida que se acerca a un valor específico y ver las soluciones numéricas y simbólicas.   

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/CvJRAiGAQY8" target="_blank" rel="noopener noreferrer") Sustraendo h. (2018, 7 de febrero). Propiedades de los límites. [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/eOtzlHQHs4U" target="_blank" rel="noopener noreferrer") Pizmat. (2020, 18 de mayo). Límites usando factorización. [Video]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes definiciones describe mejor el concepto de límite de una función en un punto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El valor que una función alcanza en el punto en cuestión.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El valor que la función se aproxima cuando la variable independiente se acerca a un valor específico.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El valor máximo de la función en un intervalo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El valor mínimo de la función en un intervalo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El límite de una función describe el comportamiento de la función cuando la variable independiente se acerca a un valor específico, no necesariamente alcanzándolo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Si limx→c f(x) = L limx→c g(x) = M, ¿cuál de las siguientes opciones es correcta para la suma de estas funciones?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'limx→c (f(x) + g(x)) = L + M ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'limx→c (f(x) + g(x)) = L - M',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'limx→c (f(x) + g(x)) = L * M ',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'limx→c (f(x) + g(x)) = L / M',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La propiedad de la suma de límites establece que el límite de la suma de dos funciones es igual a la suma de los límites de cada una de ellas, siempre y cuando los límites existan.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'El teorema de los valores intermedios establece que si una función f(x) es continua en un intervalo cerrado [a,b], entonces:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La función toma todos los valores en el intervalo [f(a), f(b)].',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'La función es constante en todo el intervalo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La función tiene un valor mínimo en el intervalo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La función tiene un límite en cada punto del intervalo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El teorema de los valores intermedios establece que si una función continua toma dos valores en un intervalo, entonces tomará todos los valores intermedios entre esos dos valores en algún punto del intervalo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cuál es el límite de limx→0(sin(x)/x)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '0',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '1',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Infinito',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No existe',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El límite limx→0(sin(x)/x) = 1 es un límite fundamental en cálculo, que se utiliza en muchas derivadas y teoremas importantes.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Si limx→2f(x)=4 y limx→2g(x)=3, ¿cuál es el límite de limx→2(f(x)*g(x))?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '12',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: '7',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: '1',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '6',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La propiedad de los límites multiplicativos establece que limx→2(f(x)*g(x))  = limx→cf(x) * limx→cg(x) En este caso, 4×3=12.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
