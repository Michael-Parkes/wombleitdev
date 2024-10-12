import { Text, ScrollView, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import CategoriesSearch from '@/components/CategoriesSearch';

const Search = () => {
  const user = auth().currentUser;
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor: Colors.background}}
      contentContainerStyle={{
  
      }}>
        <Text style={styles.header}> Categories </Text>
        <CategoriesSearch/> 
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
export default Search;