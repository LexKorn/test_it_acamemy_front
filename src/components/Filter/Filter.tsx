import React, {useContext} from 'react';

import { Context } from '../..';

import './filter.sass';

const Filter: React.FC = () => {
    const {filter} = useContext(Context);

    return (
        <div className='filter'>
            <button className='filter__btn filter__btn_more' onClick={(e) => filter.setFilter('more')}>Filter &#62; 0</button>
            <button className='filter__btn filter__btn_all' onClick={(e) => filter.setFilter('all')}>All</button>
            <button className='filter__btn filter__btn_less' onClick={(e) => filter.setFilter('less')}>Filter &#60; 0</button>
        </div>
    );
};

export default Filter;