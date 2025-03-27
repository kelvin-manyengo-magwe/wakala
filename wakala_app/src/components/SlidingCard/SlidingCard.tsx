import { FlatList,View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity, } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { styles } from './styles';


 export const { width } = Dimensions.get("window");
 export const card_width = width * 0.9; // Make the card 80% of the screen width
 export const card_height = width * 0.5  //height of card 50% of screen


    export const SlidingCard = () => {

            const [activeIndex, setActiveIndex] = useState(0);
            const flatListRef = useRef<FlatList>(null);     //creates mutable cards that persits upon changability. Initial value null when component initially renders
            const timer = useRef<ReturnType<typeof setInterval> | null>(null);  // gets the return of setInterval f(x) and return null if none

                const data = [
                    {id: 1, color: "#E0E0E0", text: "Card 1"},
                    {id: 2, color: "#FF0000", text: "Card 2"},
                    {id: 3, color: "#4DB6AC", text: "Card 3"},
                    {id: 4, color: '#E53935', text: "Card 4"},
                ];

                  // Automatically slide every 3 seconds
                    useEffect(() => {
                      timer.current = setInterval(() => {
                        setActiveIndex((prevIndex) => {
                          const nextIndex = (prevIndex + 1) % data.length; // Loop back to first card
                          flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                          return nextIndex;
                        });
                      }, 3000);

                      return () => {
                        if (timer.current) clearInterval(timer.current); // Clear timer on unmount
                      };
                    }, []);

                    // Handle manual scrolling
                    const onScrollEnd = (event: any) => {
                      const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
                      setActiveIndex(newIndex);
                    };


                return (
                        <>
                            <SafeAreaProvider styles={styles.slidingCardContainer}>
                                  <SafeAreaView>
                                            <FlatList
                                                    data={data}
                                                    horizontal
                                                    ref={flatListRef}
                                                    pagingEnabled
                                                    onMomentumScrollEnd={onScrollEnd}
                                                    showsHorizontalScrollIndicator={false}
                                                    keyExtractor={(item) => item.id}
                                                    renderItem={({ item }) => (
                                                      <View style={[styles.card, { backgroundColor: item.color }]}>
                                                        <Text style={styles.cardText}>{item.text}</Text>
                                                      </View>
                                                    )}
                                                  />


                                            {/* Dot Indicators */}
                                             <View style={styles.dotsContainer}>
                                                   {data.map((_, index) => (
                                                          <View
                                                               key={index}
                                                               style={[
                                                               styles.dot,
                                                               { backgroundColor: activeIndex === index ? "black" : "gray" },
                                                               ]}
                                                          />
                                                   ))}
                                             </View>
                                  </SafeAreaView>
                            </SafeAreaProvider>



                        </>
                )
}