import React from 'react';

import {
    View,
    SafeAreaView as SafeArea,
    Image,
    Text,
    TouchableOpacity as Button
} from 'react-native';

import Unicorn from '../../img/Apresentation/2.png';
import Human from '../../img/Apresentation/1.png';

import Style from './Style';

export default function Splash() {
    return (
        <View style={Style.Main}>
            <SafeArea>
                <View style={Style.BoxImages}>
                    <View style={Style.GroupImages}>
                        <Image source={Unicorn} style={
                                [
                                    Style.Image,
                                    {
                                        transform: [{ rotateY: '180deg' }],
                                        top: 0,
                                        left: 20
                                    }
                                ]
                            }
                        />
                        <Image source={Human} style={[Style.Image, {bottom: 0, right: 10}]} />
                    </View>
                </View>
                <View style={Style.BoxText}>
                    <Text style={Style.TextNew}>Novo!</Text>
                    <Text style={Style.TextTitle}>Avatar Generator</Text>
                    <Button style={Style.Button} activeOpacity={0.8}>
                        <Text style={Style.TextButton}>Começar</Text>
                    </Button>
                </View>
            </SafeArea>
        </View>
    )
}