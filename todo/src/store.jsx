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
          return item;
        }
      });
      return data;
    },
    isComplete: (state, action) => {
        // console.log(action.payload.id)
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
                return state=state+1;
            },
            decrement:(state,action)=>{
                return state=state-1;
            },
            reset:(state,action)=>{
              return state=0
            }
        }
})

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    count:counterSlice.reducer
  },
});

export { store, userSlice,counterSlice };
