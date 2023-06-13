import * as S from "./styles";
interface InputProps {
  value: string;
  type: string;
  style?:object;
  title?:string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputComponent = ({ ...props }: InputProps) => {
  return <S.Input {...props} />;
};

export default InputComponent;
