import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabA from '../screens/TabA';
import TabB from '../screens/TabB.js';
export default function Mainroute() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={TabA} />
            <Tab.Screen name="Tab2" component={TabB} />
        </Tab.Navigator>
    </NavigationContainer>

  )
}
