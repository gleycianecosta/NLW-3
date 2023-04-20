import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { MapContainer, TileLayer } from "react-leaflet"

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanage-map.css'
import mapMarkerImg from '../images/mapMarker.svg'

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão
esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Rio de Janeiro</strong>
                </footer>
            </aside>
            <MapContainer 
             center={[-22.9631596,-43.357064]}
             zoom={15}
             style={{width: '100%', height:'100%'}}>
           
           <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

           </MapContainer>

            <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}
export default OrphanagesMap;