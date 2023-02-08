const SelectField = (props) => {
    const { label, handleChange, name } = props;
    return (
      <div className="mb-5">
        <label className="text-gray-500 text-sm" htmlFor={name}>{label}</label>
        <select onChange={handleChange} defaultValue="cantidad" name={name} className="w-full border-b-2 py-2 outline-none">
          <option value="cantidad" disabled></option>
          <option value="3" className="py-1">3</option>
          <option value="5" className="py-1">5</option>
          <option value="mas de 5" className="py-1">mas de 5</option>
        </select>
      </div>
    )
  }
  
  export default SelectField