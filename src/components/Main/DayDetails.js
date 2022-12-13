import React, { useState } from 'react';
import Select from './Select';

const DayDetails = ({dayDetails, onCancel, onSave}) => {
    const [periodDetails, setPeriodDetails] = useState(dayDetails?.periodDetails || {});

    const periodIntensivityOptions = [{value: 0, title:'małe'}, {value: 1, title:'średnie'}, {value: 2, title:'duże'}];
    
    const weekdays = () => {
        switch (dayDetails.getDay()) {
            case 1: 
                return 'poniedziałek';
            case 2: 
                return 'wtorek';
            case 3: 
                return 'środa';
            case 4: 
                return 'czwartek';
            case 5: 
                return 'piątek';
            case 6: 
                return 'sobota';
            case 0: 
                return 'niedziela';
            default:
                return '';
        }
    };

    const setIntensivity = (value) => {
        setPeriodDetails({
            ...periodDetails,
            intensivity: Number(value),
        });
    };

    const cancel = (event) => {
        if (onCancel) {
            onCancel(event.target.value);
        }
    };

    const save = () => {
        if (onSave) {
            onSave(periodDetails);
        }
    }

    return <>
        <div className='calendar-day-details' >
            {/* <h1 className='title'>{day.getFullYear()}/{day.getMonth()}/{day.getDate()}</h1> */}
            <h2 className='title'>{weekdays}</h2>
            <div className='calendar-day-details-but'>
                <Select def={periodDetails?.intensivity || 0} data={periodIntensivityOptions} handleSelect={setIntensivity} />
                <button className='addPeriod' onClick={save}>Dodaj miesiączkę</button>
                <button className='cancel' onClick={cancel}>Anuluj</button>
            </div>
        </div>
    </>
}

export default DayDetails;