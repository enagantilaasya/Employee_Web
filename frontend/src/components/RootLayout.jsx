import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='min-h-screen  p-20 bg-gray-100'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout