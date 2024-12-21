import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    // The tabs layout wraps the Bottom Tabs Navigator from React Navigation. You can use the options presented in the React Navigation documentation to customize the tab bar or each tab.
    // ref: https://reactnavigation.org/docs/bottom-tab-navigator/#options

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    // href: null,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
            <Tabs.Screen
                // Name of the dynamic route
                name="[user]"
                options={{
                    // Ensure the tab always links to the same href.
                    // href: '/evanbacon',
                    // OR you can use the href object.
                    href: {
                        pathname: '/[user]',
                        params: {
                            user: 'jinibyun',
                        },
                    },
                    title: 'User',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}
