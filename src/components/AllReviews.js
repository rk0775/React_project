import React, { useState,useEffect } from 'react'
import base_url from '../api/bootApis';
import Review from './Reviwes'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Row } from 'reactstrap';
const AllReviews=()=>{

    useEffect(()=>{
        document.title="All Reviews";
    }, [] );

    const [reviews,setReviews]=useState([

    ])

    //function to call api
    const getAllReviews=()=>{
        axios.get(`${base_url}/getReviews/PRD_RF_ID_1972737213`).then(
            (response)=>{
                setReviews(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong...");
            }
        )
    }

    useEffect(()=>{
        getAllReviews();
    },[])

    return(
        <Row className='text-center'>
            <h3 className='text-muted my-3'>All Reviews</h3>
            {
                reviews.length>0 ? reviews.map((r)=><Review key={r.id} data={r} />) : <h3 className='text-info my-5'>No Reviews are available</h3>
            }
        </Row>
    );
}

export default AllReviews;