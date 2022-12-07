import React from 'react';
import CalendarBox from "./CalendarBox";

const Main = () => {
    return <>
    <div className='select-range'>
        <div className='select-month'>select month</div>
        <div className='select-year'>select year</div>
    </div>
    <CalendarBox />
    </>;
};

export default Main;