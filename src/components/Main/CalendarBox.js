import React from 'react';
import Select from './Select';

const CalendarBox = () => {
    const yearsOptions = [{value: 2021, title: '2021'}, {value: 2022, title: '2022'}, {value: 2023, title: '2023'}, {value: 2024, title: '2024'}];
    const monthOptions = [{value: 'styczeń', title:'styczeń'}, {value: 'luty', title:'luty'}, {value: 'marzec', title:'marzec'}, {value: 'kwiecień', title:'kwiecień'}, {value: 'maj', title:'maj'}, {value: 'czerwiec', title:'czerwiec'}, {value: 'lipiec', title:'lipiec'}, {value: 'sierpień', title:'sierpień'}, {value: 'wrzesień', title:'wrzesień'}, {value: 'październik', title:'październik'}, {value: 'listopad', title:'listopad'}, {value: 'grudzień', title:'grudzień'}];
    const date = new Date(); 
    const year = date.getFullYear(); //aktualny rok
    const month = date.getMonth(); //aktualny miesiac (0-11)

    const test = (value) => {
        console.log(value);
    };

    return (<>
        <div className='selects'>
            <Select def={year} data={yearsOptions} handleSelect={test} />
            <Select def={monthOptions[month].title} data={monthOptions} handleSelect={test} />
        </div>
        <div className='container'>
            <div className='calendar-boxes'>
            </div>
        </div>
    </>)
}

export default CalendarBox;