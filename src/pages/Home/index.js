import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { DefaultLayout } from '~/components/Layout';
import PrincipalOperation from './OperatingPrincipal';
import Header from '~/components/Layout/DefaultLayout/Header';
import Slider from './Slider';
import HomeIntroduce from './HomeIntroduce';
import HomeService from './HomeService';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Header />
            <Slider />
            <HomeIntroduce />
            <HomeService />
            <PrincipalOperation />
            <div className={cx('clear40')}></div>
            <Sponsor />
            <div className={cx('clear40')}></div>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default Home;
