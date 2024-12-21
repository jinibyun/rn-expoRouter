import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ route }) => ({
            drawerItemStyle: route.name === 'index' || route.name === 'user/[id]' ? {} : { display: 'none' },
        })}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
            // href: {
            //     pathname: '/user/[id]',
            //     params: {
            //         id: 'jinibyun',
            //     },
            // },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
