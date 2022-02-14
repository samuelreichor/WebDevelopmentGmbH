import React from "react";

import AppHeader from './components/common/Navbar';
import AppFooter from './components/common/Footer';
import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default App;