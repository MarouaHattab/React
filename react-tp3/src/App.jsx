import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MoviesProvider } from './context/MoviesContext';
import AppContext from './AppContext';
import AppRedux from './AppRedux';
import AppZustand from './AppZustand';
import './styles.css';

function App() {
  const [version, setVersion] = useState('redux'); // 'context', 'redux', or 'zustand'

  return (
    <div>
      {/* Version Switcher */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '15px 20px',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column'
      }}>
        <div style={{ 
          fontSize: '12px', 
          fontWeight: '600', 
          marginBottom: '5px',
          textAlign: 'center',
          opacity: 0.9,
          color: '#fff'
        }}>
          State Management
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setVersion('context')}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '13px',
              background: version === 'context' ? '#fff' : 'rgba(255,255,255,0.2)',
              color: version === 'context' ? '#667eea' : '#fff',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            Context
          </button>
          <button
            onClick={() => setVersion('redux')}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '13px',
              background: version === 'redux' ? '#fff' : 'rgba(255,255,255,0.2)',
              color: version === 'redux' ? '#667eea' : '#fff',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            Redux
          </button>
          <button
            onClick={() => setVersion('zustand')}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '13px',
              background: version === 'zustand' ? '#fff' : 'rgba(255,255,255,0.2)',
              color: version === 'zustand' ? '#667eea' : '#fff',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            Zustand
          </button>
        </div>
      </div>

      {/* Render appropriate version */}
      {version === 'context' && (
        <MoviesProvider>
          <AppContext />
        </MoviesProvider>
      )}

      {version === 'redux' && (
        <Provider store={store}>
          <AppRedux />
        </Provider>
      )}

      {version === 'zustand' && <AppZustand />}
    </div>
  );
}

export default App;
