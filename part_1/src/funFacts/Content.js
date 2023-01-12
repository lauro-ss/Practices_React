import '../funFactsCss/Content.css'


export default function Content() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul className='content-list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}