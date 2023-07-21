function ListGroup() {
  const items = ["London", "Paris", "New York", "Madrid", "Berlin"];

  return (
    <>
      {}
      <h1>Cities</h1>
      {items.length === 0 && <p>There are no items to show</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => {
              console.log(`clicked ${item}`);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
