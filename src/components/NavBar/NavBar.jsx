import React from 'react';
import './NavBar.less';
import { Button, Typography, Input, Row, Col } from 'antd';

const { Text } = Typography;
const { Search } = Input;

export default function NavBar() {
  return (
    <Row justify="space-between" align="middle" className="nav-bar">
      <Col span={12}>
        <Row justify="start" align="middle" gutter={32}>
          <Col>
            <Text className="header" type="link">
              Show Time
            </Text>
          </Col>
          <Col>
            <Button type="success" size="small">
              Favorites
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row justify="end" align="middle" gutter={32}>
          <Col span={16}>
            <Search placeholder="input search text" enterButton />
          </Col>
          <Col>
            <Button type="primary">Log In</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
