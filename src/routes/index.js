
import CategoriesScreen from '../pages/CategoriesScreen'
import SplashScreen from '../pages/SplashScreen'
import TabletsScreen from '../pages/TabletsScreen'
import ProductScreen from '../pages/ProductScreen'

import VideoScreen from '../pages/VideoScreen'

import CategoryScreen from '../pages/CategoryScreen'
import ContactPage from '../pages/ContactPage'

const publicRoutes = [
  { path: '/', component: SplashScreen, id: 0, exact: true },
  { path: '/tablets', component: TabletsScreen, id: 1},
  { path: '/campaing', component: CategoriesScreen, id: 2 },
  { path: '/category', component: CategoryScreen, id: 3 },
  { path: '/video', component: VideoScreen, id: 4 },
  { path: '/product', component: ProductScreen, id: 5 },
  { path: '/contact', component: ContactPage, id: 5 },

  ]
export { publicRoutes }