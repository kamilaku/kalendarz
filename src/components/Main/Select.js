import React, { useState } from "react";

const Select = ({def, data, handleSelect}) => {
    const [selected, setSelected] = useState(def);

    const choose = (event) => {
        setSelected(event.target.value);
        if (handleSelect) {
            handleSelect(event.target.value);
        }
    };

    const options = data.map((option) => 
        <option key={option.value+option.title} value={option.value}>{option.title}</option>
    );

    return ( 
        <>
            <select 
                value={selected}
                className='select' 
                onChange={choose}
            >{options}
            </select>
        </>
    )
}

export default Select;