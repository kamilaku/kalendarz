import React, { useEffect, useState } from 'react';

const Calendar = ({year, month}) => {
    const [days, setDays] = useState([]);

    const getDatesByRange = (startDate, endDate) => {
        const date = new Date(startDate.getTime());
        const dates = [];
      
        while (date <= endDate) {
          dates.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
      
        return dates;
    };

    const genCalendarDates = () => {
        // pierwszy i ostadni dzień biezącego miesiąca
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0, 0, 0, 0); //dodajemy jeden miesiąc i odejmujemy jeden dzień (zerowy dzień nie istnieje)

        // 0 to poniedziałek a 6 to niedziela
        const daysOfPastMonth = -6 + firstDay.getDay(); //dni przed 1 dniem miesiąca
        const daysOfNextMonth = 6 - (lastDay.getDay() - 1); //dni po ostatnim dniu miesiąca

        // zakres dat dla których ma być generowany cały widok
        const calendarStart = new Date(year, month, daysOfPastMonth);
        // sprawdzić zakres końcowy dla róznych dat i poprawić go
        const calendarEnd = new Date(year, month + 1, daysOfNextMonth);

        // zakres dni
        setDays(getDatesByRange(calendarStart, calendarEnd));
    };

    useEffect(() => {
        genCalendarDates();
    }, [year, month]);

    return <>
        <div className='calendar'>
        {
            days.map((date) => (
                <div key={date.getTime()} className='calendar-day'>{date.getDate()}</div>
            ))
        }  
        </div>
    </>
}

export default Calendar;