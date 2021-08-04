import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavBar.less';
import { Button, Typography, Input, Row, Col } from 'antd';

const { Text } = Typography;
const { Search } = Input;

export default function NavBar({ search, handleSearch }) {
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
            <Button ghost type="primary" size="large">
              Favorites
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row justify="end" align="middle" gutter={32}>
          <Col span={12}>
            <Search
              placeholder="input search text"
              value={search}
              onChange={handleSearch}
            />
          </Col>
          <Col>
            <Link to="/login">
              <Button ghost type="primary" size="large">
                Log In
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

NavBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
