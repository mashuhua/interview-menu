import { useState } from 'react';
import { IRouteComponentProps, Link } from 'umi';
import { Input } from 'antd';
import ProLayout from '@ant-design/pro-layout';
import { PageContainer } from '@ant-design/pro-layout';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from './index.less';
import allRoutes from '@/config/routes';

export default function BasicLayout({ children }: IRouteComponentProps) {
  const [pathname, setPathname] = useState('/');

  let result:any = ""
  const findRoute = (array: any, item: any)=> {
    array.forEach((oneroute:any)=> {
      if (oneroute.path !== item &&  oneroute.routes) {
        findRoute(oneroute.routes, item)
      } else if (oneroute.path === item) {
        result = oneroute
      }
    })
    
  }
  findRoute(allRoutes.route.routes, pathname)
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
     <ProLayout
        {...allRoutes}
        layout="mix"
        title="react"
        fixSiderbar
        fixedHeader={true}
        location={{
          pathname,
        }}
        subMenuItemRender={(menuItemProps, defaultDom) => {
          return (
            <Link onClick={() => {
              setPathname(menuItemProps.path || '/');
            }} to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }}
        menuItemRender={(menuItemProps, defaultDom) => {
          return (
            <Link onClick={() => {
              setPathname(menuItemProps.path || '/');
            }} to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }}
        rightContentRender={() => (
          <div className={styles.rightIconContent}>
            <QuestionCircleOutlined /> admin
          </div>
        )}
      >
        <PageContainer/>
        <Input value={result['name']}  width={300} placeholder="导航名称" />
        {children}
      </ProLayout> 
    </div>
    
      
  );
}