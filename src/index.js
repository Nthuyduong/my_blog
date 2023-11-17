import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import './styles/app.scss';
import App from './App';

import { I18nextProvider } from 'react-i18next';
import i18n from './lang/index';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <I18nextProvider i18n={i18n}>
         <React.Fragment>
            <App />
        </React.Fragment>
    </I18nextProvider>
);

