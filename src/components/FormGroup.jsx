const FormGroup = (props) => {
  return (
    <div className="form">
      <label htmlFor={props.id}>{props.labelText}</label>
      <input type={props.type} placeholder={props.placeholder} id={props.id} />
    </div>
  );
};

export default FormGroup;
