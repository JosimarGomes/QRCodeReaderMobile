import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native'
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import {
    COLOR_SUPORTE_PRIMARY,
    COLOR_NEUTRAL_DARK,
    COLOR_SUPORTE_SUCCESS
} from '../../design-stystem';

export default function QRCodeReader({ onReader }) {

    const [hasPermission, setPermission] = useState(false);


    async function requestCameraPermission() {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Acesso a câmera',
                message:
                'Precisamos acessar a câmera do seu dispositvo.',
                buttonNeutral: 'Pergunte-me depois',
                buttonNegative: 'Negar',
                buttonPositive: 'Permitir',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setPermission(true);
        }
    }

    useEffect(() => {
        requestCameraPermission();

    }, [])

    if(!hasPermission) {
        return null;
    }

    return (
        <CameraKitCameraScreen
            showFrame={true}
            scanBarcode={true}
            laserColor={COLOR_SUPORTE_SUCCESS}
            frameColor={COLOR_SUPORTE_PRIMARY}
            colorForScannerFrame={COLOR_NEUTRAL_DARK}
            onReadCode={event => onReader(event.nativeEvent.codeStringValue)}
        />
    )
}