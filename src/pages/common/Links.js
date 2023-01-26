import { Link, Outlet } from 'react-router-dom';

function Links() {
    return (
        <>
            <ul>
                <li>
                    <Link to ='/'>login</Link>
                </li>
                <li>
                    <Link to ='/register'>Register</Link>
                </li>
                <li>
                    <Link to ='/logged'>home</Link>
                </li>
                <li>
                    <Link to ='/logged/loguser'>about user</Link>
                </li>
                <li>
                    <Link to ='/logged/logout'>logout</Link>
                </li>
            </ul>
            <Outlet></Outlet>
        </>
    )
}

export default Links;