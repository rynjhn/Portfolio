import classes from "./styles/aboutme.module.css";

export const Aboutme = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.about_me}>
          <img src="/assets/aboutme_text.png" />
        </div>
        <div className={classes.description}>
          Hello! I'm Jhon Ryan, a third-year BSIT student with a passion for web
          design. My journey in technology has fueled my creativity and
          problem-solving skills, allowing me to develop visually appealing and
          user-friendly websites. I am eager to explore new trends in web
          development and design, continuously honing my skills through hands-on
          projects and collaboration. My goal is to create engaging digital
          experiences that not only meet user needs but also push the boundaries
          of design innovation. I look forward to connecting with like-minded
          professionals and contributing to exciting projects in the tech world!
        </div>
      </div>
    </div>
  );
};
