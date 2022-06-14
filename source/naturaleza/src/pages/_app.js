import 'antd/dist/antd.css';
import "../styles/variable.less";
import { Provider } from "react-redux";

import "../styles/styles.scss";
import withReduxStore from "../common/withReduxStore";
import FetchInitData from "../components/other/FetchInitData";

const App = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <FetchInitData>
        <Component {...pageProps} />
      </FetchInitData>
    </Provider>
  );
};

export default withReduxStore(App);
