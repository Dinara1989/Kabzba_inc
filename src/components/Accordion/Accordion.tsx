import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

type accordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

const Accordion = (props: accordionPropsType) => {

    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            { props.collapsed === false && <AccordionBody/> }
        </div>
    );
};

export default Accordion;