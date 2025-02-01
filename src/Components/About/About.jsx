import "./About.css";
import about_img from "../../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Grooming leaders of tomorrow</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          possimus perspiciatis iure adipisci hic voluptates asperiores
          voluptatum consectetur quibusdam. Nihil corrupti repellat quo, quaerat
          eius placeat aspernatur ullam enim iusto! Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          possimus perspiciatis iure adipisci hic voluptates asperiores
          voluptatum consectetur quibusdam. Nihil corrupti repellat quo, quaerat
          eius placeat aspernatur ullam enim iusto!Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          possimus perspiciatis iure adipisci hic voluptates asperiores
          voluptatum consectetur quibusdam. Nihil corrupti repellat quo, quaerat
          eius placeat aspernatur ullam enim iusto!Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default About;
