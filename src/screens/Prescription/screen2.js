import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const PrescriptionScreen = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const id = Math.floor(route.params?.id);

    return (

        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#a5d49e', '#cdcdad', '#f1c1b8']} style={styles.linearGradient}>

                < View style={styles.header} >
                    <Text style={{ fontSize: 20, marginLeft: 15, color: 'white' }}>Dowload Prescription</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Prescription ID: {id}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 16, color: 'white' }}>GET PRESCRIPTION</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    header: {
        backgroundColor: '#037bfc',
        marginHorizontal: 4,
        marginTop: '2%',
        borderRadius: 3,
        height: 35,
        justifyContent: 'center',
    },
    buttonContainer: {
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 100,
        width: '100%',
        flex: 1,
    },
    button: {
        backgroundColor: '#037bfc',
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        borderRadius: 5,
        width: 200,
        marginTop: 100
    },
    linearGradient: {
        flex: 1,
    }
});

export default PrescriptionScreen;

