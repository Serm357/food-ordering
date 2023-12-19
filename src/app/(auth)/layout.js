const Layout = ({ children }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-pizza-bg bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default Layout;
