import {Link} from 'react-router-dom';
import './css/error_page.css';
export default function ErrorPage() {
    return (
        <div className='error'>
            <h1>404: Page Not Found</h1>
            {/* <a href="/">Go Home</a> */}
            <Link to='/' id='error_link'>Go Home</Link>
        </div>
    );
}