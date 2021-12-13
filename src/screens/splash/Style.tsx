import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const Style = StyleSheet.create({
    Main: {
        flex: 1,
        backgroundColor: '#000',
    },
    BoxImages: {
        width: '100%',
        height: 450,
        justifyContent: 'center',
    },
    GroupImages: {
        width: '100%',
        height: 360,
        marginTop: 50
    },
    Image: {
        resizeMode: 'contain',
        width: 250,
        height: 250,
        position: 'absolute'
    },
    BoxText: {
        width: '100%',
        height: 350,
        alignItems: 'center'
    },
    TextNew: {
        fontSize: 15,
        fontFamily: 'Helvetica',
        color: Colors.orange,
        fontWeight: '400',
        letterSpacing: 1.5,
        marginBottom: 10,
        textAlign: 'center'
    },
    TextTitle: {
        fontSize: 54,
        fontFamily: 'Carmen Sans',
        color: Colors.white,
        fontWeight: '500',
        letterSpacing: 1.5,
        textAlign: 'center',
        marginBottom: 40
    },
    Button: {
        backgroundColor: Colors.purple,
        width: 170,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14
    },
    TextButton: {
        color: Colors.white,
        letterSpacing: 1.5,
        fontFamily: 'Carmen Sans',
        fontWeight: '400',
        textTransform: 'uppercase'
    }
})

export default Style;