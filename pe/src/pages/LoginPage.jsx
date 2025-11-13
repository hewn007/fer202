import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(){
 const [u,setU]=useState('');
 const [p,setP]=useState('');
 const [err,setErr]=useState('');
 const nav=useNavigate();

 const login=async(e)=>{
  e.preventDefault();
  if(!u||!p) return setErr('Username and password are required');
  if(p.length<6) return setErr('Password must be >= 6 chars');

  const r=await axios.get(`http://localhost:3001/users?username=${u}&password=${p}`);
  if(r.data.length===1){
    localStorage.setItem('user',JSON.stringify(r.data[0]));
    nav('/home');
  } else setErr('Invalid credentials');
 }

 return(
  <div className="container mt-5" style={{maxWidth:'420px'}}>
    <div className='card p-4 shadow-sm'>
      <h3 className='mb-3 text-center'>Personal Budget</h3>
      {err && <div className="alert alert-danger">{err}</div>}
      <form onSubmit={login}>
        <label className="fw-bold">Username</label>
        <input className="form-control mb-3" onChange={e=>setU(e.target.value)}/>
        <label className="fw-bold">Password</label>
        <input type="password" className="form-control mb-2" onChange={e=>setP(e.target.value)}/>
        <button className="btn btn-primary w-100 mt-3">Login</button>
      </form>
    </div>
  </div>
 );
}