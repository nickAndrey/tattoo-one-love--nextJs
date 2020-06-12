import styled from '@emotion/styled';
import Slider from 'react-slick';
import BlogPostPreview from '../BlogPostCard';
import Line from '../../UI/Line';
import Container from '../../Layouts/Container/Container';
import ShowMore from '../../UI/ShowMore';

const Mobile = ({ postsData, API_URL }) => {
  return (
    <MobileStyled>
      <Slider
        slidesToScroll={1}
        slidesToShow={1}
        dots={false}
        arrows={false}
        variableWidth={true}
        infinite={true}
      >
        {postsData.map((post) => (
          <BlogPostPreview key={post.id} post={post} API_URL={API_URL} />
        ))}
      </Slider>

      <Container>
        <Line />
        <ShowMore />
      </Container>
    </MobileStyled>
  );
};

const MobileStyled = styled.section`
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(30)};

  .imgWrap {
    width: ${(props) => props.theme.pixelToVieWidth(300)};
    height: ${(props) => props.theme.pixelToVieWidth(210)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
  }

  .slick-slide {
    margin-left: ${(props) => props.theme.pixelToVieWidth(30)};
  }
`;

export default Mobile;
