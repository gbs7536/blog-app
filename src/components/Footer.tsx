import { Link } from "react-router-dom";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

// 타입 단언
const SunIcon = BsSun as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const MoonIcon = BsMoonFill as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

export default function Footer() {
  const context = useContext(ThemeContext);

  return (
    <footer>
      <Link to="/posts/new">글쓰기</Link>
      <Link to="/posts">게시글</Link>
      <Link to="/profile">프로필</Link>
      <>
        {context.theme === "light" ? (
          <SunIcon onClick={context.toggleMode} className="footer__theme-btn" />
        ) : (
          <MoonIcon onClick={context.toggleMode} className="footer__theme-btn" />
        )}
      </>
    </footer>
  );
}
