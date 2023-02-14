import { Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <div>
            <Link to="/" className='navStyle'>Home</Link>
                <Link to="/login" className='navStyle'>Log In</Link>
                <Link to="/register" className='navStyle'>Register</Link>
                </div>
                </div>
            
        </div>
    );
};

export default Header;