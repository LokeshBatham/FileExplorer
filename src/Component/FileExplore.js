import React, { useState, useEffect } from 'react';
import { FaFolder } from "react-icons/fa";
import TreeView from './TreeView/Treeview';
import toggleNode from './toggleNote';
import { useNavigate } from "react-router-dom";
import QuickAccess from './TreeView/QuickAccess';
import { useSelector } from "react-redux";


const FileExplore = () => {
    let navigate = useNavigate();
    let Data = useSelector((state) => { return state; })

    useEffect(() => {
        console.log(Data)
    },[])

    



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
                    {/* {Data.map((data, index) => {
                        return <> <div onClick={(e) => openFolder("lokesh")}>
                            <FaFolder style={{ width: "70px", height: "90px" }} />
                            <div>
                                <h6>lokesh</h6>
                            </div>
                            </div> 
                            </>
                        
                })} */}

                <div onClick={(e) => openFolder("folder")}>
                            <FaFolder style={{ width: "70px", height: "90px" }} />
                            <div>
                                <h6>folder</h6>
                            </div>
                            </div>

                        
                </div>
            </div>
        </div>
    )
}

export default FileExplore
