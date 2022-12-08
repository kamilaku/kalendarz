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
        <div className='container'>
            <select 
                value={selected}
                className='select-year' 
                onChange={choose}
            >{options}
            </select>
        </div>
    )
}


// const SelectMonth = ({def, data, handleSelect}) => {
//     const [selected, setSelected] = useState(def);

//     const choose = (event) => {
//         setSelected(event.target.value);
//         if (handleSelect) {
//             handleSelect(event.target.value);
//         }
//     };

//     const options = data.map((option) => 
//         <option key={option.value+option.title} value={option.value}>{option.title}</option>
//     );

//     return ( 
//         <div className='container'>
//             <select 
//                 value={selected}
//                 className='select-month' 
//                 onChange={choose}
//             >{options}
//             </select>
//         </div>
//     )
// }

export default Select;
// export { SelectMonth };