import styled from 'styled-components';
import Button from './Button';
import LogoImg from './codeit.png';
import KakaoImg from './kakao.svg';
import Placeholder, { PlaceholderItem } from './Placeholder';

const A = styled(PlaceholderItem)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const B = styled(PlaceholderItem)`
  width: 400px;
`;

const C = styled(PlaceholderItem)`
  width: 200px;
`;

function App() {
  return (
    <div>
      <div>
        <h1>스타일 기본</h1>
        <Button.B1>Hello Styled!</Button.B1>
        <h1>다이나믹 스타일링</h1>
        <h2>기본</h2>
        <Button.B2 size="small">size="small"</Button.B2>
        <Button.B2 size="medium">size="medium"</Button.B2>
        <Button.B2 size="large">size="large"</Button.B2>
        <h2>둥근</h2>
        <Button.B2 size="small" round>
          size="small" round
        </Button.B2>
        <Button.B2 size="medium" round>
          size="medium" round
        </Button.B2>
        <Button.B2 size="large" round>
          size="large" round
        </Button.B2>
      </div>
      <hr />
      <Container>
        <Header>
          <Logo src={LogoImg} alt="codeit" />
          <Description>
            회원이 아니신가요? <Link href="#">회원가입 하기</Link>
          </Description>
        </Header>
        <form>
          <InputContainer>
            <Label>이메일</Label>
            <Input type="text" placeholder="styled@codeit.kr" error />
          </InputContainer>
          <InputContainer>
            <Label>비밀번호</Label>
            <Input type="text" placeholder="styled@codeit.kr" error />
          </InputContainer>
          <Btn type="submit">로그인 하기</Btn>
        </form>
        <KakaoButton />
      </Container>
      <hr />
      <div>
        <Placeholder>
          <A />
          <B />
          <C />
        </Placeholder>
      </div>
    </div>
  );
}

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  display: block;
  width: 200px;
`;

const Description = styled.div`
  color: #848187;
`;

const Link = styled.a`
  color: #6500c3;
  font-weight: bold;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const Label = styled.label`
  color: #e1c6f7;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  display: block;
  outline: none;
  padding: 8px 0;
  border-bottom: 2px solid ${({ error }) => (error ? '#f44336' : '#eeeeee')};

  ${({ error }) =>
    !error &&
    `
    &:focus {
      border-bottom: 2px solid #7760b4;
    }
  `}

  &::placeholder {
    color: #c4c5cd;
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const Btn = styled.button`
  background-color: #6500c3;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;
  border-radius: ${({ round }) => (round ? '9999px' : '8px')};

  &:hover,
  &:active {
    background-color: #7760b4;
  }
`;

const StyledBtn = styled(Btn)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  &:hover {
    background-color: #fee500;
  }

  ${Icon} {
    margin-right: 8px;
  }
`;

function KakaoButton({ className }) {
  return (
    <StyledBtn className={className}>
      <Icon src={KakaoImg} alt="kakao icon" />
      카카오 로그인
    </StyledBtn>
  );
}

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
  }

  ${Btn} {
    width: 100%;
    margin: 8px 0;
  }
`;

export default App;
