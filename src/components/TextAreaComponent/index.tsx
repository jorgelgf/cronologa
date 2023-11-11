import * as S from "./styles";

interface TextAreaProps {
  style?: object;
  value?: string;
  title?:string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  ph?:string;
  
}
export const TextAreaComponent = ({ style, value, onChange,ph, title }: TextAreaProps) => {
  return <S.TextArea style={style} title={title} value={value} onChange={onChange} placeholder={ph}   />;
};

