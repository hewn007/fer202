import MyFooter from "../components/Footer/MyFooter";

export default function FooterPage() {
    return (
       <div className="footer">
       <h2 style={{textAlign: "center", maxWidth: 600, margin: "0 auto"}}></h2>
       <MyFooter author="Anh Quan" email = "phimhay1407@gmail.com" linkGithub="https://github.com/hewn007/fer202" />
       </div>
    );
}
