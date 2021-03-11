import React, { Component } from 'react';
import { Text, View, Pressable } from 'react-native';

import styles from './styles';

const AppointmentScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Chat</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}

                    >Video Call</Text>
                </Pressable>
            </View >
        </View >
    );
};

export default AppointmentScreen;