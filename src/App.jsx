import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.module.css';
import LoginPage from './pages/LoginPage';
import TablePage from './pages/TablePage';
import AuthPage from './pages/AuthPage';

function Layout() {
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
