import { ReactNode } from "react";

import * as S from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  sx?: object;
}

export const ButtonComponent = ({ children, onClick, sx, ...props }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} style={sx} {...props}>
      {children}
    </S.Button>
  );
};

