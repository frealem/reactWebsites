import React ,{useState} from 'react';
export const Login=(props)=>{
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    
    const whenSubmit=(e)=>{
      e.preventDefault();
      alert('Logged in');  //not to loss our state when reload
    }

    return(<div className='form-container'>
        <form onSubmit={whenSubmit} className='login'>
        <h3><span>Log in</span></h3>
            <input value={email}  onChange={(e)=>setemail(e.target.value)} type="email" id="email" placeholder="email..."/>
            
            <input value={pass}  onChange={(e)=>setpass(e.target.value)} type="pass" id="pass" placeholder="password..."/>
  <button className='lbtn' type="submit">Login</button>
  <button className='chbtn'onClick={()=>props.onFormSwitch('registeration')}>if you don't have sign Up</button>
  
        </form>
        </div>
    );
    
}