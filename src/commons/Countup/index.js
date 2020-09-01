import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Countup = ({circle, string}) => {
    return (
        <>
            {typeof circle === 'string' ?
                <span>{circle}</span>
                :
                <>
                    <CountUp end={circle} redraw={true}>
                        {({countUpRef, start}) => (
                            <VisibilitySensor onChange={start} delayedCall>
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