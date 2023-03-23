import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../..';
import { IElem } from '../../types/types';

import './matrix.sass';

interface MatrixProps {
    elems: IElem[];
};

const Matrix: React.FC<MatrixProps> = observer(({elems}) => {
    const {filter} = useContext(Context);

    return (
        <div className='matrix'>
            {elems.map(elem =>
                <div className='matrix__elem' style={{
                    backgroundColor: elem.color,
                    visibility: filter.filter === 'less' && elem.value > 0 ? 'hidden'
                    : filter.filter === 'more' && elem.value < 0 ? 'hidden' : 'unset'
                    }} key={elem.id}>
                        {elem.value}
                </div>
            )}
        </div>
    );
});

export default Matrix;