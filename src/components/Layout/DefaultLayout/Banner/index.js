import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import img from '../../../../assets/images/banner.jpg';

const cx = classNames.bind(styles);

function Banner({ content }) {
    return (
        <div className={cx('bannerPage')}>
            <img src={img} className={cx('bannerImage')} />
            <h3 className={cx('titleLienHe')} data-aos="zoom-in">
                {content}
                <br></br>
                <div className={cx('subtitle')}>
                    <a href="/">TRANG CHỦ</a> / {content}
                </div>
            </h3>
        </div>
    );
}

export default Banner;
