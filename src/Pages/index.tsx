// import React from "react";
import { useState } from "react";
import ToDoList from "../ToDoList";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";


const HomePage: React.FC=
 () => {

    const [testState, setTestState ] = useState([
        {
            name:'some name'
        }
    ]);
    let navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/about")
    }

    return (
        <>
            <div>
                <ProtectedRoute/>
                <ToDoList/>
                <nav>
                    <button onClick={handleClick}>About us </button>
                </nav>
            </div>
        </>
    )
}


export default HomePage;