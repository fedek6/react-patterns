interface Props {
  children: React.ReactNode[];
}

export const SplitPane: React.FC<Props> = ({children}) => {
  const [left, right] = children;

  return (
    <div className="flex w-full">
      <div className="flex-grow">
        {left}
      </div>
      <div className="flex-grow">
        {right}
      </div>
    </div>
  );
};
