import React,{useState} from 'react';

export const Registeration=(props)=>{
    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [email,setEmail]=useState('');
    
    const whenSubmit=(e)=>{
   e.preventDefault();
   alert('registered');
    }
    return(
       <div className='form-container'> 
<form onSubmit={whenSubmit} className='register'>
<h3><span>Register</span></h3>
    <input value={name} type='text' id='name' name='name' placeholder='Full Name...' onChange={(e)=>setName(e.target.value)}/>
    <input value={email} type='email' id='em' name='em' placeholder='email...' onChange={(e)=>setEmail(e.target.value)}/>
    <input value={pass} type='password' id='pass' name='pass' placeholder='new password...' onChange={(e)=>setPass(e.target.value)}/>
    <input value={pass} type='text' id='passC' name="passC" placeholder='confirm password...' onChange={(e)=>setPass(e.target.value)}/>
    
     <button className='lbtn' type='submit'>Sign Up</button>

</form>
 <button className='chbtn' onClick={()=>props.onFormSwitch("loggedIn")}>already have an account,Log In </button>
    </div>
    );
}