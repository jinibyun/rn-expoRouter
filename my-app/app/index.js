import { View, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/about">About</Link>
      {/* ...other links */}
      <Link href="/user/bacon">View user</Link>
      <Link href="/other" asChild>
        <Pressable>
          <Text>Other</Text>
        </Pressable>
      </Link>
      {/* dynamic route */}
      <Link
        href={{
          pathname: '/user/[id]',
          params: { id: 'jini byun' }
        }}>
          View user
        </Link>
        {/* By default, links "push" routes onto the navigation stack. It follows the same rules as navigation.navigate(). This means that the previous screen will be available when the user navigates back. You can use the replace prop to replace the current screen instead of pushing a new one. */}
        <Link push href="/feed">Feed</Link>
        <Link href="/testingStackLayout">Testing Stack</Link>
    </View>
  );
}
