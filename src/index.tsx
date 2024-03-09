// import '@arcgis/core/assets/esri/themes/dark/main.css';
import './styles/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import AppContextProvider from './contexts/AppContextProvider';
import ProtectLayout from './pages/ProtectLayout/ProtectLayout';
import { BrowserRouter } from 'react-router-dom';

(async () => {
    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ReduxProvider store={store}>
                <AppContextProvider>
                    <BrowserRouter>
                        <ProtectLayout />
                    </BrowserRouter>
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>
    );
})();
