import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./page/HomePages";
import Error from "./page/Error";
import api from "./api/api";
import urls from "./api/urls";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import actionTypes from "./redux/action/actionTypes";
import AddBook from "./page/AddBook";
import Detail from "./page/Detail";


function App() {
  const dispatch=useDispatch()
  const { telephonesState,groupsState }=useSelector(state=>state)

  useEffect(()=>{
    /*fetch telephones*/
    dispatch({type:actionTypes.telephoneaction.GET_TELEPHONES_START})
    api.get(urls.telephones)
    .then((res)=>{
      dispatch({type:actionTypes.telephoneaction.GET_TELEPHONES_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
      dispatch({type:actionTypes.telephoneaction.GET_TELEPHONES_FAİL,payload:"serverda bir hata oldu"})
    })

    /*fetch groups*/
    dispatch({type:actionTypes.groupaction.GET_GROUPS_START})
    api.get(urls.groups)
    .then((res)=>{
      dispatch({type:actionTypes.groupaction.GET_GROUPS_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
      dispatch({type:actionTypes.groupaction.GET_GROUPS_FAİL,payload:"serverda bir hata meydana geldi"})
    });
  },[]);
  if (telephonesState.success === false || groupsState.success === false)
  return null;

    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePages/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/Detail/telephoneId" element={<Detail/>}/>
      <Route path="/add-telephone" element={<AddBook/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
