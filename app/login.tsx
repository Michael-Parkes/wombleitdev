import { defaultStyles } from '@/constants/Styles';
import { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Button, TextInput, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import {FirebaseError} from 'firebase/app';
import Colors from '@/constants/Colors';

export default function Page () {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);

const logIn = async () => {
    setLoading(true);
    try{
        await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any){
        const err = e as FirebaseError;
        alert('Sign in failed:' + err.message);
    } finally {
        setLoading(false);
    }
};

const signUp = async () => {
    setLoading(true);
    try{
        await auth().createUserWithEmailAndPassword(email, password);
        alert('Check your email');
    } catch (e: any){
        const err = e as FirebaseError;
        alert('Registration failed' + err.message);
    } finally{
        setLoading(false);
    }
};


    return (
       <View style={styles.container}>
        <KeyboardAvoidingView>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Email'
                />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder='Password'
            />
        {loading ? (
          <ActivityIndicator size={'small'} style={{ margin: 28 }} />
        ) : (
          <>
        <View style={[defaultStyles.smallPillButton]}>
            <Button 
                onPress={signUp} 
                title="Create account" 
                />
        </View>
        <View style={[defaultStyles.smallPillButton]}>
            <Button 
                onPress={logIn}
                title="Login"
                color="#78C634"
                
                />
        </View>
          </>
        )}
        </KeyboardAvoidingView>
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.offWhite,
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    },
});