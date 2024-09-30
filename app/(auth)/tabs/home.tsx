import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import auth from '@react-native-firebase/auth';
import { defaultStyles } from '@/constants/Styles';
import Categories from '@/components/Categories';
import Suppliers from '@/components/Suppliers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';

const Page = () => {
  const user = auth().currentUser;
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor: Colors.background}}
      contentContainerStyle={{
  
      }}>
      <Text style={styles.header}> Categories </Text>
        <Categories/>        
        <Text style={styles.header}> Featured Suppliers </Text>
        <Suppliers />
        <Text style={styles.header}> Suppliers</Text>
        <Suppliers />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
    color: Colors.offWhite,
  },
  });
export default Page;
