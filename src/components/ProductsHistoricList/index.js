import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    ListItem,
    Text,
    Container,
    Left,
    Right,
    Icon
} from 'native-base';
import {
    FlatList,
    ActivityIndicator,
    Modal,
    StyleSheet,
    RefreshControl
} from 'react-native';
import {
    COLOR_NEUTRAL_DARK,
    COLOR_BRAND_PRIMARY,
    FONT_SIZE_XS,
    COLOR_SUPORTE_PRIMARY_LIGHTEST,
} from '../../design-stystem';
import ProductDetail from '../ProductDetail/ProductDetail';
import { dateToPtBR } from '../../utils/date';
export default function ProductsHistoricList({ loginName }) {

    const [loading, setLoading] = useState(false);
    const [historics, setProductsHistoric] = useState([]);

    const [showProductDetail, setShowProductDetail] = useState(false);
    const [product, setProduct] = useState({});

    async function getProductsHistoric() {
        setLoading(true);
        
        try {
            const { data } = await axios.get(`https://apiqrcodeproductsmanager.herokuapp.com/api/v1/product-logs?userId=${loginName}`);
            setProductsHistoric(data);
            setLoading(false);
        } catch(err) {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductsHistoric();        
    },[]);

    function showModalProduct(product) {
        setShowProductDetail(true);
        setProduct(product);
    }

    return (
        <Container>
            {
                loading ?
                    <ActivityIndicator
                        style={{marginTop: "50%"}}
                        size="large"
                        color={COLOR_BRAND_PRIMARY}
                        />
                :
                <FlatList
                    data={historics}
                    refreshControl={
                        <RefreshControl
                          onRefresh={getProductsHistoric}
                        />
                    }
                    renderItem={({ item }) => (
                        <ListItem onPress={() => showModalProduct(item)}>
                            <Left>
                                <Text style={sytles.name}>{item.productName}</Text>
                            </Left>
                            <Right>
                                <Text style={sytles.date}>{dateToPtBR(item.date)}</Text>
                            </Right>
                        </ListItem>
                    )}
                    keyExtractor={item => item.id.toString()}
                    ListEmptyComponent={() => {
                        return (
                            <ListItem style={{flexDirection: 'column', marginTop: '30%'}}>
                                <Icon name="albums" style={sytles.iconNotfound} />
                                <Text style={sytles.title}>Nenhum registro</Text>
                            </ListItem>
                        )
                    }}
                />
            }
            <Modal
                visible={showProductDetail}
                onRequestClose={ () => setShowProductDetail(false)}
                animated="slide"
            >
                <Text style={sytles.title}>Leitura realizada em: {dateToPtBR(product.date)}</Text>
                <ProductDetail
                    name={product.productName}
                    value={product.productValue}
                    description={product.productDescription}
                />
            </Modal>
        </Container>
    )
}

const sytles = StyleSheet.create({
    name: {
        color: COLOR_NEUTRAL_DARK
    },
    date: {
        color: COLOR_NEUTRAL_DARK,
        fontSize: FONT_SIZE_XS
    },
    title: {
        color: COLOR_BRAND_PRIMARY,
        marginVertical: 30,
        fontWeight: 'bold',
        backgroundColor: COLOR_SUPORTE_PRIMARY_LIGHTEST,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    iconNotfound: {
        color: COLOR_SUPORTE_PRIMARY_LIGHTEST,
        fontSize: 60
    }
})