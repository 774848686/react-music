import React from 'react';
import logo from './logo.svg';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import { IconStyle } from './assets/iconfont/iconfont';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签,只能渲染一层路由，需要在次调用
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import store from './store/index';
import { Data } from './application/Singers/data';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Data>
        {renderRoutes(routes)}
        </Data>
      </HashRouter>
    </Provider>
  );
}

export default App;
