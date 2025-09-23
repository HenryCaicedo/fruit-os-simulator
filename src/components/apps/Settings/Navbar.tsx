import './styles/Navbar.css'

interface NavbarProps {
    children: string
}

export default function Navbar(props: NavbarProps) {
    return (
        <div className="navbar-bg">
            <h1>
                {props.children}
            </h1>
        </div>
    );
}