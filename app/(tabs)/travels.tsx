import { View, Text } from 'react-native'
import React from 'react'

const Travels = () => {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#ccc',
                margin: 10,
                padding: 10,
             }}>
                <View>
                    <Text>De: Cedro</Text>
                    <Text>Para: Fortaleza</Text>
                    <Text>Data: 20/09/2025</Text>
                    <Text>Horário: 08:00h</Text>
                </View>
                <View>
                    <Text>Vagas</Text>
                    <Text>3/4</Text>
                </View>
            </View> 
        </View>
    )
}

export default Travels