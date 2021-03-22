const ListButton = props => {// <---- irg komponentas
    const action = props.action;
    return (
      <button onClick={() => props.sort(action) } className="myButton">
          {props.name}
      </button>
    );
  }

  export default ListButton;