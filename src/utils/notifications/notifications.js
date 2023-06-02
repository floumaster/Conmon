import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export const getFCMToken = async () => {
    let fcmToken = await AsyncStorage.getItem("fcmToken")
    if(!fcmToken){
        fcmToken = await messaging().getToken()
        console.log(fcmToken)
        await AsyncStorage.setItem("fcmToken", fcmToken)
    }
    return fcmToken
}

export const NotificationListener = (navigateToSpendings) => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    if(remoteMessage.notification.title === 'Complete your spending'){
      //console.log('navigation')
      navigateToSpendings()
    }
  });

  messaging()
  .getInitialNotification()
  .then(remoteMessage => {
    // if (remoteMessage) {
    //   console.log(
    //     'Notification caused app to open from quit state:',
    //     remoteMessage.notification,
    //   );
    // }
  });

  messaging().onMessage(async remoteMessage => {
    //console.log("REMOTE MESSAGE", remoteMessage)
  })
}