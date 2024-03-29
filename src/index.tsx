import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'app';
import { setupStore } from './app/store';
import ErrorBoundary from './shared/ui/error-boundary';

const node = document.createElement('div');
node.id = 'app';
document.body.appendChild(node);

const root = createRoot(node);
root.render(
    <Provider store={setupStore()}>
        <ErrorBoundary>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>
);
