/* eslint-disable no-unused-vars */
import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isSubmitting },
  } = useForm()


  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve();
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data), headers: {"Content-Type": "application/json"}})
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== "Raunak"){
    //   setError("myForm", { type: "custom", message: "Username is not Raunak" })
    // }
  }

  return (
    <>
    {isSubmitting && <div className='overlay'>Submitting form...</div>}
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* This is one way to do if pre-defined error message needs to be displayed */}
        {/* <input placeholder='username' {...register('username', { required: true, minLength: 10, maxLength: 20 })} type="text"/>
        <br />
        {errors.username && <span className='red'>This field is required and must be between 10 and 20 characters</span>}
        <br />         */}
        <input placeholder='username' {...register('username', { required: { value: true, message: "This field is required" }, minLength: { value: 10, message: "Minimum length is 10" }, maxLength: { value: 20, message: "Maximum length is 20" } })} type="text"/>
        <br />
        {errors.username && <span className='red'>{errors.username.message}</span>}
        <br />
        <input placeholder='password' {...register('password', { required: { value: true, message: "This field is required" }, minLength: { value: 8, message: "Minimum length is 8" }, maxLength: { value: 20, message: "Maximum length is 12" } })} type="password"/>
        <br />
        {errors.password && <span className='red'>{errors.password.message}</span>}
        <br />
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myForm && <span className='red'>{errors.myForm.message}</span>}
      </form>
    </div>
    </>
  )
}

export default App
