
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://6555278963cafc694fe77e88.mockapi.io/contacts',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addNewContact = createAsyncThunk(
  'contact/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await API.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
