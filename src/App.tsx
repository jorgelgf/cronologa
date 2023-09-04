import { useState } from "react";
import * as S from "./styles";

import HeaderComponent from "./components/HeaderComponent";
import Layout from "./components/Layout";
import { Input } from "./components/InputComponent/styles";
import TextAreaComponent from "./components/TextAreaComponent";
import { Button } from "./components/ButtonComponent/styles";
import { Done } from './components/Done';
import Modal from './components/Modal';
import ButtonComponent from './components/ButtonComponent';

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
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [validation, setValidation] = useState("");
  const [solution, setSolution] = useState("");
  const [bool, setBool] = useState(true);
  const [boolProblem, setBoolProblem] = useState(true);
  const [boolCollaborator,setBoolCollaborator] = useState(true);
  const [finishSolution, setFinishSolution] = useState<string[]>(['']);
  const [ok, setOk] = useState(false)
  const datTime = new Date();


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
    setName('');
    setProblem('');
    setValidation('');
    setOk(false);
  };

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
              <span><Input 
              onChange={(e)=>setName(e.target.value)} 
              value={name} title={obj.inputName} 
              type="string" placeholder={obj.inputName} style={SXtext}/></span>}
              
              {boolProblem && <span><Input onClick={()=>
                setProblem(`${datTime.toLocaleString()} - `)}
                onChange={(e)=>setProblem(e.target.value)} 
                value={problem} title ={obj.inputDesc}
                type="string"  placeholder={obj.inputDesc} 
                style={SXtext}/></span>}

              {boolCollaborator && 
              <span>
              <Input onChange={(e)=>setValidation(e.target.value)}
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
              
              <Button 
              onClick={handleAdd}children={obj.textButtonFinish}
              style={{backgroundColor:'#0F9A0C', color:'#cbe2cb',height:'auto', width:'auto' }}/>
      
      {!bool && 
          <>
          <Button onClick={handleClear} 
          children="DELETAR" 
          style={{backgroundColor:"#f54040",color:"#f7d2d2", width:"auto", marginLeft:'.5rem'}}/>
          </>
      }         
              </div>
    </section>

  </Layout>  
          <Layout>{os &&
                os.map((item, index) => (

                  <S.DivCronology title='Clique para Copiar!' onClick={()=>{
                      Done(item,datTime,finishSolution);}}
                          style={{cursor:'pointer'}}key={index}>
                    <>
                      <div>
                        {" "}
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

                        {finishSolution}
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
            </S.DivCronology>
          ))}
          
          </Layout>
   </div>
          
 </S.Container>
</>
   
}