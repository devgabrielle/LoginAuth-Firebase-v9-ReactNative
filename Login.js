import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function enterInFirebase() {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('Logou')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Senha ou E'mail incorretos. Tente novamente")
            });

    }

    return (
        <View>

            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Insira seu E-mail"
            />

            <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="************"
            />

            <TouchableOpacity
                activeOpacity={.5}
                onPress={() => enterInFirebase()}>
                <Text>Log in</Text>
            </TouchableOpacity>
            
        </View>
    )
}
