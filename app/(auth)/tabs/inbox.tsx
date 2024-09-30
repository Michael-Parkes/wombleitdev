import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import auth from '@react-native-firebase/auth';
import { defaultStyles } from '@/constants/Styles';
import Categories from '@/components/Categories';
import Suppliers from '@/components/Suppliers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';

const Inbox = () => {
  const user = auth().currentUser;
  const headerHeight = useHeaderHeight();

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor: Colors.background}}
      contentContainerStyle={{
  
      }}>
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
export default Inbox;