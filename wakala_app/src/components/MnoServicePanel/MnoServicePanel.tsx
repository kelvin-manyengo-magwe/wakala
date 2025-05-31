import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type MnoServicePanelProps = {
  selectedMno: string;
  setSelectedMno: (mno: string) => void;
};

const logos = [
  { id: 'vodacom', logo: require('../../../assets/images/icons/mpesa-logo.jpg') },
  { id: 'halotel', logo: require('../../../assets/images/icons/halo-pesa-logo.png') },
  { id: 'mixx', logo: require('../../../assets/images/icons/mixx-by-yas-logo.png') },
  { id: 'airtel', logo: require('../../../assets/images/icons/airtel-money-logo.png') },
  { id: 'ttcl', logo: require('../../../assets/images/icons/t-pesa-logo.jpg') },
];

export const MnoServicePanel = ({ selectedMno, setSelectedMno }: MnoServicePanelProps) => {
  return (
    <View>
      <Text style={styles.headerText}>Orodha ya mitandao</Text>
      <View style={styles.mnoContainer}>
        <View style={styles.mnoUpperRow}>
          {logos.slice(0, 3).map((mno) => (
            <TouchableOpacity
              key={mno.id}
              style={styles.mnoLogoContainer}
              onPress={() => setSelectedMno(mno.id)}
            >
              <Image
                resizeMode="cover"
                style={[
                  styles.mnoLogo,
                  selectedMno !== mno.id && { opacity: 0.3 },
                ]}
                source={mno.logo}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.mnoBottomRow}>
          {logos.slice(3).map((mno) => (
            <TouchableOpacity
              key={mno.id}
              style={styles.mnoLogoContainer}
              onPress={() => setSelectedMno(mno.id)}
            >
              <Image
                resizeMode="cover"
                style={[
                  styles.mnoLogo,
                  selectedMno !== mno.id && { opacity: 0.3 },
                ]}
                source={mno.logo}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};
