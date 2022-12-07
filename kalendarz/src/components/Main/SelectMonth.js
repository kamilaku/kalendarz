import React, { useState } from "react";

const SelectMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    return (
        <form className='select-range'>
        <div className='select-month'>{month}</div>
        <div className='select-year'>{year}</div>
        </form>
    )
}

export default SelectMonth;