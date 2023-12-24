import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/abelalbuez",
  },
  { iconName: "twitter", link: "https://twitter.com/abelalbuez" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/abelalbuez",
  }
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
