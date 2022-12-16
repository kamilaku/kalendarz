import React, { useEffect, useState } from 'react';
import Select from './Select';

const DayDetails = ({dayDetails, onCancel, onSave}) => {
    const [details, setDetails] = useState(dayDetails);
    const periodIntensivityOptions = [{value: 0, title:'małe'}, {value: 1, title:'średnie'}, {value: 2, title:'duże'}];
    
    const formatDate = () => {
        const date = details?.date?.toLocaleDateString() || '';
        return date.split('/')?.reverse().join('/') || '';
    };
    
    const weekdays = () => {
        switch (details?.date?.getDay()) {
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
        setDetails({
            ...details,
            periodDetails: {
               ...details.periodDetails,
                intensivity: Number(value), 
            },
        });
    };

    const cancel = (event) => {
        if (onCancel) {
            onCancel(event.target.value);
        }
    };

    const save = () => {
        const data = { ...details };
        if (data?.periodDetails === null) {
            data['periodDetails'] = {
                intensivity: 0,
            };
        }
        // setDetails(data);
        if (onSave) {
            onSave(data);
        }
    };

    useEffect(() => {
        setDetails(dayDetails);
    }, [dayDetails]);

    return <>
        <div className='calendar-day-details' >
            <h1 className='title'>{formatDate()}</h1>
            <h3 className='title'>{weekdays()}</h3>
            <div className='calendar-day-details-but'>
                <div>
                    <Select 
                        ownClass={'intensivity'} 
                        def={details?.periodDetails?.intensivity || 0} 
                        data={periodIntensivityOptions}
                        handleSelect={setIntensivity} 
                        name={'intensivity'}
                        label={'intensywność:'}

                    />
                    <button className='addPeriod' onClick={save}>Dodaj miesiączkę</button>
                </div>
                <button className='cancel' onClick={cancel}>Anuluj</button>
            </div>
        </div>
    </>
}

export default DayDetails;