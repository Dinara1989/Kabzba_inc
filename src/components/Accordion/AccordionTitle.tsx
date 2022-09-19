import React from 'react';

type titlePropsType = {
    titleValue: string
}

const AccordionTitle = (props: titlePropsType) => {
    return (
        <div>
            <h3>{props.titleValue}</h3>
        </div>
    );
};

export default AccordionTitle;