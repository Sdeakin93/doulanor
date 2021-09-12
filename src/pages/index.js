import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  maxWidth: 320,
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: "auto",
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none",
};

const docStyle = {
  listStyleType: "none",
  marginBottom: 24,
  color: "000000",
  textDecoration: "none",
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Services",
  color: "#000000",
};

const descriptionStyles = {
  color: "#232129",
  fontWeight: "italic",
};
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data

const about = [
  {
    text: "About Me",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
  },
  {
    text: "Qualifications",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
  },
];
const links = [
  {
    text: "Pre-Natal",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    badge: true,
  },
  {
    text: "Post-Natal",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    badge: true,
  },
  {
    text: "Night Nurse",
    url: "https://www.gatsbyjs.com/docs/reference/",
    badge: true,
  },
  {
    text: "Nanny",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Doula Services by Elanor Jarque-Deakin</title>
      <h1 style={headingStyles}>
        Coming Soon 🤰🏻
        <br />
        {/* <span style={headingAccentStyles}> in NJ/NYC </span> */}
        <span role="img" aria-label="Pregnant person emojis"></span>
      </h1>
      {/* <h4 style={descriptionStyles}>
        <i>
          Inclusive, LGBTQ+ friendly, doula services. Based out of Hoboken, NJ.
        </i>
      </h4>

      <h4 style={descriptionStyles}>What is a doula? </h4>
      <i>
        Doulas work to support pregnant people throughout their pregnancy and
        after. We help support you and your family through the experience of
        pregnancy, birth, and the early period with your baby.
      </i>

      {about.map((about) => (
        <p key={about.url} style={{ ...listItemStyles, color: about.color }}>
          <span>
            <a
              style={linkStyle}
              href={`${about.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {about.text}
            </a>
          </span>
        </p>
      ))}

      <p style={listStyles}>
        <p style={docStyle}>
          <a
            style={docStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </p>
        {links.map((link) => (
          <p key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </p>
        ))}
      </p> */}
    </main>
  );
};

export default IndexPage;
