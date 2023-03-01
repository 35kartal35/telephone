import React, {useState } from "react";
import Header from "../component/Header";
import api from "../api/api";
import urls from "../api/urls";
import { useDispatch } from "react-redux";

import actionTypes from "../redux/action/actionTypes";

const AddBook = () => {
    
    
    const dispatch =useDispatch()
    const [form,setForm]=useState({
        id:String(new Date().getTime()),
        name:"",
        Telnumber:"",
        groupId:"",

    })

        const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(form);
        /*validation*/
        if(form.name === "" || form.Telnumber === "" ){
            alert("bu alanlar boş bırakılamaz")
        }

        api.post(urls.telephones,form)
        .then((res)=>{
            dispatch({type:actionTypes.telephoneaction.ADD_TELEPHONES,
                payload:form,
                
            });
                        window.location.reload()

            } 
        )
        .catch((err)=>{});
    };
    return (
        <div>
            <Header />
           <form className="container my-5" onSubmit={handleSubmit}> 
            <div class="mb-3">
                <label 
                for="exampleFormControlInput1" 
                class="form-label">
                    İsim girilecek
                    </label>
                <input 
                type="text" 
                class="form-control" 
                id="name" 
                placeholder="İsim girilecek"
                value={form.name}
                onChange={(event)=>
                setForm({...form,name:event.target.value})}
                
                />
            </div>
            <div class="mb-3">
                <label 
                for="exampleFormControlInput1" 
                class="form-label">
                    Telefon Numarası</label>
                <input 
                type="number" 
                class="form-control" 
                id="telnumber" 
                placeholder="555 5555555"
                value={form.Telnumber}
                onChange={(event)=>
                    setForm({...form,Telnumber:event.target.value})
                }/>
            </div>
            <div class="mb-3">
                <label 
                for="exampleFormControlInput1" 
                class="form-label">
                    Telefon Numarası</label>
                <input 
                type="number" 
                class="form-control" 
                id="telnumber" 
                placeholder="grup adı"
                value={form.groupId}
                onChange={(event)=>
                    setForm({...form,groupId:event.target.value})
                }/>
            </div>
           <div className="d-flex justify-content-center my-5">
            <button className="btn btn-primary" type="submit">
                Kaydet
            </button>
           </div>
            </form>
        </div>
    )
};

export default AddBook;