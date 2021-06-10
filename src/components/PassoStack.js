import React from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                {props.voltar
                    ? <Button title="Voltar" onPress={() => props.navigation.goBack()} />
                    : false
                }
                {props.avancar
                    ? <Button title="Avançar" onPress={() => props.navigation.push(props.avancar, {numero: parseInt(Math.random() * 100)})} />
                    : false
                }
            </View>
            <View style={{ flex: 1 }}>
                {props.children}
            </View>
        </View>
    );
}

/**Funcoes props.navigation.navigate e props.navigation.push recebem como primeiro parâmtro a rota da tela que irá acessar,
 * e como segundo parametro aceita um objeto "params" que pode ser usado para passar parametros pela rota, este objeto 
 * é acessado pelo caminho props.route.params na tela destino.
 */
