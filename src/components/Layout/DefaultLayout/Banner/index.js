import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import img from '../../../../assets/images/banner3.jpg';

const cx = classNames.bind(styles);

function Banner({ content }) {
    var bannerImgStyle = {
        backgroundImage: 'url(' + img + ')',
        width: '100%',
        height: '100%',
    };
    return (
        <div className={cx('bannerPage')}>
            {/* <img src={img} className={cx('bannerImage')} /> */}
            <div className={cx('bannerImage')}>
                <div className={cx('bg')} style={bannerImgStyle}></div>
            </div>
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
