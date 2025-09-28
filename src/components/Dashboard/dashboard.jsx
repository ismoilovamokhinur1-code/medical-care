import { Link } from "react-router-dom"

export const DashboardComp = () => {
    return (
        <div>
            <div>
                <Link to="/">Dashboard</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/report">Report</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </div>
    )
}