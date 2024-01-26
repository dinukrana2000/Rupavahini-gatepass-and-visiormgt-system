import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { createClient } from '@supabase/supabase-js';
//import { SessionContextProvider } from '@supabase/auth-helpers-react';

/*const supabase = createClient(
  "https://xbxmtdrtqcfpspivelkf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhieG10ZHJ0cWNmcHNwaXZlbGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyNTg2NTAsImV4cCI6MjAyMTgzNDY1MH0.MzunNF8Geja4w19a2ewxdDlOnEQrvp0f_ZsL3w1GvM4"
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <SessionContextProvider supabaseClient={supabase}>*/}
    <App />
    {/*</SessionContextProvider>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
