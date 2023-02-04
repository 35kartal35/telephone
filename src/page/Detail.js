import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { Link,useParams } from "react-router-dom";
import api from "../api/api";
import urls from "../api/urls";

const Detail =()=>{
    const params=useParams();
    const [myMobil,setMyMobil] = useState(null);
    const [mobilCategory,setMobilCategory] = useState(null);

    /*telefonları Axios ile çekeceğiz http://localhost:3004/telephones/1*/

    useEffect(()=>{
        api.get(`${urls.telephones}/${params.telephoneId}`)
        .then((restelephone)=>{
            console.log(restelephone.data);
            setMyMobil(restelephone.data);
            api.get(`${urls.groups}/${restelephone.data.groupId}`)
            .then((resGroup)=>{
                console.log(resGroup.data);
                setMobilCategory(resGroup.data);
            })
            .catch((err)=> {});
        })
        .catch((err)=>{});
    },[]);

    if (myMobil === null || mobilCategory === null) return null;

    return(
        <div>
            <Header/>
            <div className="container my-5">
                <h2>Adı : {myMobil.name}</h2>
                <h2>Telefon Numarası : {myMobil.Telnumber}</h2>
                <h2>Grup : {mobilCategory.name}</h2>
                <Link to={"/"}>Geri</Link>

            </div>

        </div>
    )
}

export default Detail