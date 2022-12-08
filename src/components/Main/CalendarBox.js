import React, { useState } from 'react';
import Calendar from './Calendar';
import Select from './Select';


const CalendarBox = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());

    const yearsOptions = [{value: 2021, title: '2021'}, {value: 2022, title: '2022'}, {value: 2023, title: '2023'}, {value: 2024, title: '2024'}];
    const monthOptions = [{value: 0, title:'styczeń'}, {value: 1, title:'luty'}, {value: 2, title:'marzec'}, {value: 3, title:'kwiecień'}, {value: 4, title:'maj'}, {value: 5, title:'czerwiec'}, {value: 6, title:'lipiec'}, {value: 7, title:'sierpień'}, {value: 8, title:'wrzesień'}, {value: 9, title:'październik'}, {value: 10, title:'listopad'}, {value: 11, title:'grudzień'}];

    const changeYear = (value) => {
        setYear(Number(value));
    };

    const changeMonth = (value) => {
        setMonth(Number(value));
    };

    return (<>
        <div className='selects'>
            <Select def={year} data={yearsOptions} handleSelect={changeYear} />
            <Select def={monthOptions[month].value} data={monthOptions} handleSelect={changeMonth} />
        </div>
        <Calendar year={year} month={month} />
    </>)
}

export default CalendarBox;