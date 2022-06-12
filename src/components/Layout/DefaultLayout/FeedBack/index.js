import classNames from 'classnames/bind';
import styles from './FeedBack.module.scss';

const cx = classNames.bind(styles);

const FeedBack = ({ content, image, name }) => {
    var serviceImgStyle = {
        backgroundImage: 'url(' + image + ')',
        width: '100%',
        height: '100%',
    };
    return (
        <div className={cx('service')}>
            <div className={cx('service-container')}>
                <div className={cx('service-img')}>
                    <div className={cx('bg')} style={serviceImgStyle}></div>
                </div>
                <div className={cx('service-content')}>
                    <div className={cx('content')}> {content} </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
