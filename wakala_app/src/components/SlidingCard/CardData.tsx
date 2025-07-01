import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Import all necessary icon sets
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


// --- STYLING FOR PROMOTIONAL CARDS ---
// Self-contained styles for all card variations.
const promoStyles = StyleSheet.create({
  // The main container for the content inside each card
  promoCard: {
    flex: 1, // Ensures the container fills the card
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  // Style for the primary icon of a card
  promoIcon: {
    marginBottom: 15,
    fontSize: 42, // Standardized icon size for consistency
  },
  // Container for the 2x2 grid of MNO logos
  logoGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    marginBottom: 12,
  },
  // Wrapper for each individual logo in the grid
  logoGridItem: {
    width: '50%',
    padding: 8,
  },
  // Styling for the logos within the grid
  gridMnoLogo: {
    width: '100%',
    height: 35,
    resizeMode: 'contain',
  },
  // Main title text for a card
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 8,
  },
  // Sub-text or descriptive text for a card
  promoText: {
    fontSize: 15,
    color: '#424242',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 15,
  },
});


// --- FINAL CARD DATA ARRAY ---
// An array of 5 cards with diverse, engaging, and promotional content.
export const CardData = [
  {
    // =========================================================================
    // ID 1: The new "Geographical Freedom" card, as requested.
    // Theme: Track your business from anywhere. No specific MNO.
    // =========================================================================
    id: 1,
    content: (
      <View style={promoStyles.promoCard}>
        <FontAwesome6 name="map-location-dot" style={[promoStyles.promoIcon, { color: '#00796B' }]} />
        <Text style={promoStyles.promoTitle}>Biashara Mkononi Mwako</Text>
        <Text style={promoStyles.promoText}>Fuatilia miamala na angalia salio la biashara yako popote ulipo nchini.</Text>
      </View>
    ),
  },
  {
    // ID 2: Creative grid card showing a core feature.
    // Theme: "All networks, one place."
    id: 2,
    content: (
      <View style={promoStyles.promoCard}>
        <Text style={promoStyles.promoTitle}>Mitandao Yote, Sehemu Moja</Text>
        <View style={promoStyles.logoGridContainer}>
          <View style={promoStyles.logoGridItem}>
            <Image style={promoStyles.gridMnoLogo} source={require('../../../assets/images/icons/airtel-money-logo.png')} />
          </View>
          <View style={promoStyles.logoGridItem}>
            <Image style={promoStyles.gridMnoLogo} source={require('../../../assets/images/icons/halo-pesa-logo.png')} />
          </View>
          <View style={promoStyles.logoGridItem}>
            <Image style={promoStyles.gridMnoLogo} source={require('../../../assets/images/icons/mpesa-logo.jpg')} />
          </View>
          <View style={promoStyles.logoGridItem}>
            <Image style={promoStyles.gridMnoLogo} source={require('../../../assets/images/icons/mixx-by-yas-logo.png')} />
          </View>
        </View>
        <Text style={promoStyles.promoText}>Fuatilia na udhibiti miamala yako yote kwa urahisi.</Text>
      </View>
    ),
  },
  {
    // ID 3: Generic "Security First" card.
    id: 3,
    content: (
      <View style={promoStyles.promoCard}>
        <MaterialCommunityIcons name="shield-check" style={[promoStyles.promoIcon, { color: '#0288D1' }]} />
        <Text style={promoStyles.promoTitle}>Usalama Kwanza</Text>
        <Text style={promoStyles.promoText}>Linda akaunti yako. Kamwe usimpe mtu yeyote nenosiri lako.</Text>
      </View>
    ),
  },
  {
    // ID 4: Generic "Get Reports" card.
    id: 4,
    content: (
      <View style={promoStyles.promoCard}>
        <Ionicons name="document-text" style={[promoStyles.promoIcon, { color: '#388E3C', fontSize: 40 }]} />
        <Text style={promoStyles.promoTitle}>Jipatie Ripoti Kirahisi</Text>
        <Text style={promoStyles.promoText}>Sasa unaweza kupakua ripoti zako zote kwa muundo wa PDF.</Text>
      </View>
    ),
  },
  {
    // ID 5: Generic "Get Help" card.
    id: 5,
    content: (
      <View style={promoStyles.promoCard}>
        <MaterialIcons name="headset-mic" style={[promoStyles.promoIcon, { color: '#F57C00' }]} />
        <Text style={promoStyles.promoTitle}>Pata Msaada Haraka</Text>
        <Text style={promoStyles.promoText}>Je, una swali? Timu yetu ipo tayari kukusaidia saa 24/7.</Text>
      </View>
    ),
  },
];