import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import('/Users/popomore/projj/github.com/popomore/dva/packages/dva-example-user-dashboard/src/global.css');
import Layout from '/Users/popomore/projj/github.com/popomore/dva/packages/dva-example-user-dashboard/src/layouts/index.js';
import { routerRedux } from 'dva/router';


let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/" component={require('../index.js').default} />
    <Route exact path="/users" component={require('../users/page.js').default} />
  </Switch></Layout>
</Router>
  );
}
