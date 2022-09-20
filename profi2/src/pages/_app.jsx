import { store } from '@/store/store'
import {Provider} from 'react-redux';

import Layout from "../layout/layout";

import '../../global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  )
}
