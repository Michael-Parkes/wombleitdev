import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { suppliers } from '@/assets/data/home';
import { Link } from 'expo-router';


const Suppliers = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            padding: 15,
        }}>
            {suppliers.map((suppliers, index) => (
                <Link href={'/'} key ={index} asChild>
                    <TouchableOpacity> 
                        <View style={styles.categoryCard}>
                            <Image source={suppliers.img} style={styles.image}/>
                            <View style={styles.categoryBox}>
                                <Text style={styles.categoryText}>{suppliers.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Link>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    categoryCard: {
        width: 300,
        height: 250,
        backgroundColor: '#fff',
        marginEnd: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.06,
        borderRadius: 4,
    },
    categoryText: {
        padding: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    imageContainer: { },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    categoryBox: {},
});

export default Suppliers;