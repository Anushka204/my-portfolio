import { Col } from "react-bootstrap";
import React from "react";
import '../App.css';

export const ProjectCard=({title,description,imgUrl})=>{
    return(
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx" style={{ border: '2px solid transparent', backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}