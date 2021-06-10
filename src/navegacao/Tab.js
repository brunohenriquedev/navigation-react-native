import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Tab = createBottomTabNavigator();

export default props => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "TelaA":
                        case "TelaB":
                        case "TelaC":
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            break;
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

            // initialRouteName="TelaB"
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'blue',
                showLabel: true,
                // labelStyle: { fontSize: 30 }
            }} //opções do bottom tab
        >
            <Tab.Screen name={"TelaA"}
                /*Altera titulo da página */
                // options={{ title: 'Informações Iniciais' }} 
                /**Também pode receber o icone da Tab aqui. */
                // options={{ tabBarIcon: ({ focused, color, size }) => (<Ionicons name={'ios-information-circle'} size={20} color={'red'} />) }}
                component={TelaA}
            />
            <Tab.Screen name={"TelaB"} component={TelaB} />
            <Tab.Screen name={"TelaC"} component={TelaC} />
        </Tab.Navigator>
    );
};
