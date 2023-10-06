import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, SlideInDown, SlideInUp, FadeIn } from 'react-native-reanimated'

const Welcome = () => {
    const navigation = useNavigation()

    const topValue = useSharedValue(0)
    const btnValue = useSharedValue(0)
    const topStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withTiming(-topValue.value, { duration: 800 }) }]
        }
    })
    const btnStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withTiming(btnValue.value, { duration: 800 }) }]
        }
    })
    const handlePress = () => {
        topValue.value = responsiveHeight(70)
        btnValue.value = responsiveHeight(40)
        setTimeout(() => {
            navigation.navigate("login")
          },400);
    }
    useFocusEffect(
        React.useCallback(() => {
            topValue.value = 0
            btnValue.value = 0
        })
    )

    return (

        <Animated.View entering={FadeIn.duration(700)} style={{ flex: 1, backgroundColor: "#87CEEB" }}>
            <Animated.View entering={SlideInUp.duration(900)} style={[{ flex: 5, justifyContent: "center", alignItems: "center" },topStyle]}>
                <LottieView
                    source={require("../assets/welcomeImg1.json")}
                    style={{ width: responsiveWidth(90), height: responsiveHeight(60) }}
                    autoPlay
                    loop
                />
            </Animated.View>

            <Animated.View entering={SlideInDown.duration(900)} style={[{ flex: 1, justifyContent: "center", alignItems: "center" },btnStyle]}>
                <TouchableOpacity
                    onPress={handlePress}
                    style={{ width: responsiveWidth(80), height: responsiveHeight(8), backgroundColor: "#FFD700", borderRadius: responsiveWidth(10), elevation: 5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Text style={{ color: "white", fontSize: responsiveFontSize(3), fontWeight: "bold" }}>Namaste</Text>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}

export default Welcome