import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { categories } from '@/assets/data/home';


const Categories = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingLeft: 15,
            paddingBottom: 30,
        }}>
            {categories.map((category, index) => (
                <View style={styles.smallPillButton} key={index}>
                    <Text style={styles.pillbuttonText}> {category.text}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pillbuttonText: {
        padding: 8,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.offWhite,
    },
    smallPillButton:{
        flexDirection: 'row',
        minHeight: 35,
        minWidth: 80,
        marginRight: 10,
        borderRadius: 40,
        backgroundColor: Colors.wombleGreen,
        justifyContent: 'center',
        alignItems: 'center',}
});

export default Categories;