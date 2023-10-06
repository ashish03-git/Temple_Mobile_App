import React from 'react';
import { View, Image, TouchableOpacity, TextInput, ScrollView, Text } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Animated,
{ useSharedValue, useAnimatedStyle, withTiming, SlideInDown, SlideInUp, FadeIn, SlideInRight } from 'react-native-reanimated'


const Login = () => {

  const navigation = useNavigation()
  const img = useSharedValue(0)
  const login = useSharedValue(0)
  const btn = useSharedValue(0)

  const imgStyle = useAnimatedStyle(() => {
    return (
      {
        transform: [{ translateX: withTiming(-img.value, { duration: 900 }) }]
      }
    )
  })
  const loginStyle = useAnimatedStyle(() => {
    return (
      {
        transform: [{ translateX: withTiming(-login.value, { duration: 1050 }) }]
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
  const handleSignIn = () => {
    img.value = responsiveWidth(100)
    login.value = responsiveWidth(100)
    btn.value = responsiveWidth(100)
    setTimeout(() => {
      navigation.navigate("register")
    }, 500);
  }

  useFocusEffect(
    React.useCallback(() => {
      img.value = 0
      login.value = 0
      btn.value = 0
    })
  )
  return (
    <Animated.ScrollView
      entering={FadeIn.duration(500)}
      style={{ flex: 1, backgroundColor: '#87CEEB' }}
    >
      <Animated.View entering={SlideInRight.duration(900)} style={[{ width: responsiveWidth(100), height: responsiveHeight(45), justifyContent: 'center', alignItems: 'center' }, imgStyle]}>
        <Image source={require('../assets/welcomeImg.png')} style={{ width: responsiveWidth(70), height: responsiveHeight(50) }} />
      </Animated.View>
      <Animated.View entering={SlideInRight.duration(1050)} style={[{ width: responsiveWidth(100), height: responsiveHeight(35) }, loginStyle]}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: responsiveFontSize(4), fontWeight: "800" }}>Login</Text>
          <Text style={{ color: "white", fontSize: responsiveFontSize(2), fontWeight: "600" }}>Welcome back you'av been missed</Text>
        </View>
        <View style={{ flex: 3, padding: responsiveWidth(2), justifyContent: "center" }}>
          <View style={{ margin: responsiveWidth(2) }}>
            <TextInput placeholder='Email' style={{ padding: responsiveWidth(5), backgroundColor: "white", height: responsiveHeight(7), borderRadius: responsiveWidth(8), elevation: 5 }} />
          </View>
          <View style={{ margin: responsiveWidth(2) }}>
            <TextInput placeholder='Password' secureTextEntry style={{ padding: responsiveWidth(5), backgroundColor: "white", height: responsiveHeight(7), borderRadius: responsiveWidth(8), elevation: 5 }} />
          </View>
          <TouchableOpacity style={{ margin: responsiveWidth(2) }} >
            <Text style={{ color: "white", fontSize: responsiveFontSize(2), alignSelf: "flex-end" }}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View entering={SlideInRight.duration(1150)} style={[{ width: responsiveWidth(100), height: responsiveHeight(20), justifyContent: "center", alignItems: "center" }, btnStyle]}>
        <TouchableOpacity
          onPress={handleSignIn}
          style={{ width: responsiveWidth(80), height: responsiveHeight(7), backgroundColor: "#FFD700", borderRadius: responsiveWidth(10), elevation: 5, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
          <Text style={{ color: "white", fontSize: responsiveFontSize(3), fontWeight: "bold" }}>Sign in</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", margin: responsiveWidth(3) }}>
          <Text style={{ fontSize: responsiveFontSize(2), color: "white" }}>Don't have account click to ? </Text>
          <TouchableOpacity
            onPress={handleSignIn}
          >
            <Text style={{ fontSize: responsiveFontSize(2.1), color: "red" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.ScrollView>
  );
};

export default Login;
