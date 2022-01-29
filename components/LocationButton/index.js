import { useEffect, useState } from 'react'
import { drawMap, getLocationDetails } from '../apis'
import styles from './index.module.scss'

function LocationButton({onSetLocation,sectionId,getPlaces}){
    const[pos,setPos] = useState(null);
    useEffect(async() => {
        if(pos!=null){
            let locationDetails = await getLocationDetails(pos.lat.toString(), pos.long.toString())
            // drawMap('mapDiv'+sectionId,"inputMapDiv"+sectionId,null,pos.lat.toString(),pos.long.toString())
            console.log(pos)
            onSetLocation(locationDetails)
        }
    }, [pos])
    return (
        <div id={`location-button${sectionId}`} className={[styles.LocationButtonContainer, "flex items-center justify-between cursor-pointer"].join(" ")}>
            <img src="/dashboard/images/icons/location-blue.svg"/>
            {/* {JSON.stringify(locationDetails)} */}
            <p>Set Current Location</p>
        </div>
    )
}
 export default LocationButton