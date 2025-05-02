import classes from "./styles/lanyards.module.css";

export const Lanyards = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.square_grid_bg}>
        <div className={classes.logo_text}>
          <img src="/assets/lanyard_text.png" />
        </div>

        <div className="flex w-full mt-[10rem] h-[20rem] justify-around items-end">
          <div className="flex flex-col items-center">
            <img
              src="/assets/iskriptura_lanyard.png"
              className={classes.lanyards_img}
            />
            <span className="text-lg font-bold">SCHOOL PUBLICATION</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/bsit_lanyard2.png"
              className={classes.lanyards_img}
            />
            <span className="text-lg font-bold">BSCS & BSIT</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/bsit_lanyard1.png"
              className={classes.lanyards_img}
            />
            <span className="text-lg font-bold">BSCS & BSIT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
