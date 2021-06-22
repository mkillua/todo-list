import React from "react";
import IconButton from "../template/IconButton";

export default (props) => {
  const renderRows = () => {
    const list = props.list;
    return list.map((todo) => (
      <tr key={todo._id}>
        <td> {todo.description} </td>
        <td className="align-left">
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={(event) => props.handleRemove(todo)}
          ></IconButton>

          <IconButton
            style="success"
            icon="check"
            onClick={(event) => props.handleFinish(todo)}
          ></IconButton>

          <IconButton
            style="warning"
            icon="undo"
            onClick={(event) => props.handlePending(todo)}
          ></IconButton>
        </td>
        <td> {todo.done === true? 'finalizado':'aberto'} </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
          <th>status</th>

        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
