import classes from "./styles/logos.module.css";

export const Logos = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.logo_text}>
          <img src="/assets/logo_text.png" />
        </div>
        <div className="flex w-full mt-[11rem] h-[18rem] justify-around items-end">
          {/* Toastmaster */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/toastmaster_club.png"
              className={classes.logos_img}
            />
            <span className="text-lg font-bold">TOASTMASTER CLUB</span>
          </div>
          {/* Iskripura Publication */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/iskriptura_pub.png"
              className={classes.logos_img}
            />
            <span className="text-lg font-bold">ISKRIPTURA PUB.</span>
          </div>
          {/* 8cho Glass */}
          <div className="flex flex-col items-center">
            <img src="/assets/8cho_glass.png" className={classes.logos_img} />
            <span className="text-lg font-bold">8CHO GLASS</span>
          </div>
          {/* Pagmugna */}
          <div className="flex flex-col items-center">
            <img src="/assets/pagmugna.png" className={classes.logos_img} />
            <span className="text-lg font-bold">PAGMUGNA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
