import React from 'react';
import Medical from '../../svg/medical.svg';
export const Notice = () => <div id="notice">
                        <div id="notice-msg">
                            <h1>Stay Safe <span role="img" aria-label="Relief">😷</span></h1>
                            <p>Please ensure you are taking every step to protect yourself and others. 
                            If you are unsure what steps to take, please click <a id="no-dec" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" rel="noopener noreferrer" target="_blank"><b>here</b></a>.</p>
                        </div>
                        <div id="notice-img">
                            <img src={Medical} alt="medical"/>
                        </div>
                    </div>