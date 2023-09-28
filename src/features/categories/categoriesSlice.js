import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import BASE_URL from "../../Utils/constants"

export const getCategories = createAsyncThunk("categories/")

const categoriesSlice = createSlice ({
  name: "categories",
  initialState: {
    list [],
  },
  
});