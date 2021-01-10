import React, { ReactElement, useState } from 'react';
import Sider from 'antd/lib/layout/Sider';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Menu } from 'antd';
import { Route, Switch, useHistory } from 'react-router-dom';
import { PostStory } from './PostStory';
import { GetStory } from './GetStory';
import { AppPaths, DevDataPaths } from 'src/common/constants';
import UploadOutlined from '@ant-design/icons/lib/icons/UploadOutlined';
import EyeOutlined from '@ant-design/icons/lib/icons/EyeOutlined';
import HomeOutlined from '@ant-design/icons/lib/icons/HomeOutlined';

export const DevData: React.FC = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (): void => setCollapsed((val) => !val);

  const goToPath = (path: string): void => {
    history.push(path);
  };

  const menuItems = [
    {
      key: DevDataPaths.PostStory,
      path: DevDataPaths.PostStory,
      title: 'Post story',
      Icon: UploadOutlined
    },
    {
      key: DevDataPaths.GetStory,
      path: DevDataPaths.GetStory,
      title: 'Get story',
      Icon: EyeOutlined
    },
    {
      key: AppPaths.Home,
      path: AppPaths.Home,
      title: 'Home',
      Icon: HomeOutlined
    }
  ];

  const renderSidebarMenu = (): ReactElement[] =>
    menuItems.map((item) => {
      const { key, title, path, Icon } = item;

      return (
        <Menu.Item key={key} icon={<Icon />} onClick={() => goToPath(path)}>
          {title}
        </Menu.Item>
      );
    });

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          {renderSidebarMenu()}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Switch>
            <Route path={DevDataPaths.PostStory} component={PostStory} />
            <Route path={DevDataPaths.GetStory} component={GetStory} />
            <Route
              path={DevDataPaths.Base}
              component={() => <div>Dev data</div>}
            />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
