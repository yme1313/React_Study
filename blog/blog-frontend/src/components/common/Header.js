import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
	height : 4rem;
`;

const UserInfo = styled.div`
	font-weight : 800;
	margin-right : 1rem;
`;

const Header = ({ user }) => {
	return (
		<>
			<HeaderBlock>
				<Wrapper>
					<Link to="/" className='logo'>
						REACTERS
					</Link>
					{user ? (
						<div className='right'>
							<UserInfo>{user.username}</UserInfo>
							<Button to="/logout">로그아웃</Button>
					</div>
					) : (
						<div className='right'>
							<Button to="/login">로그인</Button>
						</div>
					)}
				</Wrapper>
			</HeaderBlock>
			<Spacer />
		</>
	)
}

export default Header;