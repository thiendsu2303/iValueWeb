import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { DefaultLayout } from '~/components/Layout';
import PrincipalOperation from './OperatingPrincipal';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Header />   
            <hr />     
            <PrincipalOperation />
            <hr />
            <Sponsor />
            <hr />
            <Footer />    
        </div>
    );
}

export default Home;
