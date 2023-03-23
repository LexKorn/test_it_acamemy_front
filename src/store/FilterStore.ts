import {makeAutoObservable} from 'mobx';

export default class FilterStore {
    _filter: string;

    constructor() {
       this._filter = 'all';
       makeAutoObservable(this); 
    };

    setFilter(str: string) {
        this._filter = str;
    };

    get filter() {
        return this._filter;
    };
};