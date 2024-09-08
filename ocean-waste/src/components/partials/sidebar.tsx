import Link from 'next/link';

const Sidebar = () => {
    return (
      <aside className="w-64 bg-gray-100 p-4">
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/devices">
                Devices
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/sessions">
                Sessions
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/overview">
                Overview
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/dashboard/monitoring">
                Monitoring
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
};

export default Sidebar;
