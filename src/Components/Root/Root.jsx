import { Outlet } from "react-router-dom";
import Headers from "../Headers/Headers";

const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;