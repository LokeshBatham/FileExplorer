import React from 'react';
import QuickAccess from './TreeView/QuickAccess';
import { FaFolder } from "react-icons/fa";
import {useNavigate}  from "react-router-dom";

const OpenFolder = () => {
    let navigate = useNavigate();

    const openFolder = (route) => {
        
        navigate(`/${route}`);
    }

  return (
    <div>
      <div className='row'>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3'>
                    <QuickAccess />
                </div>
                <div className='col-9 col-sm-9 col-md-9 col-lg-9'>
                    <div onClick={(e) => openFolder("folder1")}>
                    <FaFolder style={{width:"70px", height:"90px"}} />
                    <div>
                        <h6>folder1</h6>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default OpenFolder
