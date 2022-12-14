import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Svg, {Path} from 'react-native-svg';

import {isIphoneX} from 'react-native-iphone-x-helper';

import {Home} from '../screens';

import {COLORS, icons} from '../constants';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = props => {
  const {accessibilityState, children, onPress} = props; //De-strucure
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
          <Svg width={70} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
        </View>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          height: 60,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = props => {
  // eslint-disable-next-line no-undef
  if (isIphoneX()) {
    return (
      <View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}
        />
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

// function MyTabBar({state, descriptors, navigation}) {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate({name: route.name, merge: true});
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{flex: 1}}>
//             <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: ,
        // tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      // tabBar={props => <MyTabBar {...props} />}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="tabHome"
        component={Home}
        options={{
          //tabBarBadge: 1,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          //tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="tabSearch"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          //tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="tabLike"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.like}
              resizeMode="contain"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="tabUser"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
