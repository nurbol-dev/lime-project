import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatch, rootState} from "../store";


export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector


export const useAppDispatch = () => useDispatch<appDispatch>()