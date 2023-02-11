import { Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link to="/">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
            </div>
            {/* <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl">CSE JNU</Link>
                <Link to="/" className = {({isActive}) => isActive ? 'active' : ''}>Home</Link>
                <Link to="/login" className = {({isActive}) => isActive ? 'active' : ''}>Login</Link>
                <Link to="/register" className = {({isActive}) => isActive ? 'active' : ''}>Register</Link>
                <Link to="/about" className = {({isActive}) => isActive ? 'active' : ''}>About</Link>
                <Link to="/course" className = {({isActive}) => isActive ? 'active' : ''}>Courses</Link>
                <Link to="/faculties"className = {({isActive}) => isActive ? 'active' : ''}>Faculties</Link>
                <Link to="/hero"className = {({isActive}) => isActive ? 'active' : ''}>Our Heros</Link>
            </div> */}
        </div>
    );
};

export default Header;