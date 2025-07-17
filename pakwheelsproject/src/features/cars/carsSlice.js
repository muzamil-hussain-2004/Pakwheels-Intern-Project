import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
    cars : [
             { id: nanoid(),
               name: "Corola",
               model: "Xli",
               year:  "2009",
               color: "white",
               image: "corola.jpg"
             },

             {
               id: nanoid(),
               name: "Corola",
               model: "Gli",
               year:  "2018",
               color: "White",
               image: "corola.jpg"
             },

             {
               id: nanoid(),
               name: "Honda",
               model: "Turbo",
               year:  "2020",
               color: "Red",
               image: "honda.jpg"
             }, 

             {
               id: nanoid(),
               name: "Honda",
               model: "City",
               year:  "2018",
               color: "Gray",
               image: "corola.jpg"
             }



           ]
}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers:{

      AddCar: (state,action)=>{
        const newCar ={
            id: nanoid(),
            name:  action.payload.name,
            model: action.payload.model,
            year:  action.payload.year,
            color: action.payload.color,
            image: action.payload.image,
        }
        state.cars.push(newCar)
      }
    }
})

export const {AddCar} = carSlice.actions
export default carSlice.reducer

