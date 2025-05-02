import classes from "./styles/newspaper.module.css";

export const Newspapers = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.logo_text}>
          <img src="/assets/newspaper_text.png" />
        </div>

        <div className="flex w-full mt-[10rem] h-[20rem] justify-around items-end">
          <div className="flex flex-col items-center">
            <img src="/assets/marianette.png" className={classes.news_img} />
            <span className="text-lg font-bold">CIC - NEWSPAPER DESIGN</span>
          </div>
        </div>
      </div>
    </div>
  );
};
