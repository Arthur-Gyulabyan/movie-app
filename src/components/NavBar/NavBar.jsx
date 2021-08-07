import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavBar.less';
import { Button, Typography, Input, Row, Col } from 'antd';
import { AuthContext } from '../ProvideAuth/ProvideAuth';

const { Text } = Typography;
const { Search } = Input;

export default function NavBar({ search, handleSearch }) {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Row justify="space-between" align="middle" className="nav-bar">
      <Col span={12}>
        <Row justify="start" align="middle" gutter={32}>
          <Col>
            <Link to="/">
              <Text className="header" type="link">
                Show Time
              </Text>
            </Link>
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
            {isAuthenticated ? (
              <Button ghost type="primary" size="large" onClick={logout}>
                Log Out
              </Button>
            ) : (
              <Link to="/login">
                <Button ghost type="primary" size="large">
                  Log In
                </Button>
              </Link>
            )}
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
