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
                name="travels"
                options={{
                    title: '',
                    headerTitle: 'MEUS FAVORITOS',
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    tabBarIcon: ({ color }: { color: string }) => (
                        <FontAwesome size={28} name="heart" color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: '',
                    headerTitle: 'CONFIGURAÇÕES',
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
