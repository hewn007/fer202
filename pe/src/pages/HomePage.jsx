
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses, addExpense, updateExpense, deleteExpense } from "../features/expenses/expensesSlice";
import { Modal, Button } from "react-bootstrap";

export default function HomePage(){
 const user = JSON.parse(localStorage.getItem('user'));
 const dispatch = useDispatch();
 const { list } = useSelector(s=>s.expenses);

 const [name,setName]=useState('');
 const [amount,setAmount]=useState('');
 const [cat,setCat]=useState('');
 const [date,setDate]=useState('');

 const [search,setSearch]=useState('');

 const [editItem,setEditItem]=useState(null);
 const [show,setShow]=useState(false);

 useEffect(()=>{ dispatch(fetchExpenses()); },[]);

 const addNew=()=>{
   if(!name||!amount||amount<=0||!cat||!date) return;
   dispatch(addExpense({name,amount:Number(amount),category:cat,date,userId:user.id}));
   setName('');setAmount('');setCat('');setDate('');
 }

 const openEdit=(item)=>{ setEditItem(item); setShow(true); }

 const saveEdit=()=>{ dispatch(updateExpense(editItem)); setShow(false); }

 const remove=(id)=> dispatch(deleteExpense(id));

 const filtered = list.filter(x=>x.userId===user.id && x.category.toLowerCase().includes(search.toLowerCase()));
 const total = filtered.reduce((s,x)=>s+Number(x.amount),0);

 return(
  <div className="container mt-3">

    <div className="header-bar">
      <h4 className="m-0">Signed in as {user.fullName}</h4>
      <button className="btn btn-outline-danger btn-sm" onClick={()=>{localStorage.clear(); window.location='/login';}}>Logout</button>
    </div>

    <div className="row">

      <div className="col-4">
        <div className="card p-3 mb-3">
          <h5>Total Expenses</h5>
          <div className="fs-4 fw-bold text-success">{total.toLocaleString('vi-VN')} ₫</div>
        </div>

        <div className="card p-3 mb-3">
          <h5>Filter</h5>
          <input className="form-control" placeholder="Category..." value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>

        <div className="card p-3">
          <h5>Add Expense</h5>
          <input className="form-control mb-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
          <input className="form-control mb-2" placeholder="Amount" type="number" value={amount} onChange={e=>setAmount(e.target.value)}/>
          <input className="form-control mb-2" placeholder="Category" value={cat} onChange={e=>setCat(e.target.value)}/>
          <input className="form-control mb-2" type="date" value={date} onChange={e=>setDate(e.target.value)}/>
          <button className="btn btn-success" onClick={addNew}>Add</button>
        </div>
      </div>

      <div className="col-8">
        <div className="card p-3">
          <h5 className="mb-3">Expense Management</h5>

          <table className="table table-bordered table-custom">
            <thead>
              <tr>
                <th>Name</th><th>Amount</th><th>Category</th><th>Date</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(e=>(
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.amount.toLocaleString('vi-VN')}</td>
                  <td>{e.category}</td>
                  <td>{e.date}</td>
                  <td>
                    <button className='btn btn-warning btn-sm me-2' onClick={()=>openEdit(e)}>Edit</button>
                    <button className='btn btn-danger btn-sm' onClick={()=>remove(e.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

    </div>

    <div className="footer">© Personal Budget App 2025</div>

    <Modal show={show} onHide={()=>setShow(false)}>
      <Modal.Header closeButton><Modal.Title>Edit Expense</Modal.Title></Modal.Header>
      <Modal.Body>
        {editItem && <>
          <input className="form-control mb-2" value={editItem.name} onChange={e=>setEditItem({...editItem,name:e.target.value})}/>
          <input className="form-control mb-2" type="number" value={editItem.amount} onChange={e=>setEditItem({...editItem,amount:Number(e.target.value)})}/>
          <input className="form-control mb-2" value={editItem.category} onChange={e=>setEditItem({...editItem,category:e.target.value})}/>
          <input className="form-control mb-2" type="date" value={editItem.date} onChange={e=>setEditItem({...editItem,date:e.target.value})}/>
        </>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
        <Button variant="primary" onClick={saveEdit}>Save</Button>
      </Modal.Footer>
    </Modal>

  </div>
 );
}
