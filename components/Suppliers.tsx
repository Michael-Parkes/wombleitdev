import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { suppliers } from '@/assets/data/home';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';


const Suppliers = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingLeft: 10,
            paddingBottom: 10,
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
        width: 250,
        height: 250,
        backgroundColor: Colors.background,
        marginEnd: 10,
        elevation: 2,
        paddingLeft:10,
        borderRadius: 4,
    },
    categoryText: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'semibold',
        color: Colors.offWhite,
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