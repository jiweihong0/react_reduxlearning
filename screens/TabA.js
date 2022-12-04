import {StyleSheet, View, Text, Button } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, multiply, divide} from "../actions/Counter";

export default function TabA() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter1);
  const counter2 = useSelector(state => state.counter.counter2);
    return (
        <View style={styles.container}>
            <Text>Counter: {counter}</Text>
            <Text>Counter: {counter2}</Text>
            <Button title="+" onPress={() => dispatch(increment())} />
            <Button title="-" onPress={() => dispatch(decrement())} />
            <Button title="*" onPress={() => dispatch(multiply())} />
            <Button title="/" onPress={() => dispatch(divide())} />
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
  