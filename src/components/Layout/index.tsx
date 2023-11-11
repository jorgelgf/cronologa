import * as S from "./styles";
interface LayoutProps {
  children?: React.ReactNode
}
export const Layout = ({ ...props }: LayoutProps) => {
  return < S.Container {...props} />;
};

