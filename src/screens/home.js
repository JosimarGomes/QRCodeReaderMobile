import React, { useState } from 'react';
import {
    StyleSheet,
    Modal,
    Image
} from 'react-native';
import {
    Container,
    Tabs,
    Tab,
    Button,
    Text
} from 'native-base';

import ProductDetail from '../components/ProductDetail';
import ProductsHistoricList from '../components/ProductsHistoricList';
import QRCodeReader from '../components/QRCodeReader';
import Header from '../components/Header';
import {
    COLOR_NEUTRAL_WHITE,
    COLOR_SUPORTE_PRIMARY_LIGHTEST,
    COLOR_BRAND_PRIMARY
} from '../design-stystem';
import qrCodeImage from '../images/qrcode.png';

const HomeScreen = ({ loginName, logout }) => {

    const [showQrCode, setShowQRCode] = useState(false);
    const [showProductDetail, setShowProductDetail] = useState(false);
    const [productLink, setProductDetailLink] = useState('');

    return (
        <Container>
            <Header loginName={loginName} logout={() => logout()} />
            <Tabs>
                <Tab
                    tabStyle={styles.tab}
                    activeTabStyle={styles.activeTab}
                    activeTextStyle={styles.activeText}
                    heading="QR Code"
                >
                    <Image source={qrCodeImage} style={styles.image} />
                    <Button
                        onPress={() => setShowQRCode(true)}
                        style={styles.button}
                    >
                        <Text>Ler QR Code</Text>
                    </Button>
                </Tab>
                <Tab
                    tabStyle={styles.tab}
                    activeTabStyle={styles.activeTab}
                    activeTextStyle={styles.activeText}
                    heading="Histórico"
                >
                    <ProductsHistoricList loginName={loginName} />
                </Tab>
            </Tabs>
            <Modal
                visible={showQrCode}
                onRequestClose={ () => setShowQRCode(false)}                
            >
                <QRCodeReader onReader={value => {
                    setShowQRCode(false);
                    setShowProductDetail(true);
                    setProductDetailLink(value);
                }} />
            </Modal>
            <Modal
                visible={showProductDetail}
                onRequestClose={ () => setShowProductDetail(false)}
                animated="slide"
            >
                <ProductDetail
                    loginName={loginName}
                    productLink={productLink}
                    />
            </Modal>
        </Container>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    segment: {
        backgroundColor: COLOR_NEUTRAL_WHITE
    },
    tab: {
        backgroundColor: '#fff'
    },
    activeTab: {
        backgroundColor: COLOR_SUPORTE_PRIMARY_LIGHTEST
    },
    activeText: {
        color: COLOR_BRAND_PRIMARY,
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        margin: 50
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 200,
        backgroundColor: COLOR_BRAND_PRIMARY
    }
})
