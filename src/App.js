import React,{useEffect,useState} from 'react';
import './App.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Table, } from 'antd';

const { Header, Content, Footer } = Layout;
function App() {
  const columns = [
    {
      title: 'Repository Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Stargazers count',
      key: 'stars',
      dataIndex: 'stars',
    },
    {
      title: 'Owner',
      key: 'oname',
      dataIndex: 'oname',
    },
  ];
  const [repos, setReepos] = useState([]);
  const getRepo = async ()=>{
  const response = await fetch('https://api.github.com/users/AbbasAttar/repos')
  const data = await response.json()
  setReepos(data);

  
 }
  useEffect(() => {
    getRepo();
  },[])
 
    function handleFunc(item)
    {
      return({
        key: item.id,
        name: item.name,
        stars:item.stargazers_count,
        oname: item.owner.login
      })
    }
    
    
  
  return(
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item >{"Info"}</Menu.Item>
        
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>List</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
      <Table columns={columns} dataSource={ repos.map(handleFunc)} />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}></Footer>
  </Layout>
  );
}

export default App;
