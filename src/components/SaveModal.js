const SaveModal = (props) => {
    return (
      <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
        <button className="btn">Confirm onClick={props.onCancel}</button>
      </div>
    );
  };
  
  export default SaveModal;
  