/*Generic function to create Bootstap Carousel*/

export const renderCarousel = (data, container) => {
	const carouselDiv = document.getElementById(container);
	carouselDiv.className = "carousel slide";
	carouselDiv.setAttribute("data-bs-ride", "false");
	carouselDiv.innerHTML = "";

	const carouselIndicators = document.createElement("div");
	carouselIndicators.className = "carousel-indicators";

	for (let i = 0; i < data.length; i++) {
		//const check = document.createElement("p");
		//check.textContent = "Hello";
		const slideBtn = document.createElement("button");
		slideBtn.type = "button";

		slideBtn.setAttribute("data-bs-target", `#${container}`);
		slideBtn.setAttribute("data-bs-slide-to", i);
		slideBtn.setAttribute("aria-label", `Slide ${i + 1}`);

		if (i === 0) {
			slideBtn.className = "active";
			slideBtn.setAttribute("aria-current", "true");
		}
		carouselIndicators.append(slideBtn);
	}

	const carouselInner = document.createElement("div");
	carouselInner.className = "carousel-inner";

	for (let i = 0; i < data.length; i++) {
		const carouselItem = document.createElement("div");
		carouselItem.className = "carousel-item mb-0";

		if (i === 0) {
			carouselItem.classList.add("active");
		}
		const itemImg = document.createElement("img");
		itemImg.src = data[i].img;
		itemImg.className = "d-block c-img mx-auto";
		itemImg.setAttribute("alt", data[i].alt);

		const carouselCaption = document.createElement("div");
		carouselCaption.className = "carousel-caption d-block c-carousel mx-auto";

		const itemName = document.createElement("h5");
		itemName.textContent = data[i].title;
		const itemTags = document.createElement("h6");
		itemTags.textContent = `[ ${data[i].tags.join(", ")} ]`;
		itemTags.className = "tags";

		const appLink = document.createElement("a");
		appLink.className = "me-5 fs-5";
		appLink.href = data[i].appLink;
		appLink.textContent = "See App";

		const codeLink = document.createElement("a");
		codeLink.className = "fs-5";
		codeLink.href = data[i].codeLink;
		codeLink.textContent = "See Code";

		carouselCaption.append(itemName, itemTags, appLink, codeLink);

		carouselItem.append(itemImg, carouselCaption);

		carouselInner.append(carouselItem);
	}

	const slideBackBtn = document.createElement("button");
	slideBackBtn.className = "carousel-control-prev c-carousel-control my-auto";
	slideBackBtn.type = "button";
	slideBackBtn.setAttribute("data-bs-target", `#${container}`);
	slideBackBtn.setAttribute("data-bs-slide", "prev");

	const slideBackBtnSpan = document.createElement("span");
	slideBackBtnSpan.className = "carousel-control-prev-icon";
	slideBackBtnSpan.setAttribute("aria-hidden", "true");

	const slideBackBtnTxt = document.createElement("span");
	slideBackBtnTxt.className = "visually-hidden";
	slideBackBtnTxt.textContent = "Previous";

	slideBackBtn.append(slideBackBtnSpan, slideBackBtnTxt);

	const slideNextBtn = document.createElement("button");
	slideNextBtn.className = "carousel-control-next c-carousel-control my-auto";
	slideNextBtn.type = "button";
	slideNextBtn.setAttribute("data-bs-target", `#${container}`);
	slideNextBtn.setAttribute("data-bs-slide", "next");

	const slideNextBtnSpan = document.createElement("span");
	slideNextBtnSpan.className = "carousel-control-next-icon";
	slideNextBtnSpan.setAttribute("aria-hidden", "true");

	const slideNextBtnTxt = document.createElement("span");
	slideNextBtnTxt.className = "visually-hidden";
	slideNextBtnTxt.textContent = "Next";

	slideNextBtn.append(slideNextBtnSpan, slideNextBtnTxt);

	carouselDiv.append(
		carouselIndicators,
		carouselInner,
		slideBackBtn,
		slideNextBtn,
	);
};
