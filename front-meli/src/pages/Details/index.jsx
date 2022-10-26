import React, {useEffect} from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fecthAsyncItemsDetail, getSelectedItem } from "../../features/items/itemsSlice";
import ItemDetail from '../../components/ItemDetail';
import Breadcrumbs from '../../components/Breadcrumbs';



const Details = () => {
   const {id} = useParams();
   const dispatch = useDispatch();
   const data = useSelector(getSelectedItem)


 useEffect(() => {
    dispatch(fecthAsyncItemsDetail(id))
}, [dispatch, id]);


    return (
        <>
           {data?.categories?.length > 0 && <Breadcrumbs breadcrumbs={data.categories} />} 
           {data?.item?.id ? <ItemDetail product={data.item} /> : null} 
        </>
    );
};

export default Details;
