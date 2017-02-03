//Modo estricto de javascript
/*
'use strict';
*/

(function(){
  'use strict';

   angular
   .module("myApp",[])
   .controller("productCtrl",productCtrl);

   function productCtrl(){
     var product = this;

      product.collection=[
      {
        'img':'img/abrigom.jpg',
        'name':'Abrigo Dama',
        'tallas':['CH','M','G','XG'],
        'colores':['Gris oxford','Negro','Blanco'],
        'precio':'2500'
      },
      {
        'img':'img/chamarrah.jpg',
        'name':'Chamarra Piel',
        'tallas':['G','XG'],
        'colores':['Negro'],
        'precio':'3000'
      },
      {
        'img':'img/h-abrigo.jpg',
        'name':'Abrigo Caballero',
        'tallas':['CH','M','G','XG'],
        'colores':['Gris oxford','Negro'],
        'precio':'2500'
      },
      {
        'img':'img/h-camisas.jpg',
        'name':'Camisa',
        'tallas':['M','G','XG'],
        'colores':['Blanco','Gris','Azul','Negro'],
        'precio':'1000'
      },
      {
        'img':'img/h-jeans.jpg',
        'name':'Jeans Caballero',
        'tallas':['M','G','XG'],
        'colores':['Mezclilla'],
        'precio':'900'
      },
      {
        'img':'img/m-zapatilla1.jpg',
        'name':'Zapatilla',
        'tallas':['23','24','25','26','27'],
        'colores':['Blanco','Rojo','Azul','Negro'],
        'precio':'1200'
      },
      {
        'img':'img/m-jeans.jpg',
        'name':'Jeans Dama',
        'tallas':['CH','M','G','XG'],
        'colores':['Rojo','Blanco','Negro','Azul','Amarillo'],
        'precio':'1150'
      },
      {
        'img':'img/m-vestidoverde.jpg',
        'name':'Vestido',
        'tallas':['CH','M','G','XG'],
        'colores':['Blanco','Verde','Rojo','Negro'],
        'precio':'2050'
      },
      {
        'img':'img/ntraje.jpg',
        'name':'Traje Niño',
        'tallas':['10','12','14','16'],
        'colores':['Blanco','Gris','Negro'],
        'precio':'950'
      },
      {
        'img':'img/nvestido.jpg',
        'name':'Vestido Niña',
        'tallas':['8','10','12','14'],
        'colores':['Blanco','Rosa','Rojo','Negro'],
        'precio':'850'
      },
      {
        'img':'img/nchamarras.jpg',
        'name':'Chamarra Unisex',
        'tallas':['10','12','14'],
        'colores':['Blanco','Rosa','Rojo','Azul','Verde'],
        'precio':'800'
      },
      {
        'img':'img/njeans2.jpg',
        'name':'Jeans Niña',
        'tallas':['10','12','14'],
        'colores':['Diversos'],
        'precio':'700'
      }

    ];//fin arreglo
   }
})();  //parentesis al final en modo estricto
