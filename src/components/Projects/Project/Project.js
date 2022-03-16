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
      <p>Technologies: {technologies && technologies.join(', ')}</p>

      <a href={link} target="_blank" rel="noreferrer">
        Przejdź do strony
      </a>
    </Details>
  </Wrapper>
);

export default Project;
