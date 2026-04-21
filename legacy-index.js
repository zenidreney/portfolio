/*Dynamically Render Projects from data.js*/

import { renderCarousel } from "./carousel.js";
import { featuredData, latestData, olderData } from "./data.js";

    renderCarousel(latestData, "latest-carousel");
    renderCarousel(featuredData, "feat-carousel");
    renderCarousel(olderData, "older-carousel");

