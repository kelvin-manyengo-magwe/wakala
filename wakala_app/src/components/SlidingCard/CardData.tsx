import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // New icon set

// --- Styles for our beautiful promotion cards ---
// These styles are self-contained and work inside the 'card' style from the main stylesheet.
const promoStyles = StyleSheet.create({
  promoCard: {
      width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  promoIcon: {
    marginBottom: 15,
    color: '#D32F2F', // Changed the accent color to a nice deep red
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121', // Darker text for better contrast
    textAlign: 'center',
    marginBottom: 8,
  },
  promoText: {
    fontSize: 15,
    color: '#424242',
    textAlign: 'center',

    lineHeight: 22,
    paddingHorizontal: 10, // Ensures text doesn't touch the sides on smaller screens
  },
});

// --- The New Promotional Card Data (5 Cards) ---
export const CardData = [
  {
    id: 1,
    content: (
      <View style={promoStyles.promoCard}>
        <Ionicons name="sparkles-sharp" size={40} style={promoStyles.promoIcon} />
        <Text style={promoStyles.promoTitle}>Jipatie Ripoti Kirahisi!</Text>
        <Text style={promoStyles.promoText}>Sasa unaweza kupakua ripoti zako zote kwa muundo wa PDF.</Text>
      </View>
    ),
  },
  {
    id: 2,
    content: (
      <View style={promoStyles.promoCard}>
        <FontAwesome6 name="bullhorn" size={38} style={promoStyles.promoIcon} />
        <Text style={promoStyles.promoTitle}>Ofa Maalum Wikiendi Hii</Text>
        <Text style={promoStyles.promoText}>Pata kamisheni ya ziada ya 5% kwa kila muamala wa Tigo Pesa.</Text>
      </View>
    ),
  },
  {
    id: 3,
    content: (
      <View style={promoStyles.promoCard}>
        <MaterialCommunityIcons name="shield-check" size={42} style={promoStyles.promoIcon} />
        <Text style={promoStyles.promoTitle}>Usalama Kwanza</Text>
        <Text style={promoStyles.promoText}>Kumbuka, kamwe usimpe mtu yeyote nenosiri (password) yako.</Text>
      </View>
    ),
  },
  {
    id: 4,
    content: (
      <View style={promoStyles.promoCard}>
        <MaterialCommunityIcons name="headset" size={42} style={promoStyles.promoIcon} />
        <Text style={promoStyles.promoTitle}>Pata Msaada Haraka</Text>
        <Text style={promoStyles.promoText}>Timu yetu ipo tayari kukusaidia saa 24/7. Wasiliana nasi!</Text>
      </View>
    ),
  },
  {
    id: 5,
    content: (
      <View style={promoStyles.promoCard}>
        <MaterialIcons name="lightbulb" size={42} style={promoStyles.promoIcon} />
        <Text style={promoStyles.promoTitle}>Maboresho Mapya</Text>
        <Text style={promoStyles.promoText}>Tunaandaa zana mpya za kukusaidia kukuza biashara yako!</Text>
      </View>
    ),
  },
];