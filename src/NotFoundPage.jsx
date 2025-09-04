import {Link} from 'react-router'
export default function PageNotFound(){
    return (
        <div>
        <h1>404 Page not found</h1>
        <Link to="/">Link to the home page</Link>
        <a href="/">Home from A</a>
        </div>
)
}