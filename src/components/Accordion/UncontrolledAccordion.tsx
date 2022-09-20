import React, {useState} from 'react';
import AccordionBody from "./AccordionBody";
type PropsType = {
    titleValue: string
}

const UncontrolledAccordion = (props: PropsType) => {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <h3 onClick={() => {
                setCollapsed(!collapsed)
            }}>{props.titleValue}</h3>
            {!collapsed && <AccordionBody/>}

        </div>
    );
};

export default UncontrolledAccordion;