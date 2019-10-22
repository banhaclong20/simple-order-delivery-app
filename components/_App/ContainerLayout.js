import { Container } from "semantic-ui-react";
import HeroBanner from "../HeroBanner/banner";

export default ({ children, banner, bannerContent, size, content, text }) => (
  <>
    {banner && (
      <HeroBanner size={size} content={content} bannerContent={bannerContent} />
    )}
    <Container text={text} style={{ marginTop: "3em" }}>
      {children}
    </Container>
  </>
);
