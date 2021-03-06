import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet, ActivityIndicator, Image, SafeAreaView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import DoctorProfile from '../../components/DoctorProfile/index';

import doctors from './doctors';

const MakeAppointmentScreen4 = () => {
    // const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={doctors}
                renderItem={({ item }) => <DoctorProfile profile={item} />}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        width: '100%',
        paddingBottom: 5
    },

});

export default MakeAppointmentScreen4;