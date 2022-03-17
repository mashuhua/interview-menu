export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/menuOne',
        name: '菜单一',
        exact: false,
        routes: [
          {
            path: '/menuOne/childone',
            name: '子菜单1-1'
            
          },
          {
            path: '/menuOne/childtwo',
            name: '子菜单1-2'       
          }
        ],
      },
      {
        path: '/menuTwo',
        name: '菜单二',
        exact: false,
        routes: [
          {
            path: '/menuTwo/childone',
            name: '子菜单2-1'
            
          },
          {
            path: '/menuTwo/childtwo',
            name: '子菜单2-2'       
          }
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
};