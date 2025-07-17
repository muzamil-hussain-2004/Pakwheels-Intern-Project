import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../features/cars/carsSlice'
import searchReducer from '../features/cars/searchSlice';

export const store =configureStore({
    reducer: {
        car: carReducer,
        search: searchReducer
    }

})
