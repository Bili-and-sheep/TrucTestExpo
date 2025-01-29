import React from 'react';
import * as yup from 'yup';
import { text } from 'express';
import { Link } from 'expo-router';
import { Image, ImageBackground } from 'expo-image';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


export default function LoginScreen() {


    const schema = yup.object().shape({
        email: yup.string().required('Email is required').email('Invalid email'),
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password must contain at least 8 characters'),
    });

    const FormComponent = () => {
        const {
            control,
            handleSubmit,
            formState: { errors },
        } = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                email: '',
                password: '',
            },
        });

        // const onPressSend = (formData) => {
        //     // Perform actions with the validated form data
        // };
    }


    const navigation = useNavigation();
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const imageUri = { uri: 'https://wallpaperaccess.com/full/1533684.jpg' };
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    return (
        <View style={styles.container}>

            {/* <Image
                style={styles.image}
                source="https://wallpaperaccess.com/full/882637.jpg"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={100}
                blurRadius={25}
              /> */}
            <ImageBackground source={imageUri} contentFit="cover" transition={100}
                blurRadius={25} style={styles.image}>
                {/* <Text style={styles.text}>Login</Text> */}

                <View>

                    <View style={styles.input}>
                        {/* <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                placeholder="Password"
                                secureTextEntry
                            />
                        )}
                        name="password"
                    />
                    {errors.password && <Text>{errors.password.message}</Text>} */}



                        <Text style={styles.inputLabel}>Email address</Text>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                            inputMode="email"
                            keyboardType="email-address"
                            onChangeText={email => setForm({ ...form, email })}
                            placeholder="john@example.com"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.email}
                        />

                    </View>

                    <View style={styles.input}>
                        {/* <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                placeholder="Email"
                            />
                        )}
                        name="email"
                    />
                    {errors.email && <Text>{errors.email.message}</Text>}
 */}

                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            autoCorrect={false}
                            clearButtonMode="while-editing"
                            // require={true}
                            onChangeText={password => setForm({ ...form, password })}
                            placeholder="********"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                            value={form.password} />
                    </View>


                    <View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("(tabs)")}
                        >

                            <View style={styles.btn} >
                                <Text style={styles.btnText}>Sign in</Text>
                            </View>
                        </TouchableOpacity>

                        {/* <Button title="Submit" onPress={handleSubmit(onPressSend)} /> */}

                    </View>


                </View>
                {/* <View>
                        <Link href="/(tabs)" style={styles.link}>Oui</Link>
                        </View> */}

            </ImageBackground>


        </View >


    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#5C068C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '700'
    },

    /** Form */
    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#075eec',
        textAlign: 'center',
    },
    formFooter: {
        paddingVertical: 24,
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    /** Input */
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#FFF',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
    },
    /** Button */
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#022E33',
        borderColor: '#022E33',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#64FFC7',
    },
    link: {
        margin: 10,
        textAlign: 'center',
    }
});