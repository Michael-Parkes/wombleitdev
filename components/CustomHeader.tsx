import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = () => {
    const {top} = useSafeAreaInsets();
    return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.roundBtn}>
                    <Text style={{ color: Colors.background, fontWeight: '500', fontSize: 16}}>MP</Text>
                </TouchableOpacity>
                <View style={styles.searchSection}>
                    <Ionicons style={styles.searchIcon} name="search" size={20} color={Colors.dark}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor={Colors.dark}
                        />
                </View>
            </View>
    );
};
const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 80,
},
roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.wombleGreen,
    justifyContent: 'center',
    alignItems: 'center',
},
searchSection:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 0,
    paddingBottom: 10,
    color: Colors.dark,
},
searchIcon: {
    padding: 10,
},
});
export default CustomHeader;