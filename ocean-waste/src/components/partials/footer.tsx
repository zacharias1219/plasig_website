import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-200 p-4">
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
        </footer>
    );
};

export default Footer;
