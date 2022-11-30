
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Authentication } from "./components/Authentication";
import { Profile } from "./components/Profile";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
