import React, {useState} from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Countup = ({circle, string}) => {
    const [activeCountup, handleCountup] = useState(true);
    return (
        <>
            {typeof circle === 'string' ?
                <span>{circle}</span>
                :
                <>
                    <CountUp end={circle} redraw={true}>
                        {({countUpRef, start}) => (
                            <VisibilitySensor active={activeCountup} onChange={() => {start(); handleCountup(false)}} delayedCall>
                                <span ref={countUpRef}/>
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <span>{string}</span>
                </>
            }
        </>
    )
};

export default Countup;