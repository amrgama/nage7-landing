import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import MainLoading from './components/MainLoading.jsx'
import "./styles/app.css";
import i18n from "../public/locales/i18n.js";
import App from './App.jsx';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<MainLoading />}>
    <Toaster />
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Suspense>,
)
