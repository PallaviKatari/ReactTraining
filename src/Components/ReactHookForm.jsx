import React from 'react';
//npm install react-hook-form
import { useForm } from 'react-hook-form';
import '../Styles/ReactHookForm.css';

export default function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log(data);
    alert("Successfully Logged In");
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ color: 'blue', marginTop: 100}}>
        <br></br><br></br>
      <input type="text" placeholder="Username" {...register("Username", {required: true, maxLength: 15})} />
      {/* pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"})} */}
      <input type="password" placeholder="Password" {...register("Password", {required: true, maxLength: 15,minLength:5})}/>   
      <input type="submit"/>
    </form>
  );
}