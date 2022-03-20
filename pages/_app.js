// Redux
import { Provider } from 'react-redux'
import store from '../store'

import 'swiper/css'
import 'tailwindcss/tailwind.css'
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
