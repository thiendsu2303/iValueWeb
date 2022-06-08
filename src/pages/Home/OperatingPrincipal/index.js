import classNames from 'classnames/bind';
import styles from './principal.module.scss';

const cx = classNames.bind(styles);

function principalOperation() {
    return (
        <div className= {cx("mainPrincipalOperation")} >
            <div className= {cx("col-md-6")} data-aos="fade-left">
                <div className = {cx('principalBlock')}>
                    <h3 className= {cx("principalTitle")}>Phương châm hoạt động</h3>
                    <ul class= {cx('principalList')}>
                        <li><i class="far fa-check-square"></i> Phong cách phục vụ uy tín - chuyên nghiệp - thân thiện đã góp phần xây dựng nên thương hiệu vận chuyển hàng hóa hàng đầu tại Việt Nam</li>
                        <li><i class="far fa-check-square"></i> Nhiệt tình, chu đáo, chuyên nghiệp và luôn bảo vệ các quyền hợp pháp của khách hàng</li>
                        <li><i class="far fa-check-square"></i> Tối đa hóa giá trị gia tăng cho khách hàng</li>
                        <li><i class="far fa-check-square"></i> Đặc biệt đánh giá cao “LÒNG TIN” bởi sự hài lòng của khách hàng.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default principalOperation;