/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ItemsListing from '../../components/ItemsListing/index.js';
import { addItems } from '../../features/items/itemsSlice.js';
import axios from '../../static/axios'

const Results = () => {
    const itemText = 'ps4'
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchitems = async () => { 
            const response  = await axios.get(`/api/items?q=${itemText}`)
            .catch((err) =>{
                console.log("Err:", err)
            });
            dispatch(addItems(response.data))
            console.log(response)
        };
        fetchitems();
        
    }, []);


    return (
        <>
           <ItemsListing/>
        </>
    );
};

export default Results;
