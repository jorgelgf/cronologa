import { ReactNode } from "react";
import * as S from "./styles";
import w from '../../_img/what.png'
interface HEaderProps {
  children: ReactNode;
}
const info='Após concluir a cronologia, clique sobre o texto gerado e cole em seu local de uso'

const HeaderComponent = ({ children }: HEaderProps) => {
  return <S.DivHeader><span>{children} <img src={w} width={'18px'} title={info} alt='Informações de uso'/></span></S.DivHeader>;
};

export default HeaderComponent;
