// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

function Navbar() {

    /* 3번에 대한 내용 */
    const activeStyle = {
        backgroundColor : 'lightpink'
    }

    return(
        /* a 태그 사용해서 페이지 이동시키기 */
        // <div>
        //     <ul>
        //         <li><a href={"/"}>Home</a></li>
        //         <li><a href={"/mypage"}>MyPage</a></li>
        //         <li><a href={"/login"}>Login</a></li>
        //     </ul>
        // </div>

        /* 2. react-router-dom 에서 지원하는 Link 기능 사용해보기 */
        // <div>
        //     <ul>
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/mypage">MyPage</Link></li>
        //         <li><Link to="/login">Login</Link></li>
        //     </ul>
        // </div>

        /* 
            3. <NavLink></NavLink> 컴포넌트 사용해보기 
            - NavLink 컴포넌트는 Link와 거의 동일하다.
            - 하지만 현재의 Nav의 상태가 active 인지에 대한 값을 이용하여
            - 스타일을 조작하거나 클래스의 이름을 변경할 수 있는 기능들이 추가되었다. 
        */

        <div>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined}>Home</NavLink></li>
                <li><NavLink to="/mypage"style={({isActive}) => isActive ? activeStyle : undefined}>MyPage</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive ? activeStyle : undefined}>Login</NavLink></li>
            </ul>
        </div>
    );

}

export default Navbar;