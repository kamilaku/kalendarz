import React, { useEffect, useState } from 'react';
import DayDetails from './DayDetails';

const Calendar = ({year, month}) => {
    const [days, setDays] = useState([]);
    const [selectedDay, setSelectedDay] = useState({});

    useEffect(() => {
        // [{date: Date, periodDetails}]
        const periodData = JSON.parse(localStorage.getItem('periodData') ?? '[]');
        
        const compareDates = (date, dateToCompare) => {
            return date.getFullYear() === dateToCompare.getFullYear() && 
                    date.getMonth() === dateToCompare.getMonth() && 
                    date.getDate() === dateToCompare.getDate();
        };

        const getDatesByRange = (startDate, endDate) => {
            const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0); // new Date(startDate.getTime());
            const today = new Date();
            const dates = [];
        
            while (date <= endDate) {
                // item -> {date: Date, periodDetails: {}}
                // to do add parsing data
                console.log(date.toJSON().split('T')[0], `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);

                const findPeriodDetails = periodData.find((item) => date.toJSON().split('T')[0] === item.date.split('T')[0]);
    
                dates.push({
                    isCurrentDay: compareDates(date, today),
                    isSelectedMonth: date.getFullYear() === year && date.getMonth() === month,
                    date: new Date(date),
                    periodDetails: findPeriodDetails ? findPeriodDetails.periodDetails : null,
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
                default:
                    return 0;
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

        genCalendarDates();
    }, [year, month]);

    const clickDay = (day) => {
        if (day.isSelectedMonth) {
            // szczegóły dnia
            setSelectedDay(day);
            document.querySelector('.calendar-day-details-wrapper').classList.add('show');
        } else {
            // funkcja do zmieniania miesiąca i roku
        }
    }

    const exitDay = () => {
        setSelectedDay(null);
        document.querySelector('.show').classList.remove('show')
    }

    const addDetails = (details) => {
        const data = {
            date: selectedDay.date,
            periodDetails: details,
        };
        const periodData = JSON.parse(localStorage.getItem('periodData') ?? '[]');
        localStorage.setItem('periodData', JSON.stringify([...periodData, data]))
        exitDay();
    };

    return <>
        <div className='calendar'>
        {
            days.map((day) => (
                <div 
                    key={day.date.getTime()} 
                    className='calendar-day-wrapper'
                >
                    <button onClick={() => clickDay(day)} className={`calendar-day ${day.isSelectedMonth ? 'currentMonthDay' : 'otherMonthDay'} ${day.isCurrentDay ? 'current-day' : ''}`}>
                        {day.date.getDate()}
                    </button>
                </div>
            ))
        }
            <div className='calendar-day-details-wrapper'>
                <DayDetails dayDetails={selectedDay} onCancel={exitDay} onSave={addDetails} />
            </div> 
        </div>
    </>
}

export default Calendar;