export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Límites y continuidad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Límites',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Notación y simbología de límites',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Límite de una función',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Límites laterales y límites bilaterales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Propiedades y Álgebra de límites',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Propiedades algebraicas básicas de los límites',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Límite de funciones',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cálculo de límites aplicando propiedades algebraicas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Evaluación de Límites e Indeterminaciones',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Límites infinitos y asíntotas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Chíguil Figueroa, F. & Castillo Soto, M. (2024). Manual de cálculo diferencial e integral. Usos y aplicaciones en la modelación microeconómica: (1 ed.). Editorial Miguel Ángel Porrúa. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/275845?page=1',
    },
    {
      referencia:
        'Bruzual, R. & Domínguez, M. (2016). Cálculo diferencial en varias variables: ( ed.). D - Universidad Central de Venezuela. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/117596?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Asíntota',
      significado:
        'línea recta que se aproxima continuamente a una curva sin llegar a tocarla.',
    },
    {
      termino: 'Asíntota horizontal',
      significado:
        'recta horizontal a la que una función se aproxima a medida que la variable independiente tiende a infinito.',
    },
    {
      termino: 'Asíntota vertical',
      significado:
        'recta vertical a la que una función se aproxima a medida que la variable independiente tiende a un valor específico.',
    },
    {
      termino: 'Continuidad',
      significado:
        'propiedad de una función que indica que no presenta saltos o interrupciones en su gráfica en un punto o intervalo dado.',
    },
    {
      termino: 'Costo marginal',
      significado:
        'incremento en el costo total que resulta de producir una unidad adicional de producto.',
    },
    {
      termino: 'Demanda',
      significado:
        'cantidad de un bien o servicio que los consumidores están dispuestos a adquirir a diferentes precios del mercado.',
    },
    {
      termino: 'Discontinuidad',
      significado:
        'punto donde una función presenta una ruptura o salto en su gráfica.',
    },
    {
      termino: 'Discontinuidad asintótica',
      significado:
        'tipo de discontinuidad que ocurre cuando al menos uno de los límites laterales de una función en un punto es infinito.',
    },
    {
      termino: 'Discontinuidad de salto:',
      significado:
        'tipo de discontinuidad que se presenta cuando los límites laterales de una función en un punto existen, pero son diferentes entre sí.',
    },
    {
      termino: 'Discontinuidad evitable',
      significado:
        'tipo de discontinuidad que se produce cuando el límite de una función en un punto existe, pero no coincide con el valor de la función en dicho punto.',
    },
    {
      termino: 'Dominio',
      significado:
        'conjunto de todos los valores posibles que puede tomar la variable independiente de una función.',
    },
    {
      termino: 'Elasticidad',
      significado:
        'medida que indica el cambio porcentual en la cantidad demandada ante un cambio porcentual en el precio.',
    },
    {
      termino: 'Factorización',
      significado:
        'proceso de descomponer una expresión algebraica en el producto de factores más simples.',
    },
    {
      termino: 'Función continua',
      significado:
        'función que no presenta saltos, interrupciones o vacíos en un punto o intervalo.',
    },
    {
      termino: 'Indeterminación',
      significado:
        'expresión matemática que no tiene un valor definido y requiere análisis adicional para su evaluación.',
    },
    {
      termino: 'Límite',
      significado:
        'valor al que se aproxima una función cuando la variable independiente se acerca a un punto específico.',
    },
    {
      termino: 'Límite bilateral',
      significado:
        'valor al que se aproxima una función cuando la variable independiente se acerca a un punto desde ambos lados.',
    },
    {
      termino: 'Límite en el infinito',
      significado:
        'valor al que se aproxima una función cuando la variable independiente tiende a infinito.',
    },
    {
      termino: 'Límite infinito',
      significado:
        'comportamiento de una función cuando tiende a infinito a medida que la variable independiente se acerca a un valor finito.',
    },
    {
      termino: 'Límite lateral',
      significado:
        'valor al que se aproxima una función cuando la variable independiente se acerca a un punto desde un solo lado (izquierdo o derecho).',
    },
    {
      termino: 'Modelo de crecimiento exponencial',
      significado:
        'modelo matemático que supone que la tasa de crecimiento de una variable es proporcional a su valor actual.',
    },
    {
      termino: 'Oferta',
      significado:
        'cantidad de un bien o servicio que los productores están dispuestos a ofrecer a diferentes precios del mercado.',
    },
    {
      termino: 'Racionalización',
      significado:
        'proceso algebraico que elimina raíces del denominador de una fracción multiplicando por expresiones equivalentes.',
    },
    {
      termino: 'Sustitución directa',
      significado:
        'técnica para calcular límites que consiste en reemplazar la variable independiente por el valor al que tiende y simplificar la expresión resultante.',
    },
    {
      termino: 'Teorema de la conservación de signo',
      significado:
        'resultado que relaciona el signo de una función continua en un intervalo con el signo de sus límites laterales en un punto.',
    },
    {
      termino: 'Teorema del emparedado',
      significado:
        'también conocido como teorema del sándwich, establece que si una función está acotada entre dos funciones que tienden al mismo límite, entonces la función del medio también tiende a ese límite.',
    },
    {
      termino: 'Teorema del valor intermedio',
      significado:
        'establece que, si una función continua toma dos valores distintos, también toma todos los valores intermedios entre ellos.',
    },
    {
      termino: 'Variable independiente',
      significado:
        'valor que puede variar libremente y del cual depende el comportamiento de una función.',
    },
  ],
}
