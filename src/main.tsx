import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import userStore from '@/store/userStore'
import chatStore from '@/store/chatStore'
import { Provider } from 'mobx-react'
import Loading from '@/pages/loading'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading/>}>
    <BrowserRouter>
      <Provider user={userStore} chat={chatStore}>
        <App/>
      </Provider>
    </BrowserRouter>
  </Suspense>
)
