import React from 'react';  
import { useForm } from 'react-hook-form';  
import { zodResolver } from '@hookform/resolvers/zod';  
import { z } from 'zod';  
  
// Define the Zod schema  
const schema = z.object({  
  email: z.string().email('Please enter a valid email address'),  
  password: z.string().min(8, 'Password must be at least 8 characters long'),  
});  
  
const App = () => {  
  const {  
    register,  
    handleSubmit,  
    setError,  
    formState: { errors, isSubmitting },  
  } = useForm({  
    defaultValues: {  
      email: 'test@email.com',  
    },  
    resolver: zodResolver(schema),  
  });  
  
  const onSubmit = async (data) => {  
    try {  
      // Simulate API call with potential error  
      await new Promise((resolve, reject) => {  
        setTimeout(() => {  
          // Simulate server-side validation error  
          if (data.email === 'taken@email.com') {  
            reject(new Error('Email already taken'));  
          } else {  
            resolve();  
          }  
        }, 1000);  
      });  
        
      console.log('Form submitted successfully:', data);  
      // Handle successful submission here  
        
    } catch (error) {  
      setError('root', {  
        message: 'This email is already taken',  
      });  
    }  
  };  
  
  return (  
    <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>  
      <input {...register('email')} type="email" placeholder="Email" />  
      {errors.email && (  
        <div className="text-red-500">{errors.email.message}</div>  
      )}  
        
      <input  
        {...register('password')}  
        type="password"  
        placeholder="Password"  
      />  
      {errors.password && (  
        <div className="text-red-500">{errors.password.message}</div>  
      )}  
        
      <button disabled={isSubmitting} type="submit">  
        {isSubmitting ? 'Loading...' : 'Submit'}  
      </button>  
        
      {errors.root && (  
        <div className="text-red-500">{errors.root.message}</div>  
      )}  
    </form>  
  );  
};  
  
export default App;