import React from 'react';
import { useSelector } from 'react-redux';
import { getAllItems } from '../../features/items/itemsSlice';
import Breadcrumbs from '../../components/Breadcrumbs';
import ItemsContainer from '../../components/itmesContainer';

const ItemsListing = () => {

   const itemsData = useSelector(getAllItems);
   const { items } = itemsData;
   const { categories } = itemsData

    return (
        <>
         {categories?.length > 0 && <Breadcrumbs breadcrumbs={categories} />} 
         {items?.length > 0 && <ItemsContainer items={items} />} 
        </>
    );
};

export default ItemsListing;
