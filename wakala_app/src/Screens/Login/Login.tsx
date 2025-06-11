import React, { useState } from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { styles } from './styles'; // Make sure this file exists and has correct styles
import { env } from '../../config/env';


interface LoginScreenProps {
    navigation: any; // Replace with specific type if using TypeScript Navigation types
}

const API_BASE_URL = env.API_BASE_URL;


export const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (loading) return;

        if (!name.trim() || !password.trim()) {
            Alert.alert(
                'Taarifa Hazijakamilika',
                'Tafadhali jaza jina la mtumiaji na nenosiri ili kuendelea.'
            );
            return;
        }

        setLoading(true);
        console.log('Attempting login with:', { name, password });

        try {
            const response = await fetch('${API_BASE_URL}/mobile/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            });

            console.log('Server response status:', response.status);

            const data = await response.json();
            console.log('Response body:', data);

            if (!response.ok) {
                const errorMessage = data.message || 'Jina la mtumiaji au nenosiri si sahihi.';
                Alert.alert('Kuingia Kumeshindikana', errorMessage);
                setLoading(false);
                return;
            }

            console.log('Login successful. Token:', data.token);

            // TODO: Save token using AsyncStorage if needed

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'mainApp', params: { user: data.user } }],
                })
            );

        } catch (error: any) {
            console.error('Network/server error:', error.message);
            Alert.alert(
                'Kosa la Muunganisho',
                'Imeshindikana kuunganisha na seva. Tafadhali angalia mtandao wako.'
            );
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imagesContainer}>
                <Image
                    style={styles.wakalaLogoImage}
                    source={require('../../../assets/images/icons/wakala-logo.jpg')}
                />
                <Image
                    style={styles.wakalaWordImage}
                    source={require('../../../assets/images/icons/wakala-word.png')}
                    resizeMode="contain"
                />
                <Text style={styles.subText}>Fuatilia biashara yako kwa urahisi</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.label}>Jina la Mtumiaji</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Weka jina la mtumiaji"
                    placeholderTextColor="#999"
                    onChangeText={setName}
                    value={name}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Text style={styles.label}>Nenosiri</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Weka nenosiri"
                    placeholderTextColor="#999"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <TouchableOpacity
                    onPress={handleLogin}
                    style={[
                        styles.loginButton,
                        loading && { backgroundColor: '#BE2C28' },
                    ]}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                    ) : (
                        <Text style={styles.loginButtonText}>INGIA</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};
