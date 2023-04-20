import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8">
                    <img src="https://firebasestorage.googleapis.com/v0/b/barberiasph.appspot.com/o/barberia.jpeg?alt=media&token=1d56423a-bdab-482b-b611-eaa5c8bd76fb" alt="foto" className="img-fluid w-100" />
                </div>
                <div className="col-12 col-md-4">
                    <Agenda></Agenda>
                </div>
            </div>
        </div>
    )
}