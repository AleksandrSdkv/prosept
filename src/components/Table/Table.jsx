export function Table({ typeTable, typeHeader, children }) {
  return (
    <>
      <div className={`table table_${typeTable}`}>
        <h2 className="table__header">{typeHeader}</h2>
        {children}
      </div>
    </>
  );
}
