import  Subject_Tile from "./Subject_Tile"
import { faAtom, faBolt, faBoltLightning, faCube, faFaucetDrip, faGuitar, faLightbulb, faMagnet, faMagnifyingGlass, faRoute, faTemperatureQuarter, faTowerCell, faUpDown, faUserAstronaut, faWater } from '@fortawesome/free-solid-svg-icons'

export default function Selection_Fizyka(){
    return(
        <>

            <div className="outer">

                <Subject_Tile link = "/fizyka/kinematyka" icon = {faRoute} name = "Kinematyka" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faUpDown} name = "Dynamika" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faBolt} name = "Praca, Energia" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faCube} name = "Bryła Sztywna" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faGuitar} name = "Ruch Drgajacy" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faWater} name = "Fale Mechaniczne" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faFaucetDrip} name = "Hydrostatyka" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faTemperatureQuarter} name = "Termodynamika" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faUserAstronaut} name = "Grawitacja" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faBoltLightning} name = "Pole Elektryczne" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faLightbulb} name = "Prąd Stały" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faMagnet} name = "Pole Magnetyczne" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faBolt} name = "Indukcja" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faBolt} name = "Prąd Przemienny" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faTowerCell} name = "Fale Elektromagnetyczne" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faMagnifyingGlass} name = "Optyka" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
                <Subject_Tile link = "/fizyka/dynamika" icon = {faAtom} name = "Fizyka Atomowa" description = "Zadania maturalne 2010 - 2023" ></Subject_Tile>
            </div>
        </>
    )
}