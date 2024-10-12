import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '@/constants/Colors';
import { categories } from '@/assets/data/home';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/constants/firebaseConfig';

interface ListItem {
    Name: string;
    Category: string;
    Description: string;
    Condition: string;
    Model: string;
    Price: number;
}

const CategoriesSearch = () => {

    const [listItems, setListItems] = useState<ListItem[]>([]);

      useEffect(() => {
        const fetchMyStuff = async () => {
            try {
                const listItemsRef = collection(db, 'ListItem');
                const listItemDocs = await getDocs(listItemsRef);
                
                setListItems(listItemDocs.docs.map(x => ({
                    ...x.data()
                } as ListItem)));
            }
            catch (error) {
                console.log(error);
            }
        }
        
        fetchMyStuff();
      },[]);


    return (

        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingLeft: 15,
            paddingBottom: 30,
            gap: 8,
            backgroundColor: Colors.background,
        }}>
            {listItems.map((listItem, index) => (
                <View style={styles.smallPillButton} key={index}>
                    <Text style={styles.pillbuttonText}> {listItem.Name}</Text>
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
        flexDirection: 'column',
        minHeight: 35,
        minWidth: 80,
        marginRight: 10,
        borderRadius: 40,
        backgroundColor: Colors.wombleGreen,
        justifyContent: 'center',}
});

export default CategoriesSearch;