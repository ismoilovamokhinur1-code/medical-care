import { Navbar } from "../../components/Navbar"
import { Dashboard } from "../../components/Dashboard"

export const Layout = () => {
    return (
        <>
            <main>
                <Navbar/>
                <Dashboard/>
            </main>
        </>
    )
}