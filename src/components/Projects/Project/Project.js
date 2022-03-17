import { Wrapper, Image, Details } from "./Project.styles";

const Project = ({ title, link, image, technologies }) => (
  <Wrapper>
    <a href={link} target="_blank" rel="noreferrer">
      <h2>{title}</h2>
    </a>

    <Image>
        <a href={link} target="_blank" rel="noreferrer">
        <img src={image.url} alt={title} />
        </a>
    </Image>

    <Details>
      <p><strong>Details:</strong> {technologies && technologies.join(' | ')}</p>
    </Details>
  </Wrapper>
);

export default Project;
