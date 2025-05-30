import { FlatList,View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity, } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { styles } from './styles';


 export const { width } = Dimensions.get("window");
 export const card_width = width * 0.9; // Make the card 80% of the screen width
 export const card_height = width * 0.5  //height of card 50% of screen


    interface slidingCardProps {
        cardData: {
                id: number; content: JSX.Element
        }[];
    }

    export const SlidingCard = React.memo(({ cardData }: slidingCardProps) => {        //making component ready to accept the props

            const [activeIndex, setActiveIndex] = useState(0);
            const flatListRef = useRef<FlatList>(null);     //creates mutable cards that persits upon changability. Initial value null when component initially renders
            const timer = useRef<ReturnType<typeof setInterval> | null>(null);  // gets the return of setInterval f(x) and return null if none


                  // Automatically slide every 3 seconds
                    useEffect(() => {
                      timer.current = setInterval(() => {
                        setActiveIndex((prevIndex) => {
                          const nextIndex = (prevIndex + 1) % cardData.length; // Loop back to first card
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
                                                          data={cardData}
                                                          horizontal
                                                          ref={flatListRef}
                                                          pagingEnabled
                                                          onMomentumScrollEnd={onScrollEnd}
                                                          showsHorizontalScrollIndicator={false}
                                                          keyExtractor={(item) => item.id}
                                                          renderItem={({ item }) => (
                                                              <View style={styles.card}>
                                                                      <Text style={styles.cardItems}>{item.content}</Text>
                                                              </View>
                                                  )}
                                                        getItemLayout={(data, index) => ({
                                                          length: width,       // width of one card (page)
                                                          offset: width * index,
                                                          index,
                                                        })}
                                                        onScrollToIndexFailed={({ index }) => {
                                                            setTimeout(() => {
                                                              flatListRef.current?.scrollToIndex({ index, animated: true });
                                                            }, 300);
                                                          }}
                                                            />



                                            {/* Dot Indicators */}
                                             <View style={styles.dotsContainer}>
                                                   {cardData.map((_, index) => (
                                                          <View
                                                               key={index}
                                                               style={[
                                                               styles.dot,
                                                               { backgroundColor: activeIndex === index ? "black" : "white" },
                                                               ]}
                                                          />
                                                   ))}
                                             </View>
                                  </SafeAreaView>
                            </SafeAreaProvider>
                        </>
                )
});