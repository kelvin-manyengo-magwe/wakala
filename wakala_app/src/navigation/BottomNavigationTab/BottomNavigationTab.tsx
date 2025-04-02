import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Mno } from '../../Screens/Mno/Mno';
import { Settings } from '../../Screens/Settings/Settings';
import { Home } from '../../Screens/Home/Home';
import { Reports } from '../../Screens/Reports/Reports';
import { Transactions } from '../../Screens/Transactions/Transactions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';


 const Tab = createBottomTabNavigator();

export const BottomNavigationTab = () => {

        return (
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                                tabBarIcon: ({ color, size }) => {
                                  let iconName;
                                  // Set icons for each route
                                  switch (route.name) {
                                    case 'Home':
                                      iconName = 'home-outline';
                                      break;
                                    case 'Mno':
                                      iconName = 'cellular-outline';
                                      break;
                                    case 'Transactions':
                                      iconName = 'swap-horizontal-outline';
                                      break;
                                    case 'Reports':
                                        iconName = 'document-text-outline';
                                        break;
                                    case 'Settings':
                                        iconName = 'settings-outline';
                                        break;
                                              }
                                              return <Ionicons style={styles.iconsStyle} name={iconName} size={size} color={color} />;
                                            },
                                            tabBarActiveTintColor: '#177AD5', // Active tab color
                                            tabBarInactiveTintColor: 'gray', // Inactive tab color
                                            tabBarLabelStyle: { fontSize: 12 ,marginBottom: 4} // Styling the label below the icon


                    })}>
                                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                                <Tab.Screen name="Transactions" component={Transactions} />
                                <Tab.Screen name="Mno" component={Mno} />
                                <Tab.Screen name="Reports" component={Reports} />
                                <Tab.Screen name="Settings" component={Settings} />
                        </Tab.Navigator>

            )
    };
