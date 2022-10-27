/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HTTP_STATUS } from '../../features/constants.js';
import {  fecthAsyncItems } from '../../features/items/itemsSlice.js';
import ItemsListing from '../../components/ItemsListing/index.js';
import { getLoadingStatus} from '../../features/items/itemsSlice';


const Results = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoadingStatus);
   
   
    useEffect(() => {
         dispatch(fecthAsyncItems())
    }, [dispatch]);


    return (
        <>
        {loading === HTTP_STATUS.PENDING && (
            <h1>Cargando...</h1>
        )}
        {loading === HTTP_STATUS.FULFILLED && (
           <ItemsListing/>
       )}
       </>
    );
};

export default Results;
