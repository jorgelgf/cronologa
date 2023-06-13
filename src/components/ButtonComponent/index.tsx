import { ReactNode } from "react";

import * as S from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  sx?: object;
}

const ButtonComponent = ({ children, onClick, sx }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} style={sx}>
      {children}
    </S.Button>
  );
};

export default ButtonComponent;
