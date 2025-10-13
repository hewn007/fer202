import  Button from "react-bootstrap/Button";
import "./Footer.css";

function MyFooter({author, email, linkGithub}) {
  return (
    <footer>
      <p>Author:  Mai Bá ANh Quân</p>
      <p>Created by:phimhay1407@gmail.com  </p>
      <p>&copy; {new Date().getFullYear()} Mai Bá Anh Quân. All rights reserved </p>
      <Button variant="link" href="https://github.com/HuynhBaHieuu/FER202" >My Link Github:https://github.com/hewn007/fer202 </Button>
    </footer>
  )
}
export default MyFooter;
