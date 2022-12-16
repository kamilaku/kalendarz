import React, { useEffect, useState } from "react";

const Select = ({def, data, handleSelect, ownClass, label, name}) => {
    const [selected, setSelected] = useState(def);

    useEffect(() => {
        setSelected(def);
    }, [def]);

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
        <div className="select-group">
            {(label) && <label for={name}>{label}</label>}
            <select 
                value={selected}
                className={`select ${ownClass ? ownClass : ''}`} 
                onChange={choose}
                id={name || ''}
            >{options}
            </select>
        </div>
    )
}

export default Select;