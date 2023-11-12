import { Done } from '../Done';
import * as S from './styles';
type osProps  ={
  name: string;
  datTime: Date;
  problem: string;
  solution: string;
  validation: string;
  bool: boolean;
}

interface ShowChronologyProps{
  finishSolution:string[]
  os: osProps[]
}
export const ShowChronology = ({os,finishSolution}:ShowChronologyProps)=>{
  const datTime = new Date();

  return<>
  {os &&
                os.map((item, index)=> (

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
  </>
}