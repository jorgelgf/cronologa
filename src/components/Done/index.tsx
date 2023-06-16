import { toast } from 'react-toastify';
import copy from "copy-to-clipboard";  

//Função de copiar arquivo gerado

export const Done=(item:any,datTime:Date,finishSolution:object)=>
{
 
const {name,problem, validation} = item ;

const cop =`
ANALISTA: ${name}
------------------------------------------
PROBLEMA CONSTATADO: ${problem}
------------------------------------------
SOLUÇÃO: ${datTime.toDateString()}
\n${finishSolution}
------------------------------------------
VALIDADO POR: ${validation}
------------------------------------------`;

copy(cop);
toast.success("Copiado!")

}