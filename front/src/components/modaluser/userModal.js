import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";


export default function Usermodal(props) {

    return (
        <div className='modal' style={{
            display: props.display ? 'flex' : 'none'
            }} >
            <div className='modalContain' >
            <FontAwesomeIcon icon={faXmark} className='quit' onClick={props.hide} /> 
            <section className='userProfile'>
                <img src="/img/profil.svg" alt="profil" className="mprofil" />
                <span className='userName'>XXX@xxx.com</span>
            </section>
            <section className='sectionContainer'>
                <div className='notif'>
                    <span>Notif</span>
                </div>
                <div className='livraison'>
                    <span>Livraison</span>
                </div>
            </section>
            </div>
            
        </div>
    )
}
