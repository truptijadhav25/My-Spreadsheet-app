// src/pages/index.js or src/app/page.js

import Search from '../components/Search';
import Grid from '../components/Grid';

export default function Home() {
    return (
        <div className="p-4">
            <Search />
            <Grid />
        </div>
    );
}
