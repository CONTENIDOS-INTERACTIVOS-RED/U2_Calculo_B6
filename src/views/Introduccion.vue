<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En esta unidad, se abordan dos conceptos fundamentales del cálculo: los límites y la continuidad. Estas ideas son esenciales para comprender el comportamiento de las funciones y sientan las bases para temas posteriores como la derivación e integración. A lo largo de la unidad, se aprenderá la definición formal de límite, las técnicas para calcularlos y las propiedades que los rigen. También se estudiará la continuidad y discontinuidad de funciones, y teoremas clave relacionados con estos conceptos.
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 Los límites y la continuidad no son meros conceptos abstractos, sino herramientas invaluables para modelar y comprender fenómenos del mundo real. Por ejemplo, en física, los límites se usan para describir velocidades y aceleraciones instantáneas. En economía, permiten analizar tendencias marginales y puntos de equilibrio. En biología, modelan el crecimiento de poblaciones. Dominar estos conceptos no sólo hará al estudiante un mejor matemático, sino que también le dará una nueva lente a través de la cual podrá ver y analizar el mundo que le rodea.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En la <b>primera sección</b>, se estudiarán las <b>desigualdades e inecuaciones</b>, incluyendo su representación gráfica y aplicaciones. La <b>segunda sección</b> se enfocará en el concepto de función, sus propiedades y operaciones. En la <b>tercera sección</b>, se explorarán los principales <b>tipos de funciones</b>, como las funciones lineales, cuadráticas, exponenciales y logarítmicas. A lo largo de la unidad, se proporcionarán ejemplos ilustrativos y ejercicios prácticos para reforzar la comprensión de los conceptos.

</template>
