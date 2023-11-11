import * as S from "./styles";
interface InputProps {
  value: string;
  type: string;
  style?:object;
  title?:string;
  placeholder: string;
  onClick?:()=>void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputComponent = ({ ...props }: InputProps) => {
  return <S.Input {...props} />;
};

