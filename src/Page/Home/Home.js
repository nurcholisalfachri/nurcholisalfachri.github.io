import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from "axios";
import './Home.css';


const Home = () => {
    const [datas, setDatas] = useState([])
    const [userSelect, setUserSelect] = useState("")
    const [isShow, setIsShow] = useState(false)

    const navigate = useNavigate();

    
    const getPostAPI = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc')
        .then((result) => {
            const results = result.data.map((result) => {
                return {
                    label: result.title,
                    value: result.body,
                    id: result.id
                }
            })
            setDatas(results)
        })
    }
  
  
    const handleChange = ({label, value, id}) => {
        setUserSelect({label, value, id})
    }
    

    const handleSubmit = () => {
        setIsShow(state => !state)
    }

    useEffect(() => {
        getPostAPI()
    }, [])
    

    return (
        <div className="App">
            {
                !userSelect ? <button className='btn disable' disabled={!userSelect} onClick={handleSubmit}>{isShow ? "Show All Contents" : "Show Selected Content"}</button> : <button className='btn' onClick={handleSubmit}>{isShow ? "Show All Contents" : "Show Selected Content"}</button>
            }
        <Select className='select' placeholder='Select a title content' options={datas} onChange={(event) => handleChange(event)}></Select>
        {
            isShow ? 
            <div className="container">
                <div className='post'>{isShow ? `Content Number ${userSelect.id}` : ""}</div>
                <p className='label' onClick={() => navigate(`/detail-content/${userSelect.id}`)}><strong>Title : {isShow ? userSelect.label : ""}</strong></p>
                <hr></hr>
                <p className='value'>{isShow ? userSelect.value : ""}</p>
            </div> : 
            <div>
                {
                    datas.map(data => {
                        return(
                            <div className="container">
                                <div className='post' >Content Number {data.id}</div>
                                <p className='label' onClick={() => navigate(`/detail-content/${data.id}`)}><strong>Title : {data.label}</strong></p>
                                <hr></hr>
                                <p className='value'>{data.value}</p>
                            </div>
                        )
                    })
                }
            </div>
        }
    </div>
    );
}

export default Home;
