export const Scope = ({ scopeRef, children }) => {
  return (
    <>
      <div>
        {scopeRef}
        <span className="text-blue-500"> {`{`} </span>
      </div>
      <div className="ml-4">{children}</div>
      <div className="mb-4 text-blue-500">{`}`}</div>
    </>
  );
};

export const Function = ({ name, children, invoke }) => {
  return (
    <>
      <span className="text-blue-500">{name}</span>
      <span className="text-amber-600">(</span>
      {children}
      <span className="text-amber-600">)</span>
      {invoke && <span className="text-gray-50">;</span>}
    </>
  );
};

export const String = ({ children, single }) => {
  return (
    <span className="mx-2 text-amber-300">
      {single ? `'${children}'` : `"${children}"`}
    </span>
  );
};

export const Keyword = ({ children }) => {
  return <span className="mr-2 text-amber-600">{children}</span>;
};

export const Declear = ({ children }) => {
  return <span className="mr-2 text-blue-400">{children}</span>;
};

export const Operator = ({ children }) => {
  return <span className="mr-2 text-blue-500">{children}</span>;
};

export const Line = ({ children }) => {
  return (
    <div>
      {children}
      <span className="text-gray-50">;</span>
    </div>
  );
};

export const LineGap = () => {
  return <div className="h-2"></div>;
};

export const LongComment = ({ children }) => {
  return (
    <div className="my-4 ml-2 leading-tight text-green-600">
      <div>{`/ *`}</div>
      {children}
      <div>{`* /`}</div>
    </div>
  );
};

export const LongCommentLine = ({ name, children }) => {
  return <div>{`* ${name}: ${children}`}</div>;
};
