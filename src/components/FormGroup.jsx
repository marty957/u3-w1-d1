const FormGroup = (props) => {
  return (
    <div>
      <div className="form">
        <label htmlFor={props.id}>{props.labelText}</label>
        <input style={props.style} type={props.type} placeholder={props.placeholder} id={props.id} />
      </div>
    </div>
  );
};

export default FormGroup;
