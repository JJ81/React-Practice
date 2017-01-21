const renderInput = ({ input, label, type, meta: { touched, invalid, error } }) => (
  <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} className="form-control" />
    <div className="text-help" style={{color: 'red'}}>
      { touched ? error : '' }
    </div>
  </div>
)


export default renderInput;
