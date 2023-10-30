// components/Layout.js
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/Navbar";
import '@/app/globals.css'

const Layout = ({ children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
