import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function FooterComponent() {
  return (
    <footer class="footer-component">
      <a href="https://t.me/aman_yize" target="_blank" rel="noreferrer">
        <FaTelegram className="footer-icon" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100080889922464"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className="footer-icon" />
      </a>
      <a href="https://github.com/AmanYize" target="_blank" rel="noreferrer">
        <FaGithub className="footer-icon" />
      </a>
    </footer>
  );
}
