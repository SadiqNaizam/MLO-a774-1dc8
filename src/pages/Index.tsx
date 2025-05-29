import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/LoginPage/LoginCard';

/**
 * LoginPage serves as the main entry point for the login functionality.
 * It utilizes MainAppLayout for the overall page structure (centering content)
 * and renders the LoginCard component, which contains all login-related UI and logic.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The LoginCard is the central element of this page. 
        It's responsible for its own styling (max-width, background, etc.) 
        and internal state management for the login form.
        The MainAppLayout ensures it's centered on the screen.
      */}
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
