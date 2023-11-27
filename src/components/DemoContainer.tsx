interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

export const DemoContainer: React.FC<Props> = ({children}) => {

  return (
    <div className="bg-slate-200 p-4 rounded-lg">
      {children}
    </div>
  );
};
