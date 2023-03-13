import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../redux/reducers/Reducer';

function Reduxdemo() {
    const counter=useSelector((state)=> state.user.counter);
    const dispatch=useDispatch();
    const incrementHandler=()=>{
        dispatch(userActions.increment());
    }
  return (
    <div>
        <p>Redux demo</p>
        <h2>{counter}</h2>
        <button onClick={incrementHandler}>Add</button>
    </div>
  )
}

export default Reduxdemo