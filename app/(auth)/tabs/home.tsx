import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import auth from '@react-native-firebase/auth';
import { defaultStyles } from '@/constants/Styles';
import Categories from '@/components/Categories';
import Suppliers from '@/components/Suppliers';
import { SafeAreaView } from 'react-native-safe-area-context';

const Page = () => {
  const user = auth().currentUser;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.header}> Placeholder Categories Text </Text>
        <Categories/>
        <Text style={styles.header}> Placeholder Suppliers Text </Text>
        <Suppliers />
        <View>
            <Button title="Sign out" onPress={() => auth().signOut()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    top: 30,
    backgroundColor: Colors.background,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  });
export default Page;
