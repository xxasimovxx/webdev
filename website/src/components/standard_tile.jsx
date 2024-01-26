import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Standard_Tile({icon, name, description}){
    return(

        <div className="tile">

            <FontAwesomeIcon icon={icon} size = "6x" />
            <div className="tile-description">

                <h1>{name}</h1>
                <h3>{description}</h3>
        </div>
        </div>
    )        
}