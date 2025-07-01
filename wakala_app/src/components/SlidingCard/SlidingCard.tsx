// THIS IS THE CORRECTED SlidingCard.js FILE

import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { styles } from './styles'; // Make sure this path is correct

export const { width } = Dimensions.get("window");
export const card_width = width * 0.9;
export const card_height = width * 0.5;

interface slidingCardProps {
    cardData: {
            id: number; content: JSX.Element
    }[];
}

export const SlidingCard = React.memo(({ cardData }: slidingCardProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);

    // Auto-scroll logic remains the same...
    useEffect(() => {
        timer.current = setInterval(() => {
          setActiveIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % cardData.length;
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            return nextIndex;
          });
        }, 5000); // 3 seconds for slide interval

        return () => {
          if (timer.current) clearInterval(timer.current);
        };
      }, [cardData.length]); // dependency on cardData.length

    const onScrollEnd = (event: any) => {
        const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(newIndex);
    };

    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView>
                    <FlatList
                        data={cardData}
                        horizontal
                        ref={flatListRef}
                        pagingEnabled
                        onMomentumScrollEnd={onScrollEnd}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()} // key must be a string

                        // ================== THE FIX IS HERE ==================
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                {/* DO NOT wrap item.content in a <Text> tag */}
                                {item.content}
                            </View>
                        )}
                        // ======================================================

                        getItemLayout={(data, index) => ({
                            length: width,
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
                                      // Made the active dot darker to stand out
                                      { backgroundColor: activeIndex === index ? "#333" : "transparent" },
                                      ]}
                                />
                          ))}
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    );
});