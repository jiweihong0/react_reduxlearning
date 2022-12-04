import { StyleSheet, View, Text, Buttom } from "react-native";
import {useSelector, useDispatch} from "react-redux";


export default function TabB() {
    const counter1 = useSelector(state => state.counter.counter1);
    const counter2 = useSelector(state => state.counter.counter2);

    return (
        <View style={styles.container}>
            <Text>Counter: {counter1}</Text>
            <Text>COunter2:{counter2}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F2F000',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '30%',
    },
  });