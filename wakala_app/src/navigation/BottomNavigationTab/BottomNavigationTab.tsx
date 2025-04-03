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
                        screenOptions={({ route,
                                    }) => ({
                                tabBarIcon: ({ color, size }) => {
                                  let iconName;
                                  // Set icons for each route
                                  switch (route.name) {
                                    case 'Nyumbani':
                                      iconName = 'home-outline';
                                      break;
                                    case 'Mitandao':
                                      iconName = 'cellular-outline';
                                      break;
                                    case 'Miamala':
                                      iconName = 'swap-horizontal-outline';
                                      break;
                                    case 'Ripoti':
                                        iconName = 'document-text-outline';
                                        break;
                                    case 'Mipangilio':
                                        iconName = 'settings-outline';
                                        break;
                                              }
                                              return <Ionicons style={styles.iconsStyle} name={iconName} size={size} color={color} />;
                                            },
                                            tabBarActiveTintColor: styles.tabBarActiveTintColor.color, // Active tab color
                                            tabBarInactiveTintColor: styles.tabBarInActiveTintColor.color, // Inactive tab color
                                            tabBarLabelStyle: styles.tabBarLabelStyle, // Styling the label below the icon,
                                            headerStyle: styles.headerStyle,
                                            headerTitleStyle: styles.headerTitleStyle,
                                            headerTitleContainerStyle: styles.headerTitleContainerStyle,


                    })}>
                                <Tab.Screen name="Nyumbani" component={Home} options={{ headerShown: false }} />
                                <Tab.Screen name="Miamala" component={Transactions} />
                                <Tab.Screen name="Mitandao" component={Mno} />
                                <Tab.Screen name="Ripoti" component={Reports} />
                                <Tab.Screen name="Mipangilio" component={Settings} />
                        </Tab.Navigator>

            )
    };
