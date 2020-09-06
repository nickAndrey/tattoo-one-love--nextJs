import styled from '@emotion/styled';
import Link from 'next/link';
import logo from './images/logo--black.svg';
import { useRouter } from 'next/router';

const Logo = () => {
  const router = useRouter();
  return (
    <StyledLogo className='Logo'>
      <Link href='/'>
        <a className={router.pathname == '/' ? 'inactive' : ''}>
          <img src={logo} alt='Tattoo one love logo' />
        </a>
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.pixelToVieWidth(98)};
  ${({ theme }) => theme.flexCenter};
  clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
  height: 100%;

  img {
    width: ${({ theme }) => theme.pixelToVieWidth(45)};
  }

  ${({ theme }) => theme.mediaDesktop} {
    width: ${({ theme }) => theme.pixelToVieWidth1920(174)};
    height: 100%;

    img {
      width: ${({ theme }) => theme.pixelToVieWidth1920(105)};
    }
  }
`;

export default Logo;