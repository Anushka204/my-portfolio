import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibilty from 'react-on-screen';

import { useState, useEffect } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";


export const Banner=()=>{
    const toRotate=["Web Developer","Web Designer","UI/UX Designer"];
   const[loopNum,setloopNum]=useState(0);
   const [isDeleting,setIsDeleting]=useState(false);
   const[text,setText] = useState('');
   const[delta,setdelta]=useState(3000 -Math.random()*100);
   const period=2000;
   useEffect(()=>{
    let ticker= setInterval(()=>
    {
        tick();
    },delta)
    return()=>{clearInterval(ticker)};
   },[text])
   const tick=()=>{
    let i=loopNum %toRotate.length;
    let fullText=toRotate[i];
    let updatedText=isDeleting? fullText.substring(0,text.length -1): fullText.substring(0,text.length+1);
   setText(updatedText);
if(isDeleting){
    setdelta(prevDelta=>prevDelta/2)

}
if(!isDeleting  && updatedText ===fullText){

    setIsDeleting(true);
    setdelta(period);
    }else if(isDeleting && updatedText ===''){
        setIsDeleting(false);
        setloopNum(loopNum+1);
        setdelta(500); 
}}
    return(
        <section className="banner" id="home">
<Container>
    <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
        <TrackVisibilty>
        {({isVisible})=>
        <div className={isVisible ? "animate__animated animate __fadeIn" : ""}>

        <span className="tagline">Welcome to my portfolio</span>
   <h1>{'Hi, I am Anushka  '}<span className="wrap">{text}</span></h1>
   <p>I'm a passionate full stack developer with a strong focus on building dynamic, responsive, and user-friendly web applications. I enjoy creating solutions that not only solve real-world problems but also offer a great user experience.</p>
   <button onClick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
   
   </div>}
   </TrackVisibilty>
   
   </Col>
   <Col xs={12} md={6} xl={5}
   >
    <img src={headerImg} alt="Header Img"/>
   </Col>
    </Row>
    
</Container>

        </section>
    )
}