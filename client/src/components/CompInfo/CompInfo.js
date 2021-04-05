import React from 'react';

const CompInfo = (props) => {
    const {
        data,
    } = props;
    const eventName = data['eventName']

    return (
        <div>
            <p>{props.data}</p>
            <p>{eventName}</p>

        </div>
    )
};

export default CompInfo;

