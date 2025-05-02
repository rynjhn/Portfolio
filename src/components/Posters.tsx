import classes from "./styles/posters.module.css";

export const Posters = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.logo_text}>
          <img src="/assets/poster_design_text.png" />
        </div>

        <div className="flex w-full mt-[10rem] h-[20rem] justify-around items-end">
          <div className="flex flex-col items-center">
            <img
              src="/assets/onic_poster.png"
              className={classes.posters_img}
            />
            <span className="text-lg font-bold">ESPORT TEAM - POSTER</span>
          </div>
        </div>
      </div>
    </div>
  );
};
