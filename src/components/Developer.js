function Developer() {
  return (
    <section className="developer-section">

      <div className="developer-container">

        <div className="developer-top">

          <span className="developer-badge">
            ✦ THE DEVELOPER
          </span>

          <div className="developer-line"></div>

        </div>

        <div className="developer-main">

          <div className="developer-intro">

            <p className="developer-small-text">
              Designed & developed by
            </p>

            <h2>
              Talal <span>Hassan</span>
            </h2>

            <p className="developer-role">
              Frontend Developer
            </p>

          </div>

          <div className="developer-divider"></div>

          <div className="developer-info">

            <p>
              I’m a passionate developer focused on creating
              modern, responsive and user-friendly web experiences.
              This Resume Builder was built to make creating a
              professional resume simple and accessible.
            </p>

            <div className="developer-links">

              <a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <span className="arrow">↗</span>
              </a>

              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <span className="arrow">↗</span>
              </a>

            </div>

          </div>

        </div>

        <div className="developer-footer">

          <span>© {new Date().getFullYear()} Talal Hassan</span>

          <span>Built with React &amp; ❤️</span>

        </div>

      </div>

    </section>
  );
}

export default Developer;