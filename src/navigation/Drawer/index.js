import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TransitionPresets } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS, SCREENS, SIZES } from '../../constants';
import DrawerScreen from './DrawerScreen';
import Animated from 'react-native-reanimated';

import UserMainLayout from '../../navigation/BottomBar/BottomTabNavigation';

import { Text, View } from 'react-native';
import QuickServiceSheet from '../../components/Modals/QuickServiceSheet';


const Drawer = createDrawerNavigator();

export function ScreenHybhaiYe() {
  return (
    <View>
      <Text>Screeeeeen hyyy yar</Text>
    </View>
  );
}

export default function DrawerNavigator( props ) {
  const USERTYPE = useSelector( state => state.UserType.value );
  const [SELECTEDTAB, SetSELECTEDTAB] = useState( SCREENS.Home );
  const [quickService, setQuickService] = React.useState( false );

  const dispatcher = useDispatch();
  const [progress, setProgress] = useState( new Animated.Value( 0 ) );
  const scale = Animated.interpolateNode( progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  } );

  const borderRadius = Animated.interpolateNode( progress, {
    inputRange: [0, 1],
    outputRange: [1, 25],
  } );

  const animatedStyle = {
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    transform: [{ scale }],
  };

  const setSelectestab = async item => {
    SetSELECTEDTAB( item );
    // await dispatcher(TabAction.setSelectedTab(item));
  };

  return (
    <>
      <Drawer.Navigator
        initialRouteName={SCREENS.UserMainLayout}
        overlayColor={COLORS.transparent}
        drawerType={'slide'}
        drawerStyle={{
          width: '60%',
          backgroundColor: COLORS.transparent,
        }}
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          gestureEnabled: true,
          swipeEnabled: false,
        }}
        drawerContent={props => {
          setTimeout( () => {
            setProgress( props.progress );
          }, 0 );
          return <DrawerScreen {...props} drawerAnimation={animatedStyle} />;
        }}>
        <Drawer.Screen name={SCREENS.UserMainLayout}>
          {props => (
            <UserMainLayout {...props} drawerAnimation={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
      <QuickServiceSheet
        isVisible={quickService}
        onClose={() => setQuickService( false )}
      />
    </>
  );
}
