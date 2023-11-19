import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/app.scss';
import App from './App';

// i18n middleware cho chức năng đa ngôn ngữ
import { I18nextProvider } from 'react-i18next';
import i18n from './lang/index';

// middleware cho chức năng redux
import { Provider } from 'react-redux';
import store from './store/index';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
         <I18nextProvider i18n={i18n}>
            <React.Fragment>
                <App />
            </React.Fragment>
        </I18nextProvider>
    </Provider>
);

