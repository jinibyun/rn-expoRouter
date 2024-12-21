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
    </View>
  );
}
