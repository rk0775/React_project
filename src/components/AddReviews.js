import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row ,Col, Card } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootApis";
import { toast } from "react-toastify";
const AddReviwe=()=>{
    useEffect(()=>{
        document.title="Add Reviews";
    },[]);

    const [review , setReview] = useState({});
    //handel form function here
    const handleForm=(e)=>{
        console.log(review);
        addReviews(review);
        e.preventDefault();
    }

    //post data to server
    const addReviews=(data)=>{
        axios.post(`${base_url}/addReviews/${review.product_ref_id}`,data).then(
            (response)=>{
                toast.success("Reviews are successfully store.");
            },
            (error)=>{
                toast.error("Something went wrong!");
            }
        )
    }

    return(
        <Fragment>
            <Row> 
             <Col md={3}></Col>   
            <Col md={6}>  
            <Card className="p-3 my-3">          
            <h1 className="text-muted text-center my-3">Add the product reviews</h1>
            
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label>Product Id</Label>
                    <Input type='text' name='product_ref_id' placeholder="Enter product id"
                    onChange={(e)=>{
                        setReview({...review,product_ref_id:e.target.value})
                    }}  
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Enter Rating</Label>
                    <Input type='text' name='rating' placeholder="Rate the product"
                    onChange={(e)=>{
                        setReview({...review,rating:e.target.value})
                    }}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Enter Feedback</Label>
                    <Input style={{hight:150}} type='textarea' name='feedback' placeholder="Enter the feedback"
                    onChange={(e)=>{
                        setReview({...review,feedback:e.target.value})
                    }}  
                    ></Input>
                </FormGroup>
                <div className="text-right" >
                    <Button className="mx-2" type="refresh" color='warning'>Reset</Button>
                    <Button className="mx-2" type="submit" color='success'>Add Review</Button>
                </div>
            </Form>
            </Card>

            </Col>
            </Row>
        </Fragment>
    );
}

export default AddReviwe;