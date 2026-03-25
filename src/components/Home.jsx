import vel from "../assets/velmani.png";

function Home() {
  return (
    <section className="page-shell">
      <div className="home-inner">
        <div className="left-content">
          <h1>I am Velmani M</h1>
          <h4>Full-Stack Developer &nbsp;·&nbsp; UI &amp; UX Designer &nbsp;·&nbsp; Software Developer</h4>
          <a href="Velmani_M_CV.pdf" download>
            <button className="custom-button">Download CV</button>
          </a>
          <div className="social-icons">
            <a href="mailto:velmani215@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn2.iconfinder.com/data/icons/social-media-2259/512/gmail-128.png" alt="Mail" />
            </a>
            <a href="https://wa.me/9600487102" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_23-whatsapp-128.png" alt="WhatsApp" />
            </a>
            <a href="https://twitter.com/@velmani7102" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="Twitter X" />
            </a>
            <a href="https://www.linkedin.com/in/velmani-m/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="image-container">
          <img src={vel} alt="Velmani M" />
        </div>
      </div>

      <footer>
        <p>&copy; 2026 &nbsp;<strong>Velmani M</strong>&nbsp; · &nbsp;<em>Crafted with passion &amp; precision</em></p>
      </footer>
    </section>
  );
}

export default Home;
