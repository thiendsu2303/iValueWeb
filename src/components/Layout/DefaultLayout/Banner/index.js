import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({content}) {
    return (
        <div className={cx('bannerPage')}>
            <img
                src={
                    'https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-summer-outdoor-scene-banner-image_249780.jpg'
                }
                className={cx('bannerImage')}
            />
            <h3 className={cx('titleLienHe')}>{content}</h3>
        </div>
    );
}

export default Banner;
