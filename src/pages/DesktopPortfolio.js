import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';


const DesktopPortfolio = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    window.open("https://github.com/ghulam-mujtaba5");
  }, []);

  const onPath2520IconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ghulamujtabaofficial/");
  }, []);

  const onBlackInstagramIcon1Click = useCallback(() => {
    window.open("https://www.instagram.com/ghulamujtabaofficial/");
  }, []);

  const onHOMETextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='homeBox']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onABOUTMEText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutMe']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRESUMETextClick = useCallback(() => {
    navigate("/resume");
  }, [navigate]);

  const onPROJECTSText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='pROJECTSText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCONTACTTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactBox']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPath2521IconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/ghulamujtabaofficial");
  }, []);

  const onBlackInstagramIcon2Click = useCallback(() => {
    window.open("https://www.instagram.com/ghulamujtabaofficial/");
  }, []);

  const onGroupIcon2Click = useCallback(() => {
    window.open("https://github.com/ghulam-mujtaba5");
  }, []);



  return (
    <div
      className={css`
        width: 100%;
        height: 3072px;
        position: relative;
        background-color: var(--color-lightsteelblue);
        overflow: hidden;
        text-align: left;
        font-size: var(--font-size-5xl-8);
        color: var(--white);
        font-family: var(--font-inter);
      `}
    >
      <section
        className={css`
          position: absolute;
          height: 17.35%;
          width: 100%;
          top: 0%;
          right: 0%;
          bottom: 82.65%;
          left: 0%;
        `}
        data-scroll-to="homeBox"
      />
      <header
        className={css`
          position: absolute;
          top: 26px;
          right: 37px;
          background-color: var(--color-steelblue);
          width: 696px;
          height: 60px;
        `}
      />
      <section
        className={css`
          position: absolute;
          width: 100%;
          top: 534px;
          right: 0%;
          left: 0%;
          border-radius: var(--br-7xl) var(--br-7xl) 0px 0px;
          background-color: var(--color-steelblue);
          height: 490px;
        `}
        data-scroll-to="aboutMe"
      />
      <div
        className={css`
          position: absolute;
          height: 1.25%;
          top: 19.66%;
          left: 50px;
          font-size: var(--font-size-12xl-8);
          display: inline-block;
          width: 178px;
        `}
      >
        ABOUT ME
      </div>
      <div
        className={css`
          position: absolute;
          top: 26px;
          left: 0px;
          width: 150px;
          height: 60px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: var(--color-steelblue);
            width: 150px;
            height: 60px;
          `}
        />
      </div>
      <img
        className={css`
          position: absolute;
          height: 0.78%;
          top: 1.46%;
          bottom: 97.75%;
          left: 73.7px;
          max-height: 100%;
          width: 22.4px;
          cursor: pointer;
        `}
        loading="lazy"
        alt=""
        src="/group.svg"
        onClick={onGroupIconClick}
      />
      <img
        className={css`
          position: absolute;
          height: 0.78%;
          top: 1.46%;
          bottom: 97.75%;
          left: 109.1px;
          max-height: 100%;
          width: 22.4px;
          cursor: pointer;
        `}
        loading="lazy"
        alt=""
        src="/path-2520.svg"
        onClick={onPath2520IconClick}
      />
      <img
        className={css`
          position: absolute;
          height: 0.78%;
          top: 1.46%;
          bottom: 97.75%;
          left: 38.2px;
          max-height: 100%;
          width: 22.4px;
          overflow: hidden;
          cursor: pointer;
        `}
        loading="lazy"
        alt=""
        src="/blackinstagramicon-1.svg"
        onClick={onBlackInstagramIcon1Click}
      />
      <div
        className={css`
          position: absolute;
          top: 43px;
          right: 633px;
          display: inline-block;
          width: 75px;
          height: 24px;
          cursor: pointer;
        `}
        onClick={onHOMETextClick}
      >
        HOME
      </div>
      <div
        className={css`
          position: absolute;
          top: 43px;
          right: 482px;
          display: inline-block;
          width: 130px;
          height: 24px;
          cursor: pointer;
        `}
        onClick={onABOUTMEText1Click}
      >
        ABOUT ME
      </div>
      <div
        className={css`
          position: absolute;
          top: 43px;
          right: 354px;
          display: inline-block;
          width: 107px;
          height: 24px;
          cursor: pointer;
        `}
        onClick={onRESUMETextClick}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          RESUME
        </p>
      </div>
      <div
        className={css`
          position: absolute;
          top: 43px;
          right: 203px;
          display: inline-block;
          width: 130px;
          height: 24px;
          cursor: pointer;
        `}
        onClick={onPROJECTSText1Click}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          PROJECTS
        </p>
        <p
          className={css`
            margin: 0;
          `}
        >
          &nbsp;
        </p>
      </div>
      <div
        className={css`
          position: absolute;
          top: 43px;
          right: 62px;
          display: inline-block;
          width: 120px;
          height: 24px;
          cursor: pointer;
        `}
        onClick={onCONTACTTextClick}
      >
        CONTACT
      </div>
      <div
        className={css`
          position: absolute;
          height: 1.66%;
          top: 8.27%;
          left: 50px;
          font-size: 51.6px;
          font-weight: 600;
          display: inline-block;
          width: 510px;
        `}
      >
        GHULAM MUJTABA
      </div>
      <div
        className={css`
          position: absolute;
          height: 3.74%;
          top: 10.71%;
          left: 50px;
          display: inline-block;
          width: 489px;
        `}
      >
        Software Engineer with a keen interest in developing innovative
        solutions through the integration of emerging technologies.
      </div>
      <div
        className={css`
          position: absolute;
          height: 1.25%;
          top: 6.64%;
          left: 50px;
          font-size: var(--font-size-12xl-8);
          font-weight: 600;
          display: inline-block;
          width: 140px;
        `}
      >
        Hello, i’m
      </div>
      <section
        className={css`
          position: absolute;
          width: 92.01%;
          top: 642px;
          left: 3.47%;
          font-size: var(--font-size-5xl);
          line-height: 44px;
          font-family: var(--font-inter);
          color: var(--white);
          text-align: left;
          display: flex;
          align-items: center;
          height: 315px;
        `}
      >
        I am a dedicated software engineer with a strong foundation in computer
        science since my school years. My fascination lies in crafting
        software-based solutions that leverage cutting-edge technologies. I am
        committed to staying at the forefront of emerging trends and
        technologies to create innovative solutions that make a positive impact.
      </section>
      <div
        className={css`
          position: absolute;
          top: 1073px;
          left: 50px;
          font-size: var(--font-size-13xl);
          line-height: 26px;
          font-family: var(--font-poppins);
          display: flex;
          align-items: center;
          width: 190px;
          height: 42px;
        `}
        data-scroll-to="pROJECTSText"
      >
        PROJECTS
      </div>
      <section
        className={css`
          position: absolute;
          height: 36.91%;
          width: 91.53%;
          top: 37.89%;
          right: 4.51%;
          bottom: 25.2%;
          left: 3.96%;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          min-height: 1134px;
          text-align: left;
          font-size: var(--font-size-base);
          color: var(--color-black);
          font-family: var(--font-poppins);
        `}
      >
        <div
          className={css`
            height: 570px;
            width: 356px;
            position: relative;
            z-index: 2;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 99.47%;
              width: 99.47%;
              top: 0.53%;
              right: 0%;
              bottom: 0%;
              left: 0.53%;
              border-radius: var(--br-xl);
              background-color: var(--color-lavender);
              box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
            `}
          />
          <a
            className={css`
              position: absolute;
              top: 91.05%;
              left: 16.01%;
              text-decoration: underline;
              line-height: 26px;
              color: inherit;
            `}
            href="https://github.com/ghulam-mujtaba5"
            target="_blank"
          >
            Live Preview
          </a>
          <a
            className={css`
              position: absolute;
              top: 91.05%;
              left: 62.92%;
              text-decoration: underline;
              line-height: 26px;
              color: inherit;
            `}
            href="https://github.com/ghulam-mujtaba5"
            target="_blank"
          >
            View Code
          </a>
          <img
            className={css`
              position: absolute;
              height: 45.61%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 54.39%;
              left: 0%;
              border-radius: var(--br-xl) var(--br-xl) 0px 0px;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
              object-fit: cover;
            `}
            loading="lazy"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 50.35%;
              left: 16.43%;
              font-size: var(--font-size-9xl);
              line-height: 26px;
              font-weight: 500;
              white-space: pre-wrap;
              text-align: center;
            `}
          >
            Billing Software
          </div>
          <div
            className={css`
              position: absolute;
              width: 83.74%;
              top: 55.61%;
              left: 8.01%;
              font-size: var(--font-size-lg);
              line-height: 26px;
              font-weight: 300;
              color: var(--dark-content);
              display: flex;
              align-items: center;
            `}
          >
            I developed a Desktop bookshop billing software using Java, JavaFX,
            Maven, and Spring, showcasing my skills in full-stack development
            and software architecture.
          </div>
          <div
            className={css`
              position: absolute;
              width: 83.74%;
              top: 82.81%;
              left: 8.01%;
              line-height: 26px;
              display: flex;
              align-items: center;
              color: var(--color-darkslateblue);
            `}
          >
            <span
              className={css`
                width: 100%;
              `}
            >
              <span className={css``}>Tech stack :</span>
              <span
                className={css`
                  font-size: var(--font-size-sm);
                  font-weight: 300;
                `}
              >
                <span
                  className={css`
                    color: var(--dark-content);
                  `}
                >{` `}</span>
                <span className={css``}>Java , Java Fx, Maven, Spring</span>
              </span>
            </span>
          </div>
          <img
            className={css`
              position: absolute;
              height: 3.51%;
              width: 5.34%;
              top: 91.58%;
              right: 40.25%;
              bottom: 4.91%;
              left: 54.41%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            loading="lazy"
            alt=""
            src="/akariconsgithubfill.svg"
          />
          <img
            className={css`
              position: absolute;
              height: 2.63%;
              width: 3.99%;
              top: 92.11%;
              right: 87.22%;
              bottom: 5.26%;
              left: 8.79%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
        <div
          className={css`
            height: 570px;
            width: 350px;
            position: relative;
            z-index: 1;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 99.47%;
              width: 99.57%;
              top: 0.53%;
              right: -0.11%;
              bottom: 0%;
              left: 0.54%;
              border-radius: var(--br-xl);
              background-color: var(--color-lavender);
              box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
            `}
          />
          <a
            className={css`
              position: absolute;
              top: 91.05%;
              left: 16.03%;
              text-decoration: underline;
              line-height: 26px;
              color: inherit;
            `}
            href="https://github.com/ghulam-mujtaba5"
            target="_blank"
          >
            Live Preview
          </a>
          <a
            className={css`
              position: absolute;
              top: 91.05%;
              left: 63%;
              text-decoration: underline;
              line-height: 26px;
              color: inherit;
            `}
            href="https://github.com/ghulam-mujtaba5"
            target="_blank"
          >
            View Code
          </a>
          <img
            className={css`
              position: absolute;
              height: 45.61%;
              width: 100.09%;
              top: 0%;
              right: -0.09%;
              bottom: 54.39%;
              left: 0%;
              border-radius: var(--br-xl) var(--br-xl) 0px 0px;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
              object-fit: cover;
            `}
            loading="lazy"
            alt=""
            src="/rectangle-8@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 50.35%;
              left: 7.43%;
              font-size: var(--font-size-9xl);
              line-height: 26px;
              font-weight: 500;
              text-align: center;
            `}
          >
            Desktop Application
          </div>
          <div
            className={css`
              position: absolute;
              width: 83.8%;
              top: 55.61%;
              left: 8%;
              font-size: var(--font-size-lg);
              line-height: 26px;
              font-weight: 300;
              color: var(--dark-content);
              display: flex;
              align-items: center;
            `}
          >
            Designed and implemented a desktop application using Java and
            JavaFX, exploring various UI design patterns and MVC architecture
            for learning purposes.
          </div>
          <div
            className={css`
              position: absolute;
              width: 83.8%;
              top: 82.81%;
              left: 8%;
              line-height: 26px;
              display: flex;
              align-items: center;
              color: var(--color-darkslateblue);
            `}
          >
            <span
              className={css`
                width: 100%;
              `}
            >
              <span className={css``}>Tech stack :</span>
              <span
                className={css`
                  font-size: var(--font-size-sm);
                  font-weight: 300;
                  color: var(--dark-content);
                `}
              >
                {" "}
                Java ,Java Fx, Maven, Spring
              </span>
            </span>
          </div>
          <img
            className={css`
              position: absolute;
              height: 3.51%;
              width: 5.34%;
              top: 91.58%;
              right: 86.66%;
              bottom: 4.91%;
              left: 8%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            loading="lazy"
            alt=""
            src="/akariconslinkchain.svg"
          />
          <img
            className={css`
              position: absolute;
              height: 3.51%;
              width: 5.34%;
              top: 91.58%;
              right: 40.2%;
              bottom: 4.91%;
              left: 54.46%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            loading="lazy"
            alt=""
            src="/akariconsgithubfill-1.svg"
          />
        </div>
        <div
          className={css`
            height: 570px;
            width: 350px;
            position: relative;
            z-index: 0;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 99.47%;
              width: 99.57%;
              top: 0.53%;
              right: -0.09%;
              bottom: 0%;
              left: 0.51%;
              border-radius: var(--br-xl);
              background-color: var(--color-lavender);
              box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
            `}
          />
          <a
            className={css`
              position: absolute;
              top: 91.05%;
              left: 16%;
              text-decoration: underline;
              line-height: 26px;
              color: inherit;
            `}
            href="http://ghulammujtaba.tech/"
            target="_blank"
          >
            Live Preview
          </a>
          <div
            className={css`
              position: absolute;
              top: 91.05%;
              left: 62.97%;
              text-decoration: underline;
              line-height: 26px;
            `}
          >
            <a
              className={css`
                color: inherit;
              `}
              href="https://github.com/ghulam-mujtaba5"
              target="_blank"
            >{`  View Code
            `}</a>
          </div>
          <img
            className={css`
              position: absolute;
              height: 45.61%;
              width: 100.09%;
              top: 0%;
              right: -0.09%;
              bottom: 54.39%;
              left: 0%;
              border-radius: var(--br-xl) var(--br-xl) 0px 0px;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
              object-fit: cover;
            `}
            loading="lazy"
            alt=""
            src="/rectangle-4@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 50.35%;
              left: 9.71%;
              font-size: var(--font-size-9xl);
              line-height: 26px;
              font-weight: 500;
              text-align: center;
            `}
          >
            MY Portfolio Project
          </div>
          <div
            className={css`
              position: absolute;
              width: 83.8%;
              top: 57.89%;
              left: 8%;
              font-size: var(--font-size-lg);
              line-height: 26px;
              font-weight: 300;
              color: var(--dark-content);
              display: flex;
              align-items: center;
            `}
          >
            Crafted a dynamic web portfolio showcasing creative UI/UX designs
            and diligently coded functionalities to deliver an immersive user
            experience."
          </div>
          <div
            className={css`
              position: absolute;
              width: 83.8%;
              top: 80.53%;
              left: 8%;
              line-height: 26px;
              display: flex;
              align-items: center;
              color: var(--color-darkslateblue);
            `}
          >
            <span
              className={css`
                width: 100%;
              `}
            >
              <span className={css``}>Tech stack :</span>
              <span
                className={css`
                  font-size: var(--font-size-sm);
                  font-weight: 300;
                `}
              >
                <span
                  className={css`
                    color: var(--dark-content);
                  `}
                >{` `}</span>
                <span className={css``}>HTML , JavaScript, SASS, React</span>
              </span>
            </span>
          </div>
          <img
            className={css`
              position: absolute;
              height: 3.51%;
              width: 5.34%;
              top: 91.58%;
              right: 86.66%;
              bottom: 4.91%;
              left: 8%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            loading="lazy"
            alt=""
            src="/akariconslinkchain.svg"
          />
          <img
            className={css`
              position: absolute;
              height: 3.51%;
              width: 5.34%;
              top: 91.58%;
              right: 40.23%;
              bottom: 4.91%;
              left: 54.43%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            loading="lazy"
            alt=""
            src="/akariconsgithubfill-1.svg"
          />
        </div>
      </section>
      <section
        className={css`
          position: absolute;
          width: 100%;
          top: 2298px;
          right: 0%;
          left: 0%;
          border-radius: var(--br-7xl) var(--br-7xl) 0px 0px;
          background-color: var(--color-steelblue);
          height: 675px;
        `}
        data-scroll-to="contactBox"
      />
      <div
        className={css`
          position: absolute;
          height: 2.93%;
          top: 91.24%;
          bottom: 5.83%;
          left: 57px;
          width: 488px;
          font-size: var(--font-size-5xl);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 1px;
            left: 0px;
            width: 460px;
            height: 90px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 87.5px;
              line-height: 182.02%;
              display: inline-block;
              width: 373px;
              height: 32px;
            `}
          >
            ghulammujtaba4045@gmail.com
          </div>
          <div
            className={css`
              position: absolute;
              top: 58px;
              left: 87.5px;
              line-height: 182.02%;
              display: inline-block;
              width: 258.7px;
              height: 32px;
            `}
          >
            +92 317 7107849
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 5.8px;
              line-height: 182.02%;
              text-transform: capitalize;
              display: inline-block;
              width: 96.3px;
              height: 32px;
            `}
          >
            <span
              className={css`
                font-weight: 600;
              `}
            >
              Email
            </span>
            <b className={css``}>:</b>
          </div>
          <div
            className={css`
              position: absolute;
              top: 57px;
              left: 0px;
              line-height: 182.02%;
              text-transform: capitalize;
              display: inline-block;
              width: 102.1px;
              height: 32px;
            `}
          >
            <span
              className={css`
                font-weight: 600;
              `}
            >
              Phone
            </span>
            <b className={css``}>:</b>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 78.03%;
          left: 57px;
          display: inline-block;
          width: 316px;
        `}
      >
        Feel free to reach out me.
      </div>
      <div
        className={css`
          position: absolute;
          top: 76.43%;
          left: 57px;
          font-size: var(--font-size-13xl);
          line-height: 107.52%;
          display: inline-block;
          width: 421px;
        `}
      >
        CONTACT ME
      </div>
      <input
        className={css`
          border: 1px solid var(--white);
          outline: none;
          background-color: var(--white);
          position: absolute;
          height: 2.08%;
          top: 76.99%;
          right: 81px;
          bottom: 20.93%;
          border-radius: var(--br-8xs);
          box-sizing: border-box;
          width: 549px;
        `}
        type="text"
      />
      <input
        className={css`
          border: 1px solid var(--white);
          outline: none;
          background-color: var(--white);
          position: absolute;
          height: 2.08%;
          top: 81.28%;
          right: 81px;
          bottom: 16.63%;
          border-radius: var(--br-8xs);
          box-sizing: border-box;
          width: 547px;
        `}
        type="text"
      />
      <div
        className={css`
          position: absolute;
          height: 2.08%;
          top: 92.74%;
          right: 81px;
          bottom: 5.18%;
          border-radius: var(--br-8xs);
          background-color: var(--color-steelblue);
          width: 547px;
          mix-blend-mode: screen;
        `}
      />
      <textarea
        className={css`
          border: 1px solid var(--white);
          background-color: var(--white);
          height: 7.06%;
          width: 547px;
          outline: none;
          position: absolute;
          top: 85.19%;
          right: 81px;
          bottom: 7.75%;
          border-radius: var(--br-8xs);
          box-sizing: border-box;
        `}
        rows={11}
        cols={27}
      />
      <div
        className={css`
          position: absolute;
          top: 93.1%;
          right: 310px;
          font-size: var(--font-size-13xl);
          line-height: 131.52%;
          font-weight: 600;
        `}
      >
        SEND
      </div>
      <div
        className={css`
          position: absolute;
          top: 75.98%;
          right: 570px;
          font-size: var(--font-size-5xl);
          line-height: 131.52%;
          font-weight: 600;
        `}
      >
        Name
      </div>
      <div
        className={css`
          position: absolute;
          top: 80.31%;
          right: 565px;
          font-size: var(--font-size-5xl);
          line-height: 131.52%;
          font-weight: 600;
        `}
      >
        Email
      </div>
      <div
        className={css`
          position: absolute;
          top: 84.15%;
          right: 450px;
          font-size: 19px;
          line-height: 131.52%;
          font-weight: 600;
          font-family: var(--font-open-sans);
        `}
      >
        Comment or Message
      </div>
      <footer
        className={css`
          position: absolute;
          top: 2973px;
          left: 0px;
          background-color: var(--color-lightsteelblue);
          width: 1440px;
          height: 100px;
        `}
      />
      <img
        className={css`
          position: absolute;
          height: 1.04%;
          top: 97.88%;
          bottom: 1.07%;
          left: 57px;
          max-height: 100%;
          width: 32px;
          overflow: hidden;
        `}
        loading="lazy"
        alt=""
        src="/copyrighttwotone.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 13.35%;
          width: 27.08%;
          top: 4.04%;
          right: 11.94%;
          bottom: 82.62%;
          left: 60.97%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        loading="lazy"
        alt=""
        src="/profilepicture@2x.png"
      />
      <div
        className={css`
          position: absolute;
          height: 1.43%;
          top: 97.66%;
          left: 96px;
          font-size: var(--font-size-5xl);
          line-height: 182.02%;
          display: inline-block;
          width: 520px;
        `}
      >
        Copyright 2023 Ghulam Mujtaba Official
      </div>
      <img
        className={css`
          position: absolute;
          height: 0.78%;
          top: 98.05%;
          right: 82.7px;
          bottom: 1.17%;
          max-height: 100%;
          width: 22.4px;
          cursor: pointer;
        `}
        loading="lazy"
        alt=""
        src="/path-2521.svg"
        onClick={onPath2521IconClick}
      />
      <img
        className={css`
          position: absolute;
          height: 0.78%;
          top: 98.05%;
          right: 153.6px;
          bottom: 1.17%;
          max-height: 100%;
          width: 22.4px;
          overflow: hidden;
          cursor: pointer;
        `}
        loading="lazy"
        alt=""
        src="/blackinstagramicon-2.svg"
        onClick={onBlackInstagramIcon2Click}
      />
      <img
        className={css`
          position: absolute;
          height: 0.78%;
          top: 98.05%;
          bottom: 1.17%;
          right: 118px;
          max-height: 100%;
          width: 22.4px;
          cursor: pointer;
        `}
        loading="lazy"
        alt=""
        src="/group-2.svg"
        onClick={onGroupIcon2Click}
      />
    </div>
  );
};

export default DesktopPortfolio;
