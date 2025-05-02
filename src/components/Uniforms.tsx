import classes from "./styles/uniforms.module.css";

export const Uniforms = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.logo_text}>
          <img src="/assets/uniform_text.png" />
        </div>

        <div className="flex w-full mt-[10rem] h-[20rem] justify-around items-end">
          <div className="flex flex-col items-center">
            <img
              src="/assets/iskriptura_sample_uniform.png"
              className={classes.uniform_img}
            />
            <span className="text-lg font-bold">SCHOOL PUBLICATION</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/iskriptura_uniform1.png"
              className={classes.uniform_img}
            />
            <span className="text-lg font-bold">BSCS & BSIT</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/iskriptura_uniform2.png"
              className={classes.uniform_img}
            />
            <span className="text-lg font-bold">BSCS & BSIT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
