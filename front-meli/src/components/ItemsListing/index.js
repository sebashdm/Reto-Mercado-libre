import React from 'react';
import { useSelector } from 'react-redux';
import { getAllItems } from '../../features/items/itemsSlice';
import Breadcrumbs from '../../components/Breadcrumbs';
import ItemsContainer from '../../components/itmesContainer';



const ItemsListing = () => {

   const itemsData = useSelector(getAllItems);
   const { items } =  itemsData

    return (
        <>
         {items.categories?.length > 0 && <Breadcrumbs breadcrumbs={items.categories} />} 
         {items.items?.length > 0 && <ItemsContainer items={items.items} />} 
        </>
    );
};

export default ItemsListing;
