/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

const ConversorUnidades = (id, value )=>{
  if (id==='metro'){

        document.getElementById("pulgada").value=value*39,37;
        document.getElementById("pie").value=value*3,281;
        document.getElementById("yarda").value=value*1,1;
}

  if (id==='pie'){

    document.getElementById("metro").value=value/3,281;
    document.getElementById("pulgada").value=value*12;
    document.getElementById("yarda").value=value/3;
}

if (id==="yarda"){

    document.getElementById("metro").value=value/1.1;
    document.getElementById("pie").value=value*12;
    document.getElementById("pulgada").value=value/3;
}

if (id==="pulgada"){

    document.getElementById("metro").value=value/39,37;
    document.getElementById("pie").value=value/12
    document.getElementById("yarda").value=value/36;
}
}



const gradrad = (id, value)=>{
  if (id==='grados'){

        document.getElementById("unid_grados").value=(value*Math.pi/180).toFixed(4);
}}



const radgrad = (id, value)=>{
  if (id==='unid_radianes'){

        document.getElementById("radianes").value=(value * 180 / Math.PI).toFixed(2);
}}


