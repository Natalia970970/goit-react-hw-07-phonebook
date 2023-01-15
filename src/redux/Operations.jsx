import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63c28ccbb0c286fbe5ef51ed.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
        const contacts = await axios.get('/contacts');
        return contacts.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
        const response = await axios.post('/contacts', {
            name: contact.name,
            number: contact.number,
        });
        return response.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);