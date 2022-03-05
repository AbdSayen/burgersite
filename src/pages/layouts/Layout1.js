import { Outlet, Routes } from 'react-router'
import Layout from '../../components/layout/Layout';

const Layout1 = () => {
    return (
        <div>
            <Layout >
                <Outlet />
            </Layout>
        </div>
    );
}

export default Layout1;