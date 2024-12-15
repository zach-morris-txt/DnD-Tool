import { Link, Outlet } from "react-router";
import Navigation from "../components/navigation";


export default function Library() {

    
    return (
        <div className="">
            <Navigation />
            <div>
                <Link to="/library/equipment">Equipment</Link>
                <Link to="/library/magic-items">Magic Items</Link>
                <Link to="/library/monsters">Monsters</Link>
                <Link to="/library/spells">Spells</Link>
            </div>
            <Outlet />
        </div>
    )
}