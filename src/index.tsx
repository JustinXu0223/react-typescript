import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import './index.less';
// import { HelloComponents } from './components';
import { HelloContainer } from './containers';
import { Provider } from 'react-redux';
import Store from './store'
/*<App />,
<HelloComponents name="test" enthusiasmLevel={10}/>,
* */
ReactDOM.render(
    <Provider store={Store}>
        <HelloContainer />
    </Provider>,

  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
