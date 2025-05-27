import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Svg, { Defs, ClipPath, Ellipse, Rect } from 'react-native-svg';
import { styles } from './styles';



const { width, height } = Dimensions.get('window');

export const OnBoarding = ({ navigation }) => {
  // Convert clip-path percentages to actual coordinates
  const ellipseWidth = width * 0.4;  // 40% of screen width
  const ellipseHeight = height * 0.7; // 70% of screen height
  const ellipseX = width * 0.71;     // 71% from left
  const ellipseY = height * 0.72;     // 72% from top

  return (
    <View style={styles.container}>


      {/* SVG for clip-path effect */}
      <View style={styles.svgContainer}>
        <Svg height="100%" width="100%" style={styles.svg}>
          <Defs>
            <ClipPath id="clip">
              <Ellipse
                cx={ellipseX}
                cy={ellipseY}
                rx={ellipseWidth}
                ry={ellipseHeight}
              />
            </ClipPath>
          </Defs>

          {/* Red background (outside oval) */}
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="#E63946"
          />

          {/* White oval (inside) */}
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="white"
            clipPath="url(#clip)"
          />
        </Svg>
      </View>

      {/* Content */}
      <View style={styles.content}>

                <Image style={styles.wakalaShopsImage} source={ require('../../../../assets/images/icons/wakala-shops.jpg') } />

                <Text style={styles.mainText}>
                     Fuatilia biashara yako kwa makini, urahisi na wakati
                </Text>
      </View>

      {/* Button */}
      <View style={styles.bottomContainer}>
                        {/* Your bottom-positioned element */}
                        <TouchableOpacity style={styles.bottomButton}
                                            onPress={() => navigation.navigate('LandingScreen')}>
                            <Text style={styles.buttonText}>Endelea</Text>
                        </TouchableOpacity>
      </View>

    </View>
  );
};



