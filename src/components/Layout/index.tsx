import * as S from "./styles";
interface LayoutProps {
  children?: React.ReactNode
}
const Layout = ({ ...props }: LayoutProps) => {
  return < S.Container {...props} />;
};

export default Layout;
