import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx'; 
import ProfilePage from './pages/ProfilePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import { useAuthStore } from './store/useAuthStore.js';
import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore.js';

function App() {
  const { user, checkAuth, loading, isAuthenticated } = useAuthStore();
  const { theme } = useThemeStore();
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setInitialCheckDone(true);
      }
    };

    initAuth();
  }, []);

  // Show loading only during initial check
  if (!initialCheckDone) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div data-theme={theme}>
        <Navbar />
        <Switch>
          {/* Public Routes */}
          <Route 
            exact 
            path="/login" 
            render={({ history }) => 
              !isAuthenticated ? (
                <LoginPage history={history} />
              ) : (
                <Redirect to="/" />
              )
            } 
          />
          <Route 
            exact
            path="/signup" 
            render={({ history }) => 
              !isAuthenticated ? (
                <SignUpPage history={history} />
              ) : (
                <Redirect to="/" />
              )
            } 
          />

          {/* Protected Routes */}
          <Route 
            exact 
            path="/" 
            render={() => 
              isAuthenticated ? <HomePage /> : <Redirect to="/login" />
            } 
          />
          <Route 
            path='/profile' 
            render={() => 
              isAuthenticated ? <ProfilePage /> : <Redirect to="/login" />
            } 
          />
          <Route 
            path='/settings' 
            render={() => 
              isAuthenticated ? <SettingsPage /> : <Redirect to="/login" />
            } 
          />
        </Switch>
        <Toaster/>
      </div>
    </BrowserRouter>
  );
}

export default App;