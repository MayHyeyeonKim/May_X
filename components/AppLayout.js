import PropTypes from 'prop-types';
import Link from 'next/link';
const AppLayout = ({children}) => {
    return (
        <div>
            <div>
                <Link href="/">May_X</Link>
                <Link href="/profile">profile</Link>
                <Link href="/signup">signup</Link>
            </div>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;

//Next.js 13 이상 버전에서 <Link> 컴포넌트 내부에 <a> 태그를 중첩해서 사용할 수 없음.