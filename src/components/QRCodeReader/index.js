import React from 'react';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import {
    COLOR_SUPORTE_PRIMARY,
    COLOR_NEUTRAL_DARK,
    COLOR_SUPORTE_SUCCESS
} from '../../design-stystem';

export default function QRCodeReader({ onReader }) {
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