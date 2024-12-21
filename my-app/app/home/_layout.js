import { Slot } from 'expo-router';

// By default, routes fill the entire screen. Moving between them is a full-page transition with no animation. In native apps, users expect shared elements like headers and tab bars to persist between pages. These are created using layout routes.

export default function HomeLayout() {
    // Slot will render the current child route, think of this like the children prop in React
  return <Slot />;
}
