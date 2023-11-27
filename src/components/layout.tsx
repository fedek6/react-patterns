interface Props {
  children: React.ReactNode[];
}

export const Layout: React.FC<Props> = ({children}) => {
  const [left, right] = children;

  return (
    <>
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </>
  );
};
