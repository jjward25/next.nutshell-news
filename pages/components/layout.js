import Footer from "./footer";
import HeaderMenu from "./header";

const Layout = ({children}) => {
    return (
        <div className="content">
            <HeaderMenu/>
            { children }
            <Footer/>
        </div>
    );
}

export default Layout;