import React, { useEffect, useState } from 'react';

const Calendar = ({year, month}) => {
    const [days, setDays] = useState([]);
//
    const getDatesByRange = (startDate, endDate) => {
        const date = new Date(startDate.getTime());
        const today = new Date(); // todo
        const dates = [];
      
        while (date <= endDate) {
            dates.push({
                isCurrentDay: false,
                isSelectedMonth: date.getFullYear() === year && date.getMonth() === month,
                date: new Date(date),
            });
            date.setDate(date.getDate() + 1);
        }
      
        return dates;
    };

    const getDaysFromPastMonth = (dayNumber) => {
        switch (dayNumber) {
            case 0: // niedziela
                return -5;
            case 1: // poniedziałek
                return 1;
            case 2: // wtorek
                return 0;
            case 3: // środa
                return -1;
            case 4: // czwartek
                return -2;
            case 5: // piątek
                return -3;
            case 6: //sobota
                return -4;
        }
    };

    const genCalendarDates = () => {
        // pierwszy i ostadni dzień biezącego miesiąca
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0, 0, 0, 0); //dodajemy jeden miesiąc i odejmujemy jeden dzień (zerowy dzień nie istnieje)

        // 0 to niedziela a 6 to sobota
        const daysOfPastMonth = getDaysFromPastMonth(firstDay.getDay()); //dni przed 1 dniem miesiąca
        // jezeli ostatni dzień to niedziela, to nie dodawaj kolejnych dni, inaczej oblicz ilość dni - funkcja po dwukropku
        const daysOfNextMonth = lastDay.getDay() === 0 ? 0 : 6 - (lastDay.getDay() - 1); //dni po ostatnim dniu miesiąca

        // zakres dat dla których ma być generowany cały widok
        const calendarStart = new Date(year, month, daysOfPastMonth);
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
            days.map((day) => (
                <div 
                    key={day.date.getTime()} 
                    className={`calendar-day ${day.isSelectedMonth ? 'currentMonthDay' : 'otherMonthDay'}${day.isCurrentDay ? ' current-day' : ''}`}
                >
                    {day.date.getDate()}
                </div>
            ))
        }  
        </div>
    </>
}

export default Calendar;