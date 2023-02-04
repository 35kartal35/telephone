import React, {useState} from "react";
import api from "../api/api";
import urls from "../api/urls";
import { useSelector,useDispatch } from "react-redux";
import actionTypes from "../redux/action/actionTypes";


const ListTelephone=()=>{
  const dispatch = useDispatch
  const {telephonesState, groupsState} = useSelector((state)=>state)
  
    return(
        <div>
           <table className="container my-5">
  <thead>
    <tr>
      <th scope="col">REHBER</th>
      <th scope="col">İSİM</th>
      <th scope="col">TELEFON NO</th>
      <th scope="col">GRUP</th>
      <th scope="col">İŞLEMLER</th>
    </tr>
  </thead>
  <tbody>
    {telephonesState.telephones.map((telephone, index)=>{
      const myTelephone = groupsState.groups.find(
        (item) => item.id === telephone.groupId
      );
      return (
      <tr key={telephone.id}>
      <th scope="row">{index+1}</th>
      <td>{telephone.name}</td>
      <td>{telephone.Telnumber}</td>
      <td>{myTelephone.name}</td>
      <td>
        <button className="generalbtn deletebtn" 
        >
          SİL
          </button>
        <button className="generalBtn editBtn">GÜNCELLE</button>
        
        </td>
    </tr>
      );
    })}
    
  </tbody>
</table>
        </div>
    )
}

export default ListTelephone;