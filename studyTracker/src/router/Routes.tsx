import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TestPage from '../pages/TestPage';


const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
    );
};

export default AppRoutes;