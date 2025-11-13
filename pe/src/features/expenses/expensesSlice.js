
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3001/expenses";

export const fetchExpenses = createAsyncThunk("exp/fetch", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addExpense = createAsyncThunk("exp/add", async (data) => {
  const res = await axios.post(API, data);
  return res.data;
});

export const updateExpense = createAsyncThunk("exp/update", async (data) => {
  const res = await axios.put(`${API}/${data.id}`, data);
  return res.data;
});

export const deleteExpense = createAsyncThunk("exp/delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

const slice = createSlice({
  name: "expenses",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchExpenses.fulfilled,(s,a)=>{s.list=a.payload})
     .addCase(addExpense.fulfilled,(s,a)=>{s.list.push(a.payload)})
     .addCase(updateExpense.fulfilled,(s,a)=>{
        const i=s.list.findIndex(x=>x.id===a.payload.id);
        if(i>-1) s.list[i]=a.payload;
     })
     .addCase(deleteExpense.fulfilled,(s,a)=>{
        s.list=s.list.filter(x=>x.id!==a.payload);
     });
  }
});

export default slice.reducer;
