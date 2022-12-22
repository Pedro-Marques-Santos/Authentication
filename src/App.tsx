
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Authentication } from "./components/Authentication";
import { Profile } from "./components/Profile";
import { AuthenticationProvider } from "./context/authentication";

export function App() {

  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Authentication />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </AuthenticationProvider>
  );
}
