import React from 'react';
import Select from './Select';

const CalendarBox = () => {
    const yearsOptions = [{ value: 2021, title: '2021'}, { value: 2022, title: '2022'}, { value: 2023, title: '2023'}, { value: 2024, title: '2024'}];

    const test = (value) => {
        console.log(value);
    };

    return (<>
        <Select def={2023} data={yearsOptions} handleSelect={test} />

        <div className='container'>
            <div className='calendar-boxes'>
            </div>
        </div>
    </>)
}

export default CalendarBox;