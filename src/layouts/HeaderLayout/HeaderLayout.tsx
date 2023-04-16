export interface IHeaderLayoutProps {
  title: string;
}

const HeaderLayout = ({ title }: IHeaderLayoutProps) => <h1 className="bg-white p-4 text-3xl font-semibold">{title}</h1>;

export default HeaderLayout;
