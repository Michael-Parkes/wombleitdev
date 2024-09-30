import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const Account = () => {
  const user = auth().currentUser;

  return (
    <View>
      
      
      <Button title="Sign out" onPress={() => auth().signOut()} />
    </View>
  );
};
export default Account;