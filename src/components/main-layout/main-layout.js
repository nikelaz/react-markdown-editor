import './main-layout.css';

const MainLayout = ({ children }) => (
  <main className="mainLayout">
    {children}
  </main>
);

MainLayout.Column = ({ children }) => (
  <div className="mainLayout__col">
    {children}
  </div>
);

export default MainLayout;
