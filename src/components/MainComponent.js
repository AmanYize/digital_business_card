import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
export default function MainComponent() {
  return (
    <div className="Main-Component">
      <div className="profile-info">
        <h1>Amanuel Yizelkal</h1>
        <h2>Software Developer</h2>
        <h4>Digital Business Card</h4>
      </div>
      <div className="first-contact">
        <a href="mailto:amanexo19@gmail.com" target="_blank" rel="noreferrer">
          <button className="btn-1">
            <MdOutlineEmail />
            Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/amanuel-yizelkal-76ab87282/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-2">
            <CiLinkedin />
            Linkedin
          </button>
        </a>
      </div>
      <div className="info">
        <div className="about">
          <h3>About</h3>
          <p>
            I am a highly motivated software developer with a passion for
            creating innovative solutions to complex problems. I am eager to
            learn new technologies and have a strong foundation in programming
            languages and frame works such as JavaScript, Python, Flutter and
            React. Although I have no professional experience, I have worked on
            several personal projects that have helped me develop my skills. I
            am a team player with excellent communication skills and am
            passionate about collaborating with others to achieve common goals
          </p>
        </div>
        <div className="interest">
          <h3>Interests</h3>
          <p>
            I enjoy coding and debugging various programs. My passions are
            developing web and mobile apps, learning new technologies, solving
            puzzles, and traveling to different places. I love creating software
            solutions, exploring open source projects, playing chess, and
            listening to podcasts on various topics. I am also interested in
            software engineering, artificial intelligence. I like designing user
            interfaces, testing software.
          </p>
        </div>
      </div>
    </div>
  );
}
