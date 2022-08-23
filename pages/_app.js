import '../styles/styles.css';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
