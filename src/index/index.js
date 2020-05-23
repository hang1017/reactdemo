import React from 'react';
import { Button } from 'antd';
import './index.css';

const IndexPage = ({ history }) => {

  const goToHome = () => {
    history.push({
      pathname: '/home',
      search: '?name=search'
    });
  }

  return <div>
    <p>this is index</p>
    <Button onClick={goToHome}>跳转到 Home</Button>

  </div>
}

export default IndexPage;