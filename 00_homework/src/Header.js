import React, { useState, useEffect } from 'react';

function Header() {
    const [date, setDate] = useState(formatDate(new Date()));

    function formatDate(date) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        let dateString = date.toLocaleDateString('ko-KR', options);

        if (dateString.endsWith('.')) {
            dateString = dateString.slice(0, -1);
        }
        return dateString;
    }

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)}, [time]);

    return (
        <div className="header">
            <h1>
                {date} 오늘의 할 일!!!
            </h1>
            <p>{time}</p>
        </div>
    );
}

export default Header;