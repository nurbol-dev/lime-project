import React, { useState } from 'react';
import correct from "../../../../assets/img/correct.svg"
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { authChange } from '../../../../store/reducers/AuthSlice';

const SignUp = () => {
    const dispatch = useAppDispatch()
    const {back} = useAppSelector(s => s.AuthSlice)
    const backReturn = () => {
        dispatch(authChange(true))
      }
    return (
        <div style={{
            display: back ? "none" : "block",
          }}>
            <form>
            <div className="success">
            <h1 onClick={backReturn}>&times;</h1>
                <img src={correct} alt="" />
                <h2>Your Sign up was successful!</h2>
                <button onClick={() => {
                    backReturn()
                }}>OK</button>
            </div>
            <div onClick={backReturn} className="bg-modal"></div>
        </form>
        </div>
    );
};

export default SignUp;