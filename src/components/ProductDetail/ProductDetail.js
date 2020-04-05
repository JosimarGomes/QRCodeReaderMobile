import React from 'react';
import {
    Image,
    StyleSheet
} from 'react-native';
import {
    Card,
    CardItem,
    Body,
    Text
} from 'native-base';

import {
    COLOR_NEUTRAL_DARK,
    FONT_SIZE_M
} from '../../design-stystem';
import { currencyToPtBR } from '../../utils/currency';

const images = [
    require('../../images/product-one.jpg'),
    require('../../images/product-two.jpg'),
    require('../../images/product-three.jpg'),
    require('../../images/product-four.jpg'),
    require('../../images/product-five.jpg')
];

export default function ProductDetailView({ name, description, value }) {

    const ramdomImages = Math.round(Math.random() * 4);
    const image = images[ramdomImages];

    return (
        <>
            <Image source={image} style={styles.image} />
            <Card>
                <CardItem header>
                    <Text style={styles.header}>
                        {name}
                    </Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={styles.description}>
                            {description}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text style={styles.value}>
                        {currencyToPtBR(value)}
                    </Text>
                </CardItem>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: FONT_SIZE_M,
        color: COLOR_NEUTRAL_DARK,
        fontWeight: 'bold'
    },
    description: {
        color: COLOR_NEUTRAL_DARK
    },
    value: {
        color: COLOR_NEUTRAL_DARK,
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 175,
        alignSelf: 'center'
    }
})