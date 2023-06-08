import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ContextApp from './ContextApp';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <ContextApp/>
  </StrictMode>
);
