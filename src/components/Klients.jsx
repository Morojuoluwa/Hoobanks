import styles from "../style";
import { clients } from "../constants";


const Klients = () =>(
    <div className={`${styles.flexCenter} w-full my-4 flex-wrap`}>
        {clients.map((client)=>(
            <div
           
            key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
                <img className={`sm:min-w-[192px] my-2 w-[100px] object-contain`} alt="client" src={client.logo}/>
            </div>
        ))}

    </div>
)

export default Klients