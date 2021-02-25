import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data =>{
    console.log(data)
 
  } ;
  
  return (
    <div className="">
          
        <form  className="flex flex-col content-center justify-center items-center space-y-2 rounded-xl p-1" onSubmit={handleSubmit(onSubmit)}>
         <label className="text-left  w-3/6" htmlFor="email">Enter email:</label>
            <input    className="rounded-sm p-1 w-3/6" 
                type="email" 
                placeholder="Email" 
                name="email" 
                id="email" 
                ref={register(
                    {required: true, pattern: /^\S+@\S+$/i}
                    )}  
            />
    
          <input className="p-2 rounded-xl" type="submit" />
          <span>
                {errors?.email?.message}
          </span>
        </form>
    </div>
  );
}