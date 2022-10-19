const validConditions = {
    new: 'Nuevo',
    used: 'Usado',
    refurbished: 'Reacondicionado',
    not_specified: 'Estado sin especificar',
};

const getCategoryId = (availableFilters) => {
    const sortedCategories = availableFilters[0].values.sort((a, b) => {
        return b.results - a.results;
    });
    return sortedCategories[0].id;
};

const getDecimals = (price) => {
    return +price.toString().split('.')[1] || 0;
};

const getFormattedItem = (product) => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: Math.trunc(product.price),
            decimals: getDecimals(product.price),
        },
        picture: product.thumbnail,
        condition: validConditions[product.condition],
        free_shipping: product.shipping.free_shipping,
        address: product.address.state_name,
    };
};

const getItemWithDescription = (product, description) => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: Math.trunc(product.price),
            decimals: getDecimals(product.price),
        },
        picture: product.pictures[0].url || product.thumbnail,
        condition: validConditions[product.condition],
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        description,
    };
};

module.exports = { getCategoryId, getFormattedItem, getItemWithDescription };
