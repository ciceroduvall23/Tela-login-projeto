import React from 'react';
import {StyleSheet,Text} from 'react-native'; /**vai importar os componentes View e text  */
import meuestilo from '../estilos/Estilo.js' /* .. ele vai voltar na raiz e procurar pela pasta estiloa. meuestilo foi um nome qualquer que dei para a importação*/
let nt; /*daclarei uma variavel */

export default function (props){ 
   nt=props.nota 
   
return( 
    <Text style={meuestilo.textoCursos}>cicero Monteiro fazendo o :Nota{props.nota}</Text> 

    )
  }


