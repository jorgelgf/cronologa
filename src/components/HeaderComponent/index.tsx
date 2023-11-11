import { ReactNode } from "react";
import * as S from "./styles";
interface HEaderProps {
  children: ReactNode;
}
const info='Após concluir a cronologia, clique sobre o texto gerado e cole em seu local de uso'

export const HeaderComponent = ({ children }: HEaderProps) => {
  return <S.DivHeader><span>{children} </span><span className='help' title={info}>?</span></S.DivHeader>;
};


