import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import api from "../api/api";
import urls from "../api/urls";

const Detail =()=>{
    

    const [myMobil,setMyMobil] = useState(null);
   
    

    useEffect(()=>{
        api.get(`${urls.telephones}`)
        .then((restelephone)=> {
            console.log(restelephone.data);
            setMyMobil(restelephone.data);
       
                    })
   
        .catch((err)=>{});
    },[]);

    if (myMobil === null ) return null;

    return(
        <div>
            <Header/>
            <div className="container my-5">
                <h2>Adı : {myMobil.name}</h2>
                <h2>Telefon Numarası : {myMobil.Telnumber}</h2>
                
                <Link to={"/"}>Geri</Link>

            </div>

        </div>
    )
}

export default Detail