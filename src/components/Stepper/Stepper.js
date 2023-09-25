import React, { useState } from 'react';
import "./Stepper.css";
import leftbutton from "../../assets/leftarrow.png"
import rightbutton from "../../assets/rightarrow.png"
import img1 from "../../assets/profiles.png"
import img2 from "../../assets/wallpapers.png"
import img3 from "../../assets/steamprofile.png"
import img4 from "../../assets/speakerprofile.png"
import img5 from "../../assets/lightprofile.png"
import img6 from "../../assets/aromaprofile.png"

export const Stepper = () => {
    const [currentId, setCurrentId] = useState(1);

    const hanleNext = () => {

    }
    const hanlePrev = () => {

    }

    return (
        <div className='loading'>
            <div className='stepper'>


                <div className='stepper-step'>
                    <div className='close-button'><button>X</button></div>
                    <div className='description'>
                        <h3>Digital Interface</h3>
                        <div className='paragraph'>
                            <p>Choreograph every element of Your shower experience with built-in Wi-Fi, Bluetooth, and voice-activated technology when paired with Google Home™ or Amazon*Alexa*. Plus, use the DFC@Home™ app to craft up to twelve shower presets with spa options, remotely warm your steam shower and customize the Interface.</p>
                        </div>
                        <div class="step-outer">
                            {
                                currentId === 1 ? "" :
                                    <button onClick={() => setCurrentId(currentId - 1)} disabled={currentId === 1} className={`${currentId === 1 ? 'button-color' : ''}`}><img src={leftbutton} alt="leftarrow" /></button>
                            }
                            <ul>
                                <li>
                                    <span className={`link-tab ${currentId === 1 ? 'active-tab' : ''}`}><b><img src={img1} alt='' /></b>
                                    </span>
                                    {
                                        currentId === 1 &&
                                        <h6>PROFILES</h6>
                                    }
                                </li>
                                <li><span className={`link-tab ${currentId === 2 ? 'active-tab' : ''}`}><b><img src={img2} alt='' /></b></span>
                                    {
                                        currentId === 2 &&
                                        <h6>WALLPAPERS</h6>
                                    }
                                </li>
                                <li><span className={`link-tab ${currentId === 3 ? 'active-tab' : ''}`}><b><img src={img3} alt='' /></b></span>
                                    {
                                        currentId === 3 &&
                                        <h6>STEAM</h6>
                                    }
                                </li>
                                <li><span className={`link-tab ${currentId === 4 ? 'active-tab' : ''}`}><b><img src={img4} alt='' /></b></span>
                                    {
                                        currentId === 4 &&
                                        <h6>AUDIOTHERAPY</h6>
                                    }
                                </li>
                                <li><span className={`link-tab ${currentId === 5 ? 'active-tab' : ''}`}><b><img src={img5} alt='' /></b></span>
                                    {
                                        currentId === 5 &&
                                        <h6>CHROMATHERAPY</h6>
                                    }
                                </li>
                                <li><span className={`link-tab ${currentId === 6 ? 'active-tab' : ''}`}><b><img src={img6} alt='' /></b></span>
                                    {
                                        currentId === 6 &&
                                        <h6>AROMATHERAPY</h6>
                                    }
                                </li>
                            </ul>
                            {
                                currentId === 6 ? null :
                                    <button onClick={() => setCurrentId(currentId + 1)} disabled={currentId === 6}><img src={rightbutton} alt="rightarrow" />
                                    </button>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
