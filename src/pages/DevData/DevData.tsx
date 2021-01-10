import React, { ReactElement, useState } from 'react';
import Sider from 'antd/lib/layout/Sider';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Menu } from 'antd';
import PieChartOutlined from '@ant-design/icons/lib/icons/PieChartOutlined';
import { Route, Switch, useHistory } from 'react-router-dom';
import { PostStory } from './PostStory';
import { GetStory } from './GetStory';

export const DevData: React.FC = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (): void => setCollapsed((val) => !val);

  const goToPath = (path: string): void => {
    history.push(path);
  };

  const menuItems = [
    {
      key: 'post-story',
      path: '/dev-data/post-story',
      title: 'Post story',
      Icon: PieChartOutlined
    },
    {
      key: 'get-story',
      path: '/dev-data/get-story',
      title: 'Get story',
      Icon: PieChartOutlined
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
            <Route path="/dev-data/post-story" component={PostStory} />
            <Route path="/dev-data/get-story" component={GetStory} />
            <Route path="/dev-data" component={() => <div>Dev data</div>} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
