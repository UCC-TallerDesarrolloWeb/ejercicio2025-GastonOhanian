/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */




const gradrad = (id, value)=>{
  if (id==='grados'){

        document.getElementById("unid_grados").value=(value*Math.pi/180).toFixed(4);
}}



const radgrad = (id, value)=>{
  if (id==='unid_radianes'){

        document.getElementById("radianes").value=(value * 180 / Math.PI).toFixed(2);
}}

const convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",", ".")
    }
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada"){
        met = valor/39.3701;
        pul = valor;
        pie = valor/12;
        yar = valor/36;
    }
    else if(id==="pie"){
        met = valor/3,281;
        pul = valor*12;
        pie = valor;
        yar = valor/3;
    }else if(id==="yarda"){
        met = valor/1.0936;
        pul = valor*36;
        pie = valor*3;
        yar = valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie);
    document.lasUnidades.unid_yarda.value = Math.round(yar);
}




function mostrar_ocultar(valorMO) {
   if(valorMO === "val_mostrar"){
    document.getElementById("divMO").style.display='block';
   } else if (valorMO === "val_ocultar"){
    document.getElementById ("divMO").style.display='none';
   }
}