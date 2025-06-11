import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout(): JSX.Element {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarStyle: {
                    height: 80,
                    backgroundColor: '#000',
                    paddingTop: 20,
                },
                headerStyle: {
                    backgroundColor: '#000',
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: '',
                    headerTitle: 'ELITESPORTWEAR',
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    tabBarIcon: ({ color }: { color: string }) => (
                        <FontAwesome size={28} name="home" color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="carrinho"
                options={{
                    title: '',
                    headerTitle: 'CARRINHO DE COMPRAS',
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    tabBarIcon: ({ color }: { color: string }) => (
                        <FontAwesome size={28} name="shopping-cart" color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="config"
                options={{
                    title: '',
                    headerTitle: 'CONFIGURAÇÕES DE USUÁRIO',
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    tabBarIcon: ({ color }: { color: string }) => (
                        <MaterialCommunityIcons size={28} name="cog" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
