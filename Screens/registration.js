import React from 'react';
import { View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Text } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Animated,
{ useSharedValue, useAnimatedStyle, withTiming, SlideInDown, SlideInUp, FadeIn, SlideInRight } from 'react-native-reanimated'

const Registration = () => {
    const navigation = useNavigation()
    const img = useSharedValue(0)
    const register = useSharedValue(0)
    const btn = useSharedValue(0)

    const imgStyle = useAnimatedStyle(() => {
        return (
            {
                transform: [{ translateX: withTiming(-img.value, { duration: 900 }) }]
            }
        )
    })
    const registerStyle = useAnimatedStyle(() => {
        return (
            {
                transform: [{ translateX: withTiming(-register.value, { duration: 1050 }) }]
            }
        )
    })

    const btnStyle = useAnimatedStyle(() => {
        return (
            {
                transform: [{ translateX: withTiming(-btn.value, { duration: 1200 }) }]
            }
        )
    })
    const handleSignUp = () => {
        img.value = responsiveWidth(100)
        register.value = responsiveWidth(100)
        btn.value = responsiveWidth(100)
        setTimeout(() => {
            navigation.navigate("login")
        }, 800);
    }

    useFocusEffect(
        React.useCallback(() => {
            img.value = 0
            register.value = 0
            btn.value = 0
        })
    )
    return (
        <Animated.ScrollView
        entering={FadeIn.duration(500)}
            style={{ flex: 1, backgroundColor: '#87CEEB' }}
        >
            <Animated.View entering={SlideInRight.duration(900)} style={[{ width: responsiveWidth(100), height: responsiveHeight(30), justifyContent: 'center', alignItems: 'center' },imgStyle]}>
                <Image source={require('../assets/welcomeImg.png')} style={{ width: responsiveWidth(70), height: responsiveHeight(30) }} />
            </Animated.View>
            <Animated.View entering={SlideInRight.duration(1050)} style={[{ width: responsiveWidth(100), height: responsiveHeight(54) },registerStyle]}>
                <Text style={{ color: "white", fontSize: responsiveFontSize(4), alignSelf: "center", fontWeight: "800", marginBottom: responsiveWidth(5) }}>Registration</Text>
                <View style={{ flex: 3, padding: responsiveWidth(2), justifyContent: "center" }}>
                    <View style={{ margin: responsiveWidth(2) }}>
                        <TextInput placeholder='Enter Your Name' style={{ padding: responsiveWidth(5), backgroundColor: "white", height: responsiveHeight(7), borderRadius: responsiveWidth(8), elevation: 5 }} />
                    </View>
                    <View style={{ margin: responsiveWidth(2) }}>
                        <TextInput placeholder='Enter Your Email' style={{ padding: responsiveWidth(5), backgroundColor: "white", height: responsiveHeight(7), borderRadius: responsiveWidth(8), elevation: 5 }} />
                    </View>
                    <View style={{ margin: responsiveWidth(2) }}>
                        <TextInput placeholder='Enter Your Email' style={{ padding: responsiveWidth(5), backgroundColor: "white", height: responsiveHeight(7), borderRadius: responsiveWidth(8), elevation: 5 }} />
                    </View>
                    <View style={{ margin: responsiveWidth(2) }}>
                        <TextInput placeholder='Enter Your Email' style={{ padding: responsiveWidth(5), backgroundColor: "white", height: responsiveHeight(7), borderRadius: responsiveWidth(8), elevation: 5 }} />
                    </View>
                    <View style={{ margin: responsiveWidth(2) }}>
                        <TextInput placeholder='Enter Your Email' style={{ padding: responsiveWidth(5), backgroundColor: "white", height: responsiveHeight(7), borderRadius: responsiveWidth(8), elevation: 5 }} />
                    </View>

                </View>
            </Animated.View>
            <Animated.View entering={SlideInRight.duration(1200)} style={[{ width: responsiveWidth(100), height: responsiveHeight(18), justifyContent: "center", alignItems: "center" },btnStyle]}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={{ width: responsiveWidth(80), height: responsiveHeight(7), backgroundColor: "#FFD700", borderRadius: responsiveWidth(10), elevation: 5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <Text style={{ color: "white", fontSize: responsiveFontSize(3), fontWeight: "bold" }}>Sign in</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", margin: responsiveWidth(3) }}>
                    <Text style={{ fontSize: responsiveFontSize(2), color: "white" }}>You already have account click to ? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("login")}
                    >
                        <Text style={{ fontSize: responsiveFontSize(2.1), color: "red" }}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </Animated.ScrollView>
    );
};

export default Registration;
