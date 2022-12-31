import React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

const Review=({data})=>{
    return(

        
            <Col sm={4}>
                <Card style={{height:200} }>
                    <CardBody>
                        <CardHeader>Review #{data.reviewId}</CardHeader>
                        <div className='text-center text-warning'><h2>{data.rating}.0/5.0</h2></div>
                        <p className='text-muted'>{data.feedback}</p>
                    </CardBody>
                </Card>
            </Col>
        
    );
}

export default Review;