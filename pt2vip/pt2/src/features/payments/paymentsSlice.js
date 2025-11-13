import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createPayment = createAsyncThunk(
  "payments/createPayment",
  async (paymentData, { rejectWithValue }) => {
    try {
      // ❗ FETCH PHẢI NHẬN 2 THAM SỐ TRONG CÙNG 1 CẶP NGOẶC
      const res = await fetch("http://localhost:3001/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      if (res.status === 402) {
        return rejectWithValue("Tài khoản không đủ tiền");
      }

      if (!res.ok) throw new Error("Lỗi tạo thanh toán");

      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list.push(action.payload);
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default paymentsSlice.reducer;
