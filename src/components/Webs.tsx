import classes from "./styles/webs.module.css";

export const Webs = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.logo_text}>
          <img src="/assets/web_design_text.png" />
        </div>

        <div className="flex w-full mt-[10rem] h-[20rem] justify-around items-end">
          <div className="flex flex-col items-center">
            <img src="/assets/foodhub_web.png" className={classes.webs_img} />
            <span className="text-lg font-bold">
              FOOD HUB - FOOD RECIPE SYSTEM
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/auto_track_web.png" className={classes.webs_img} />
            <span className="text-lg font-bold">
              AUTO TRACK - INVENTORY SYSTEM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
