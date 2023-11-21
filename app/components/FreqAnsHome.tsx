import React, { useState } from 'react'
import DataAnswer from './../json/AnswerData.json'
import Accordion from './Accordion';

export default function FreqAnsHome() {

    const [accordionData, setAccordionData] = useState(DataAnswer.answerData);
    const onAccordionClick = (key: number, value: boolean) => {
        accordionData.forEach(ele => {
            ele.active = false;
        });
        accordionData[key].active = value;
        setAccordionData(Object.assign([], accordionData));
    }
    return (

        <div className="mb-12">
            {accordionData.map((value, index) => (
                <Accordion
                    onAccordionClick={onAccordionClick}
                    key={index}
                    index={index}
                    title={value.title}
                    id={`value-${index}`}
                    active={value.active}>
                    {value.dis}
                </Accordion>
            ))}
        </div>
    )

}
