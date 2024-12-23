import { Link, router } from 'expo-router';
import { Button } from 'react-native';

export default function Root() {

	return (
		<>
			<Link href="/home/messages">Navigate to nested route</Link>
			<Button title="Navigate to nested route" onPress={() => {router.push('/home/feed')}} />
		</>
	);
}
