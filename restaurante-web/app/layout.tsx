"use client"; // Esto convierte el archivo en un componente cliente

import './globals.css';
import { useAuth, AuthProvider } from '../lib/AuthContext'; // Importa el AuthContext

// Navbar como un componente separado
const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between bg-blue-500 px-8 py-4 text-white">
      <div className="text-2xl font-bold">Restaurante Mar de Fulles</div>
      <div className="flex space-x-6">
        <a href="/" className="hover:underline">Inicio</a>
        <a href="/carta" className="hover:underline">Carta</a>
        {isLoggedIn ? (
          <>
            <a href="/reservas" className="hover:underline">Reservas</a>
            <button onClick={logout} className="hover:underline">Logout</button>
          </>
        ) : (
          <>
            <a href="/auth/login" className="hover:underline">Login</a>
            <a href="/auth/register" className="hover:underline">Registro</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar /> {/* Incluye el Navbar */}
          {/* Contenido principal */}
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
