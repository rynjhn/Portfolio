import classes from "./styles/uniforms.module.css";

export const Skills = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.logo_text}>
          <img src="/assets/skills&qualifications_text.png" />
        </div>

        <div className="flex w-full mt-[5rem] h-[30rem] justify-around">
          <div className="flex flex-col items-center">
            <img src="/assets/figma_skills.png" />
            <img src="/assets/illustrator_skills.png" />
            <img src="/assets/photoshop_skills.png" />
            <img src="/assets/framer_skills.png" />
            <img src="/assets/capcut_skills.png" />
          </div>
          <div className="h-[30rem] flex flex-col items-center">
            <img src="/assets/qualifications.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
