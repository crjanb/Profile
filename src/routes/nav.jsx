import musashi from "../assets/profile.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation(){
    const navigate = useNavigate();
    return(
        <>
        <nav className='w-3/6 mx-auto flex pt-16'>
            <div className="w-20">
            <img src={musashi} className='rounded-md'></img>
            </div>
            <div>
                <h1 className='text-white font-bold px-4 text-4xl pt-2'>Sirjan Bhandari</h1>
                <table className='my-1'>
                    <tr className='text-white'>
                    <th className='border-solid border-r-2 border-emerald-400 ml-4 pl-4 pr-3 hover:underline hover:cursor-pointer'onClick={()=>{navigate('/');}}>Home</th>
                    <th className='border-solid border-r-2 border-emerald-400 px-3 hover:underline hover:cursor-pointer'onClick={()=>{navigate('/project');}}>Projects</th>
                    <th className='pl-3 hover:underline hover:cursor-pointer' onClick={()=>{navigate('/experience')}}>Experience</th>
                    </tr>
                </table>
            </div>
        </nav>
        </>
    )
}

const MemorizedNavBar = React.memo(Navigation);
export default MemorizedNavBar;