function ErrorMsg({ items }) {
  return (
    <>
      {items.length === 0 && <h1>There is no foods items to be displayed in this field</h1>}
    </>
  );
}

export default ErrorMsg
