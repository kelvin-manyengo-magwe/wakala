import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Mno } from '../../Screens/Mno/Mno';
import { Settings } from '../../Screens/Settings/Settings';
import { Home } from '../../Screens/Home/Home';
import { Reports } from '../../Screens/Reports/Reports';
import { Transactions } from '../../Screens/Transactions/Transactions';



 const Tab = createBottomTabNavigator();

export const BottomNavigationTab = () => {

        return (
                    <Tab.Navigator>
                                <Tab.Screen name="Home" component={Home} />
                                <Tab.Screen name="Transactions" component={Transactions} />
                                <Tab.Screen name="Settings" component={Settings} />
                                <Tab.Screen name="Reports" component={Reports} />
                                <Tab.Screen name="Mno" component={Mno} />
                        </Tab.Navigator>

            )
    };
