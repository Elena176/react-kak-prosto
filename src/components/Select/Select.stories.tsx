import React, {useState} from 'react';
import {Select} from './Select';

export default {
    title: 'Select',
    component: Select,
}


export const SelectExample = () => {
    const [value, setValue] = useState(null);

    return (
        <>
            <Select onChange={setValue}
                    value={value}
                    items={[
                        {value: '1', title: 'Odessa'},
                        {value: '2', title: 'Kiev'},
                        {value: '3', title: 'Minsk'},
                    ]}/>
        </>
    )
}

