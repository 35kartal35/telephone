import React, {useState} from "react";
import api from "../api/api";
import urls from "../api/urls";
import { useSelector,useDispatch } from "react-redux";
import actionTypes from "../redux/action/actionTypes";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";


const ListTelephone=()=>{
  const dispatch = useDispatch();
  const {telephonesState, groupsState} = useSelector((state)=>state)
  const [deleteTelephone,setDeleteTelephone] = useState("")
  const [showDeleteModal,setShowDeleteModal] = useState(false);

  const deleteMobil =(id)=>{
    dispatch({type:actionTypes.telephoneaction.DELETE_TELEPHONES_START});
    api.delete(`${urls.telephones}/${id}`)
    .then((res)=>{
      dispatch({
        type:actionTypes.telephoneaction.DELETE_TELEPHONES_SUCCESS,
        payload:id,
      })
    })
    .catch((err)=>{
      dispatch({
        type:actionTypes.telephoneaction.DELETE_TELEPHONES_FAİL,
        payload:"Kitap silinirken bir hata oldu"
      });
    });
  };


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
        <button onClick={()=>{
          setDeleteTelephone(telephone.id)
          setShowDeleteModal(false);
        }}
         className="generalbtn deletebtn" 
        >
          SİL
          </button>
        <button className="generalBtn editBtn">GÜNCELLE</button>
        <Link to={`/detail/${telephone.id}`} className="generalBtn">Detay</Link>
        
        </td>
    </tr>
      );
    })}
    
  </tbody>
</table>
{showDeleteModal === true && (
  <CustomModal
    title="Silme"
    mesage="silmek istediğinizden emin misiniz?"
    onCansel={()=>setShowDeleteModal(false)}
    onConfirm={()=>{
      deleteMobil(deleteTelephone)
      setShowDeleteModal(false)
    }}
    />
)}
        </div>
    );
};

export default ListTelephone;