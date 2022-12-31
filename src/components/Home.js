import React, { useEffect } from 'react'
import {Button, Container } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';


const Home=({name})=>{
    const btnTost=()=>{
        toast("This is message");
    }
    useEffect(()=>{
        document.title="MX-Mart"
    },[]);
    return(
        <div>
            <Container className='text-center my-4'>
                <h1>Hurry up, Limited time sale</h1>
                <p>this is description of the sale this is description of the salethis is description of the salethis is description of the sale</p>
                <Button color='warning' outline >Go to buy..</Button>
            </Container>
        </div>
    )
}

export default Home;