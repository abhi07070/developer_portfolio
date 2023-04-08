import React, { useState } from 'react';
import './Proficiency.css';
import gif from '../../Images/SvgLogo-unscreen.gif'

const Proficiency = () => {
    const [tooltipValues, setTooltipValues] = useState(['90%', '70%', '60%']);
const name = ['FRONTEND','BACKEND','PROGRAMMING']
    const handleTooltipChange = (index, value) => {
        const newTooltipValues = [...tooltipValues];
        newTooltipValues[index] = value;
        setTooltipValues(newTooltipValues);
    };

    const getSkillPerWidth = (value) => {
        const tooltipValueNumber = Number(value.replace('%', ''));
        return `${tooltipValueNumber}%`;
    };

    return ( 
        <div className="section-lg">
            <div className="container">
                <div className="skills-wrap">
                    <h1 className="ph1">Proficiency</h1>
                    {tooltipValues.map((value, index) => (
                        <div className="skill-box" key={index}>
                            <span className="title">{name[index]}</span>
                            <div className="skill-bar">
                                <span
                                    className="skill-per"
                                    style={{ width: getSkillPerWidth(value) }}
                                >
                                    <span
                                        className="tooltip"
                                        onClick={(e) => handleTooltipChange(index, e.target.innerText)}
                                    >
                                        {value}
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="image">
                <img src={gif} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Proficiency
