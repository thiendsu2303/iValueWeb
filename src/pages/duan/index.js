import { DefaultLayout } from '~/components/Layout';
import classNames from 'classnames/bind';
import styles from './duan.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import Banner from '~/components/Layout/DefaultLayout/Banner';
import SideBar from '~/components/Layout/DefaultLayout/SideBar';

// image
import projectimg1 from '../../assets/images/duan/duan1.jpg'
import projectimg2 from '../../assets/images/duan/duan2.jpg'
import projectimg3 from '../../assets/images/duan/duan3.jpg'
import projectimg4 from '../../assets/images/duan/duan4.jpg'
import projectimg5 from '../../assets/images/duan/duan5.jpg'
import projectimg6 from '../../assets/images/duan/duan6.jpg'
import projectimg7 from '../../assets/images/duan/duan7.jpg'
import projectimg8 from '../../assets/images/duan/duan8.jpg'
import projectimg9 from '../../assets/images/duan/duan9.jpg'
import projectimg10 from '../../assets/images/duan/duan10.jpg'

const cx = classNames.bind(styles);

function duan() {
    return (
        <div>
            <Header />
            <Banner content = 'DỰ ÁN' />

            <div className={cx('clear40')}></div>
            <div className={cx('container')}>
                <SideBar />

                <div className={cx('row', 'list-project')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg1}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Dự án Khách sạn Senla Boutique</strong></p>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'list-project')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg2}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Hệ thống kho chứa LPG - Khu công nghiệp Đình Vũ</strong></p>
                        </div>
                    </div>
                </div>

                <div className = 'clear80'></div>

                <div className={cx('row', 'list-project')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg3}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Dự án Tân Cảng Sài Gòn</strong></p>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'list-project')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg4}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Bệnh viện Chợ Rẫy</strong></p>
                        </div>
                    </div>
                </div>

                <div className = 'clear80'></div>

                <div className={cx('row', 'list-project-small')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg5}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Dự án Charm Plaza(Dĩ An, Bình Dương)</strong></p>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'list-project-small')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg6}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Làng du lịch Cù Lần</strong></p>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'list-project-small')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg7}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Hệ thống nổi hơi</strong></p>
                        </div>
                    </div>
                </div>

                <div className = 'clear80'></div>

                <div className={cx('row', 'list-project-small')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg8}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Vườn cao su tại Bình Phước</strong></p>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'list-project-small')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg9}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Dự án Picity</strong></p>
                        </div>
                    </div>
                </div>

                <div className={cx('row', 'list-project-small')}>
                    <div className={cx('item-project')}>
                        <div className = {cx('imageProject')}>
                            <img src = {projectimg10}></img>
                        </div>

                        <div className = 'clear20'></div>

                        <div className = {cx('paraProject')}>
                            <p><strong>Hệ thống máy móc phương tiện vận tải</strong></p>
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