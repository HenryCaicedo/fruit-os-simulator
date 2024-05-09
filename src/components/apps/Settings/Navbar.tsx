import './styles/Navbar.css'

interface NavbarProps {
    children: string
}

export default function Navbar(props: NavbarProps) {
    return (
        <div className="background">
            <h1>
                {props.children}
            </h1>
        </div>
    );
}