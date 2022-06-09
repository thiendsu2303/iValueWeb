import { DefaultLayout } from '~/components/Layout';
import classNames from 'classnames/bind';
import styles from './duan.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';

const cx = classNames.bind(styles);

function duan() {
    return (
        <div>
            <Header />
            <div className={cx('bannerPage')}>
                <img
                    src={
                        'https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-summer-outdoor-scene-banner-image_249780.jpg'
                    }
                    className={cx('bannerImage')}
                />
                <h3 className={cx('titleLienHe')}>Dự án</h3>
            </div>
            <div className={cx('clear40')}></div>
            <div className={cx('container')}>
                <div className={cx('row-list-project')}>
                    <div className={cx('col-lg-4', 'col-md-6')}>
                        <div className={cx('img-project')}>
                            <img></img>
                        </div>
                    </div>
                    <div className={cx('col-lg-4', 'col-md-6')}>
                        <div className={cx('img-project')}>
                            <img></img>
                        </div>
                    </div>
                    <div className={cx('col-lg-4', 'col-md-6')}>
                        <div className={cx('img-project')}>
                            <img></img>
                        </div>
                    </div>
                    <div className={cx('col-lg-4', 'col-md-6')}>
                        <div className={cx('img-project')}>
                            <img></img>
                        </div>
                    </div>
                    <div className={cx('col-lg-4', 'col-md-6')}>
                        <div className={cx('img-project')}>
                            <img></img>
                        </div>
                    </div>
                    <div className={cx('col-lg-4', 'col-md-6')}>
                        <div className={cx('img-project')}>
                            <img></img>
                        </div>
                    </div>
                    <div className={cx('col-lg-4', 'col-md-6')}>
                        <div className={cx('img-project')}>
                            <img></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('clear40')}></div>
            <Sponsor />
            <div className={cx('clear40')}></div>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default duan;
