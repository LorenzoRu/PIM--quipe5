import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faBell, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



export default function Usermodal(props) {

    return (
        <div className='modal' style={{
            display: props.display ? 'flex' : 'none'
            }} >
            <div className='modalContain' id='rootContenaire' >
            <FontAwesomeIcon icon={faXmark} className='quit' onClick={props.hide} /> 
            <section className='userProfile'>
              <Link to="/login"><img src="/img/profil.svg" alt="profil" className="mprofil" /></Link>  
                <span className='userName'>Frédérique</span>
            </section>
            <section className='sectionContainer'>
                <div className='notif'>
                    <FontAwesomeIcon icon={faBell} className='bell' />
                    <span className='Notif'>Notifications</span>
                </div>
                <div className='livraison'>
                    <FontAwesomeIcon icon={faTruck} className='truck' />
                    <span className='Livr'>Livraison</span>
                </div>
            </section>
            </div>
            
        </div>
    )
}
