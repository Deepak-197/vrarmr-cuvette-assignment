import React, { useEffect, useState } from 'react';
import "./Loading.css"
import loading from "../../assets/loadingsteam.mp4"
import { useNavigate } from 'react-router-dom';

export const Loading = () => {
    const [firstCircle, setFirstCircle] =  useState(1)
    const [secondCircle, setSecondCircle] = useState(1)
    const [thirdCircle, setThirdCircle] = useState(1)
     
    const navigate = useNavigate()

    const [firstCircleVisible, setFirstCircleVisible] = useState("hidden")
    const [secondCircleVisible, setSecondCircleVisible] = useState("hidden")
    const [thirdCircleVisible, setThirdCircleVisible] =  useState("hidden")
    
    const [textVisiblity, setTextVisiblity] = useState("hidden")
    const [times, setTimes] = useState("3 SECONDS")
    const [text, setText]= useState("INHALE")


    useEffect(() => {
       
        setTimeout(() =>{

            setFirstCircle(1.1)
            setFirstCircleVisible("visible")
            setTextVisiblity("visible")

        }, 1000)

        setTimeout(() =>{

            setSecondCircle(1.1)
            setSecondCircleVisible("visible")
            
        }, 2000)

        setTimeout(() =>{

            setThirdCircle(1.1)
            setThirdCircleVisible("visible")
            
        }, 3000)

        // compress // 

        setTimeout(() => {

            setFirstCircle(1)

        }, 7500)

        setTimeout(() => {

            setFirstCircleVisible("hidden");
            setTextVisiblity("hidden")

        }, 7900)

        setTimeout(() => {

            setSecondCircle(1)

        }, 6500)

        setTimeout(() => {

            setSecondCircleVisible("hidden");

        }, 6800)

        setTimeout(() => {

            setThirdCircle(1)
            setFirstCircleVisible("hidden");

        }, 5500)

    }, [])


    useEffect(() => {
        let id = setTimeout(() => {
            setText("HOLD")
            setTimes("2 SECONDS")

            setTimeout(() => {
                setText("EXHALE")
                setTimes("3 SECONDS")
            }, 3000)
        }, 3000)

        setTimeout(() => {
            navigate("/stepper")
        }, 9000)

        return () => clearTimeout(id);

    }, [])

    return (
        <div>
            <div id='background-video'>
                <video autoPlay loop muted >
                    <source src={loading} type="video/mp4" />
                
                </video>
            </div>

            {/* first circle */}
            <div className='inhale-parent'>
                <div class="compress-circle" id='circle-first'
                  style={{
                        transform: `scale(${firstCircle})`, visibility: firstCircleVisible
                  }}
                >
                    
                </div>
            </div>
            {/* second Circle */}
            <div className='inhale-parent'>
                <div class="compress-circle" id='circle-second'
                  style={{
                        transform: `scale(${secondCircle})`, visibility: secondCircleVisible
                  }}
                >
                    
                </div>
            </div>

            {/* third Circle */}

            <div className='inhale-parent'>
                <div class="compress-circle" id='circle-third'
                  style={{
                        transform: `scale(${thirdCircle})`, visibility: thirdCircleVisible
                  }}
                >
                    
                </div>
            </div>


         <div className='circle-text'>
            <div className='timed-text'>
                <h4 style={{visibility: textVisiblity}}>{text}</h4>
                <p style={{visibility: textVisiblity}}>{times}</p>
            </div>
         </div>
        </div>
    )
}
