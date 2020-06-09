import styled from '@emotion/styled';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import postImg from './images/postImg.jpg';
import postImgTablet from './images/postImg--tablet.jpg';
import Container from '../../Layouts/Container/Container';

const AboutUsSection = () => {
  return (
    <AboutUsSectionStyled id='about-us'>
      <Container>
        <SectionTitle text='About Us' />
        <h3 className='title'>Tattoo one love the best salon in the Warsaw</h3>
        <picture>
          <source media='(min-width: 768px)' srcSet={postImgTablet} />
          <img src={postImg} alt='' />
        </picture>
        <p className='text'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor
        </p>
      </Container>
    </AboutUsSectionStyled>
  );
};

const AboutUsSectionStyled = styled.section`
  padding: ${(props) => props.theme.pixelToVieWidth(50)} 0;

  .title {
    font-weight: 700;
    font-size: ${(props) => props.theme.pixelToVieWidth(20)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    padding-right: 40%;
    color: ${(props) => props.theme.colors.darkBlue};
  }

  img {
    width: 100%;
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(25)};
  }

  .text {
    font-size: ${(props) => props.theme.pixelToVieWidth(13)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    font-weight: 400;
    color: ${(props) => props.theme.colors.darkBlue};
  }
  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    font-size: ${(props) => props.theme.pixelToVieWidth1920(26)};
    line-height: ${(props) => props.theme.pixelToVieWidth1920(30)};
    padding: ${(props) => props.theme.pixelToVieWidth1920(38)} 0
      ${(props) => props.theme.pixelToVieWidth1920(100)};
  }
`;

export default AboutUsSection;
