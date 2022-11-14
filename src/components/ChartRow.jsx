function ChartRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>
        <ul>
          {props.características.map((category, i) => (
            <li key={`category ${i}`}>{category}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default ChartRow;
