import {createStore} from "redux";


const INITIAL_VALUE = {
    counter:0,
    privacy:false
}
const counterProvider = (store = INITIAL_VALUE, action) =>{
  if(action.type === 'INCREMENT')
  {
      return {counter : store.counter + 1}
  }else if(action.type === 'DECREMENT')
  {
    return {counter : store.counter - 1}
  }
  else if(action.type === 'add')
    {
      return {counter : store.counter + Number(action.payload.num)}
    }
 else if(action.type === 'sub')
    {
        return {counter : store.counter - Number(action.payload.num)}
    }
    else if(action.type === 'privacy')
        {
            return {privacy: !store.privacy}
        }

    return store;
}


const counterStore = createStore(counterProvider)


export default counterStore;