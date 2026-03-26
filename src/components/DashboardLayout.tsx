const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;