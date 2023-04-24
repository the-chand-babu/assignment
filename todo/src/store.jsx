import { configureStore, createSlice } from "@reduxjs/toolkit";
import { arr } from "./component/Todo";

const userSlice = createSlice({
  name: "userdata",
  initialState:[],
  reducers: {
    addTodo: (state, action) => {
      const data = state;
      data.push(action.payload);
      return data;
      
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;

      const data = state.filter((item) => {
        if (item.id != id) {
          console.log(item.id);
          return item;
        }
      });
      return data;
    },
    isComplete: (state, action) => {
        console.log(action.payload.id)
        const updateuser= state.find(user=>user.id==action.payload.id);
        updateuser.compelete=true
    },
  },
});

const counterSlice=createSlice({
        name:"counter",
        initialState:0,
        reducers:{
            inCrement:(state,action)=>{

            },
            decrement:(state,action)=>{

            },
            reset:(state,action)=>{

            }
        }
})

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    counters:counterSlice.reducers,
  },
});

export { store, userSlice };
