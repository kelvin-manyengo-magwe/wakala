import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Login = ({ navigation }) => {
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
                <TextInput style={styles.input} />

                <Text style={styles.label}>Neno siri</Text>
                <TextInput style={styles.input} secureTextEntry />

                <Text style={styles.forgotText}>umesahau neno siri?</Text>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Ingia</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
