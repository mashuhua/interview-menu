import { defineConfig } from 'umi';
import routes from './routes';
const  { route } = routes

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    hmr: false
  },
  antd: {
    compact: true
  },
  fastRefresh: {},
  routes: route.routes,
});