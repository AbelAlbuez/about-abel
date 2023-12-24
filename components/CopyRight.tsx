import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} Abel Albuez <br /> Created by
        <a
          href="https://www.instagram.com/abelalbuez/"
          target="_blank"
          rel="noreferrer"
        >
          Abel Albuez
        </a>
      </p>
    </div>
  );
};

export default CopyRight;
