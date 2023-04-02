import useInput from "../hooks/use-input";

const BasicForm = () => {
  const {value: formData ,
     valueChangeHandler : formChangeHandler, 
    valueTouchedChangeHandler: formTouchedChangeHandler,
    isInValid,
    reset} = useInput({
      fname: (text)=> text.trim() === "",
      lname: (text) => text.trim() === "",
      email: (email) => !email.includes('@')
    });

    const formSubmitHandler = (event) => {
      event.preventDefault();
      console.log(formData)
      reset()
    }

  return<form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' 
          id='name' 
          name = "fname" 
          onChange={formChangeHandler} 
          onBlur = {formTouchedChangeHandler}
          value = {formData?.fname ? formData.fname : ""}
          />
          {isInValid?.fname && <p className= "error-text">First name can't be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' 
          id='name' 
          name= "lname" 
          onChange={formChangeHandler}  
          onBlur = {formTouchedChangeHandler}
          value = {formData?.lname ? formData?.lname : ""}
          />
           {isInValid?.lname && <p className= "error-text">Last name can't be empty</p>}
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text'
         id='name' 
         name= "email"
        onChange={formChangeHandler} 
        onBlur = {formTouchedChangeHandler}
        value = {formData?.email ? formData.email : ""}
        />
         {isInValid?.email && <p className= "error-text">Email should have @ included</p>}
      </div>
      <div className='form-actions'>
        <button type="submit">Submit</button>
      </div>
      </div>
    </form>

};

export default BasicForm;
