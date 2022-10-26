/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  fecthAsyncItems } from '../../features/items/itemsSlice.js';
import ItemsListing from '../../components/ItemsListing/index.js';



const Results = () => {
    const dispatch = useDispatch();
   
    useEffect(() => {
         dispatch(fecthAsyncItems())
    }, [dispatch]);


    return (
        <>
           <ItemsListing/>
        </>
    );
};

export default Results;
