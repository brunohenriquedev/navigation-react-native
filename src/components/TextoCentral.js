import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {
    const styles = createStyles(props);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </View>
    );
};

const createStyles = props => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.corFundo || '#000'
    },
    text: {
        fontSize: 50,
        color: props.corTexto || '#FFF'
    }
});
