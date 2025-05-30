import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

export const Login = ({ navigation }) => {

            const [name, setName] = useState('');
              const [password, setPassword] = useState('');
              const [ loading, setLoading ] = useState(false);

              const handleLogin = async () => {

                    if(loading) return;

                    setLoading(true);

                try {
                  const response = await fetch('http://192.168.1.185:8000/api/mobile/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                    },
                    body: JSON.stringify({ name, password }),
                  });


                  const data = await response.json();

                    navigation.navigate('mainApp');

                  if (!response.ok) {
                    Alert.alert('Kuingia kumeshindikana', data.message);
                    return;
                  }

                  // Store token (optional: use AsyncStorage)
                  console.log('Login success', data.token);

                  // Navigate to your main screen (example)
                  // navigation.navigate('Home', { user: data.user });
                } catch (error) {
                  console.error(error);
                  Alert.alert('Error', 'Something went wrong');
                } finally {
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
                <Text style={styles.label}>Jina Kamili</Text>
                <TextInput style={styles.input}
                            placeholder="Jina Kamili"
                            onChangeText={setName}
                            value={name}/>

                <Text style={styles.label}>Neno siri</Text>
                <TextInput style={styles.input}
                            placeholder="Neno Siri" onChangeText={setPassword}
                            value={password}
                            secureTextEntry />

                {/* <Text style={styles.forgotText}>umesahau neno siri?</Text> */}

                    <TouchableOpacity
                      onPress={handleLogin}
                      style={[styles.loginButton, loading && { backgroundColor: '#ccc' }]}
                      disabled={loading}
                    >
                      <Text style={styles.loginButtonText}>
                        {loading ? 'Tafadhali Subiri...' : 'Ingia'}
                      </Text>
                    </TouchableOpacity>

            </View>
        </View>
    );
};
