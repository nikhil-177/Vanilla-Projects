import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <div className='navbar'>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}