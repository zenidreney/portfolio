import { renderCarousel } from "./carousel.js";
import { featuredData, latestData, olderData } from "./data.js";

const allProjectsArray = [...latestData, ...featuredData, ...olderData];
const allTagsArray = allProjectsArray.flatMap((project) => project.tags);
const reducedTags = [...new Set(allTagsArray)];
const selectBox = document.getElementById("project-filter");

const placeholderTag = document.createElement("option");
placeholderTag.textContent = "Select below...";
placeholderTag.value = "";
placeholderTag.disabled = true;
placeholderTag.selected = true;

selectBox.append(placeholderTag);

reducedTags.forEach((tag) => {
	const option = document.createElement("option");
	option.value = tag;
	option.textContent = tag;

	selectBox.append(option);
});

selectBox.addEventListener("change", () => {
	const reducedProjectsArray = [
		...new Map(
			allProjectsArray.map((project) => [project.title, project]),
		).values(),
	];

	console.log(allProjectsArray, "stop", reducedProjectsArray);

	const selectedProjectsArray = reducedProjectsArray.filter((project) => {
		return project.tags.includes(selectBox.value);
	});

	renderCarousel(selectedProjectsArray, "selected-carousel");

	console.log(selectedProjectsArray);
});
