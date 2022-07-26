import React from "react";
import style from "./style.module.scss";

const HomePage =() => {
    return (
        <div>
            <section className={style.homeHero}>
                <div className={style.homeContainer}>
                <h1 className={style.homeHeroH1}>Rekindle The Love Flame</h1>
                <h2 className={style.homeHeroH2}>A Deeper Connection With Your Significant Other</h2>
                </div>
            </section>
        </div>
    );
}
export default HomePage;