import { useState,useEffect } from "react";
import * as S from "./styles";

import {ButtonComponent,InputComponent,Done,HeaderComponent,Layout,Modal,TextAreaComponent} from  './components'

interface osProps {
  name: string;
  datTime: Date;
  problem: string;
  solution: string;
  validation: string;
  bool: boolean;
}
export default function App() {

  const [os, setOs] = useState<osProps[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [boolLocalStorage,setBoolLocalStorage] = useState(false);
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [validation, setValidation] = useState("");
  const [solution, setSolution] = useState("");
  const [bool, setBool] = useState(true);
  const [boolProblem, setBoolProblem] = useState(true);
  const [boolCollaborator,setBoolCollaborator] = useState(true);
  const [finishSolution, setFinishSolution] = useState<string[]>(['']);
  const [ok, setOk] = useState(false)
const [saveProblem,setSaveProblem] = useState(true);

  const datTime = new Date();
useEffect(()=>{
localStorage.setItem('Name',name);
// eslint-disable-next-line react-hooks/exhaustive-deps
},[boolLocalStorage])

//obj para as descrições inputs/textArea/button
  const obj = {
    inputName:"Nome do Analista",
    inputDesc: "Descreva o Problema",
    inputValid:"Validado por...",
    textAreaSolut: "Informe os Passos para Solução do Problema",
    textButtonFinish: "ENVIAR",
  }

  //style dos inputs
  const SXtext={
    width: '300px'
  }
  const handleAdd = () => {
      const newOs: osProps = {
      name,
      datTime,
      problem,
      validation,
      solution,
      bool,
    };
  
    setOs([newOs]);

    if(problem!=="")
    {
      setBoolProblem(false);
    }
    if(validation !=="")
    {
      setBoolCollaborator(false);
    }

    if(solution!=="")
    {
    setFinishSolution([...finishSolution,datTime.toLocaleString() + " - " + solution +"\n"]);
    setSolution('');
    }

    if (name !== "") {
      setBool(false);
    }
  };

  const handleErase = () => {
    setOs([]);
    setFinishSolution([]);
    setBool(true);
    setBoolProblem(true);
    setBoolCollaborator(true);
    setName(name);
    setProblem('');
    setValidation('');
    setOk(false);
    setSaveProblem(true);
  };
  
const saveProblemFunction = ()=> {
  setSaveProblem(false)
    setProblem(`${datTime.toLocaleString()} - `)
}
  const handleClear = ()=>{
setOk(true)  }


  const SXyes =
  {
    backgroundColor:'green',
    color:'white'
  }

  const SXno =
  {
    backgroundColor:'red',
    color:'white'
  }
  return <>
   {ok && <Modal>
   <div>
      <ButtonComponent onClick={handleErase} sx={SXyes}> SIM </ButtonComponent> 
      <ButtonComponent  onClick={()=>setOk(false)} sx={SXno}> NÃO</ButtonComponent>
    </div>
   </Modal>}

<S.Container>
  <HeaderComponent children="CRONOLOGIA"/>

  <div className="cont" style={{display:'flex'}}>
  <Layout>
    <section>
  
        <div style={{ display:'flex',marginBottom:'.5rem', margin:'0',width:'auto' }} >
          <div style={{marginBottom:'.2rem'}}>
              {bool &&
              <span><InputComponent 
              onChange={(e)=>setName(e.target.value)} 
              value={`${localStorage.getItem('Name')===""?name: localStorage.getItem("Name")}`} title={obj.inputName} 
              type="string" placeholder={obj.inputName} style={SXtext}/> 
             {boolLocalStorage&& <ButtonComponent children = 'APAGAR' sx={{padding:'.2rem 1rem', backgroundColor:'red',color:'rgb(241, 198, 198)',marginLeft:'.4rem'}} />}
              </span>}
              
              {boolProblem && <span><InputComponent onClick={()=>
                saveProblem && saveProblemFunction()} 
                onChange={(e)=> setProblem( e.target.value)}
                value={problem} title ={obj.inputDesc}
                type="string"  placeholder={obj.inputDesc} 
                style={SXtext}/></span>}

              {boolCollaborator && 
              <span>
              <InputComponent onChange={(e)=>setValidation(e.target.value)}
              value={validation} type='text' 
              placeholder={obj.inputValid} 
              style={SXtext} title={obj.inputValid}/></span>}

          </div>   
        </div>
                <span>
                  <TextAreaComponent  
                  value={solution}
                  onChange={(e)=>setSolution(e.target.value)}
                  title={obj.textAreaSolut} 
                  style={{width:'300px', height:'100px'}} 
                  ph={obj.textAreaSolut}/>
                  </span>
         
      
              <div 
              style={{width:'316px', display:'flex', alignItems:'center', justifyContent:'end', padding:'.5rem 0'}}>
              
              <ButtonComponent 
              onClick={handleAdd}children={obj.textButtonFinish}
              sx={{backgroundColor:'#0F9A0C', color:'#cbe2cb',height:'auto', width:'auto' }}/>
      
      {!bool && 
          <>
          <ButtonComponent onClick={handleClear} 
          children="DELETAR" 
          sx={{backgroundColor:"#f54040",color:"#f7d2d2", width:"auto", marginLeft:'.5rem'}}/>
          </>
      }         
              </div>
    </section>

  </Layout>  
          <Layout>{os &&
                os.map((item, index) => (

                  <S.DivChronology title='Clique para Copiar!' onClick={()=>{
                      Done(item,datTime,finishSolution);}}
                          style={{cursor:'pointer'}}key={index}>
                    <>
                      <div>                
                        <b>ANALISTA: </b>
                        {item.name}
                      </div>
                      <div>
                        {" "}
                        ------------------------------------------
                        <br />
                        <b>PROBLEMA CONSTATADO:</b>{" "}
                        {item.problem}
                      </div>
                      ------------------------------------------
                      <br />
                      <div>
                        <b>SOLUÇÃO: </b> <br />

                        ,{finishSolution}
                      </div>
                      ------------------------------------------
                      <br />
                      <div>
                        <b>VALIDADO POR: </b>
                        {item.validation}
                      </div>
                      ------------------------------------------
                      <br />
                    </>
            </S.DivChronology>
          ))}
          
          </Layout>
   </div>
          
 </S.Container>
</>
   
}