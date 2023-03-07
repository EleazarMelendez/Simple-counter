import React from 'react';
import { withTimer } from '@/lib/withTimer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export function SecondsCounter ({seconds}) { 
    
    let paddedCount = seconds.toString().padStart(6, '0');
    let digits = paddedCount.split("")
    
    return (
        <div className="d-flex justify-content-center">
            <div className="text-center col border border-secondary rounded p-4 m-1 text-white"><h1><FontAwesomeIcon icon={faClock} /></h1></div>
    {digits.map((num, index) => 
        {return(
            <div
                key={index}
                className="text-center col border border-secondary rounded p-4 m-1 text-white"
                >
            <h1>{num}</h1>
            </div>
        )}

        )}</div>);
};

export const SecondsCounterWithTimer = withTimer(SecondsCounter);