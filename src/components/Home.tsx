import classes from "./styles/home.module.css";

export const Home = () => {
  return (
    <div className={classes.main_container}>
      <div className="flex">
        <div className={classes.square_grid_bg}></div>
      </div>
      <div className={classes.left_center_div}>
        <img src="/assets/portfolio_img.png" />
        <button className={classes.button}>VIEW PORTFOLIO</button>
      </div>
      <div className={classes.bottom_right_div}>
        <img src="/assets/profile_img.png" />
      </div>
    </div>
  );
};
