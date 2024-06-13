// src/components/partials/sidebar.tsx
const Sidebar = () => {
    return (
      <aside className="w-64 bg-gray-100 p-4">
        <nav>
          <ul>
            <li className="mb-4"><a href="/dashboard">Dashboard</a></li>
            <li className="mb-4"><a href="/dashboard/devices">Devices</a></li>
            <li className="mb-4"><a href="/dashboard/sessions">Sessions</a></li>
            <li className="mb-4"><a href="/dashboard/overview">Overview</a></li>
            <li className="mb-4"><a href="/dashboard/monitoring">Monitoring</a></li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  