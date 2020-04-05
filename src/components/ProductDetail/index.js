import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

import { COLOR_BRAND_PRIMARY } from '../../design-stystem';
import ProductDetailView from './ProductDetail';

export default function ProductDetail({ productLink, loginName }) {

    const [product, setProductDetail] = useState({});
    const [loading, setLoading] = useState(false);
    
    async function getProductDetail() {
        setLoading(true);
        
        try {
            const { data } = await axios.get(productLink, {
                headers: {
                    authorization: loginName
                }
            });
            console.log("data", data)
            setProductDetail(data);
            setLoading(false);
        } catch(err) {
            setLoading(false);
        }
        
    }

    useEffect(() => {
        getProductDetail()
    }, [])


    if (loading) {
        return (
            <ActivityIndicator
                style={{marginTop: "50%"}}
                size="large"
                color={COLOR_BRAND_PRIMARY} />
        )
    }

    return (
        <ProductDetailView
            {...product}
        />
    )
}