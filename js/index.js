const ITEMS_PER_PAGE = 11;
const SCROLL_DELAY = 1000;
const TRANSITION = 1000;
let enableScroll = true;
let touchStartY;
let touchEndY;

window.addEventListener(
	"wheel",
	function (event) {
		event.preventDefault();
		if (!enableScroll) return;
		if (event.deltaY > 0) app.nextItem();
		else app.prevItem();
		enableScroll = false;
		setTimeout(() => (enableScroll = true), SCROLL_DELAY);
	},
	{ passive: false }
);

document.addEventListener("touchstart", function (e) {
	touchStartY = e.touches[0].pageY;
});

document.addEventListener("touchmove", function (e) {
	if (!enableScroll) return;
	touchEndY = e.touches[0].pageY;
	if (touchStartY < touchEndY) {
		app.prevItem();
		enableScroll = false;
		setTimeout(() => (enableScroll = true), SCROLL_DELAY);
	} else if (touchStartY > touchEndY) {
		app.nextItem();
		enableScroll = false;
		setTimeout(() => (enableScroll = true), SCROLL_DELAY);
	}
});

document.addEventListener("touchend", function (e) {
	touchStartY = null;
	touchEndY = null;
});

class Subject {
	constructor(year, title, subtitle, img, sketch, description) {
		this.year = year;
		this.title = title;
		this.subtitle = subtitle;
		this.img = img;
		this.sketch = sketch;
		this.description = description;
	}
}

let app = Vue.createApp({
	data() {
		return {
			list: [
				new Subject(
					2022,
					"LOMA VA5",
					"永龍VA6",
					"43.永龍V_A6 2022_1.png",
					"43.永龍V_A6 2022.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2021,
					"BAOREN VA3",
					"有名堂12",
					"42. 有名堂12 2021_1.png",
					"42. 有名堂12 2021.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2020,
					"LOMA VA5",
					"永龍VA5",
					"41.永龍V_A5 2020_1.png",
					"41.永龍V_A5 2020.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2018,
					"BAOREN VA3",
					"永龍V3",
					"40.永龍V_3 2018_1.png",
					"40.永龍V_3 2018.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2017,
					"LOMA VA5",
					"有名堂11",
					"39.有名堂11 2017_1.png",
					"39.有名堂11 2017.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2017,
					"BAOREN VA3",
					"極光5",
					"38.極光5 2017_1.png",
					"38.極光5 2017.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2016,
					"BAOREN VA3",
					"永龍VA2",
					"37.永龍V_A2 2016_1.png",
					"37.永龍V_A2 2016.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2015,
					"BAOREN VA3",
					"有名堂Idoll",
					"36.有名堂Idoll 2015_1.png",
					"36.有名堂Idoll 2015.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2014,
					"BAOREN VA3",
					"有名堂9",
					"35.有名堂9 2014_1.png",
					"35.有名堂9 2014.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2014,
					"BAOREN VA3",
					"永龍VA1",
					"34.永龍V_A1 2014_1.png",
					"34.永龍V_A1 2014.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2014,
					"BAOREN VA3",
					"凡人居7",
					"33.凡人居7 2014_1.png",
					"33.凡人居7 2014.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2013,
					"BAOREN VA3",
					"藏金家專3",
					"32.藏金家專3 2013_1.png",
					"32.藏金家專3 2013.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2013,
					"BAOREN VA3",
					"有名堂8",
					"31.有名堂8 2013_1.png",
					"31.有名堂8 2013.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2012,
					"BAOREN VA3",
					"藏金家專2",
					"30.藏金家專2 2012_1.png",
					"30.藏金家專2 2012.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2012,
					"BAOREN VA3",
					"有名堂7",
					"29.有名堂7 2012_1.png",
					"29.有名堂7 2012.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2011,
					"BAOREN VA3",
					"極光3",
					"28.極光3 2011_1.png",
					"28.極光3 2011.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2011,
					"BAOREN VA3",
					"極光2",
					"27.極光2 2011_1.png",
					"27.極光2 2011.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2011,
					"BAOREN VA3",
					"首善",
					"26.首善 2011_1.png",
					"26.首善 2011.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2011,
					"BAOREN VA3",
					"有名堂6",
					"25.有名堂6 2011_1.png",
					"25.有名堂6 2011.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2010,
					"BAOREN VA3",
					"極光",
					"24. 極光 2010_1.png",
					"24. 極光 2010.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2010,
					"BAOREN VA3",
					"藏金家專",
					"23. 藏金家專 2010_1.png",
					"23. 藏金家專 2010.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2010,
					"BAOREN VA3",
					"有名堂5",
					"22.有名堂5 2010_1.png",
					"22.有名堂5 2010.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2010,
					"BAOREN VA3",
					"有名堂3",
					"21.有名堂3 2010_1.png",
					"21.有名堂3 2010.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2010,
					"BAOREN VA3",
					"青山",
					"20.青山 2010_1.png",
					"20.青山 2010.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2009,
					"BAOREN VA3",
					"有名堂2",
					"19.有名堂2 2009_1.png",
					"19.有名堂2 2009.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2008,
					"BAOREN VA3",
					"有名堂1",
					"18.有名堂1 2008_1.png",
					"18.有名堂1 2008.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2008,
					"BAOREN VA3",
					"鳳閣祥居",
					"17.鳳閣祥居 2008_1.png",
					"17.鳳閣祥居 2008.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2008,
					"BAOREN VA3",
					"青石階2",
					"16.青石階2 2008_1.png",
					"16.青石階2 2008.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2007,
					"BAOREN VA3",
					"青石階1",
					"15.青石階1 2007_1.png",
					"15.青石階1 2007.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2007,
					"BAOREN VA3",
					"永康凡人居6",
					"14.永康凡人居6 2007_1.png",
					"14.永康凡人居6 2007.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2006,
					"BAOREN VA3",
					"永康凡人居5",
					"13.永康凡人居5 2006_1.png",
					"13.永康凡人居5 2006.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2006,
					"BAOREN VA3",
					"永康凡人居3",
					"12.永康凡人居3 2006_1.png",
					"12.永康凡人居3 2006.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2006,
					"BAOREN VA3",
					"點精品",
					"11.點精品 2006_1.png",
					"11.點精品 2006.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2006,
					"BAOREN VA3",
					"百里揚",
					"10.百里揚 2006_1.png",
					"10.百里揚 2006.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2005,
					"BAOREN VA3",
					"凡人居6",
					"9.凡人居6 2005_1.png",
					"9.凡人居6 2005.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2005,
					"BAOREN VA3",
					"永康凡人居2",
					"8.永康凡人居2 2005_1.png",
					"8.永康凡人居2 2005.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2004,
					"BAOREN VA3",
					"凡人居5",
					"7.凡人居5 2004_1.png",
					"7.凡人居5 2004.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2004,
					"BAOREN VA3",
					"凡人居3",
					"6.凡人居3 2004_1.png",
					"6.凡人居3 2004.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2004,
					"BAOREN VA3",
					"老大房",
					"5.老大房 2004_1.png",
					"5.老大房 2004.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2004,
					"BAOREN VA3",
					"永康凡人居1",
					"4.永康凡人居1 2004_1.png",
					"4.永康凡人居1 2004.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2003,
					"BAOREN VA3",
					"凡人居2",
					"3.凡人居2 2003_1.png",
					"3.凡人居2 2003.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2003,
					"BAOREN VA3",
					"凡人居1",
					"2.凡人居1 2003_1.png",
					"2.凡人居1 2003.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
				new Subject(
					2001,
					"BAOREN VA3",
					"永龍法國",
					"1.永龍法國 2001_1.png",
					"1.永龍法國 2001.png",
					"更安心的高規格住宅\n型塑「安全，節能，智慧，環保」四大概念設計\n打造時代頂端的宜居住宅，即使歷經歲月考驗\n價值光芒仍然不減，未來依舊經典"
				),
			],
			activeIndex: 0,
			prevIndex: 0,
			title: "",
			subtitle: "",
			description: "",
			animation: false,
			animationDelay: false,
		};
	},
	methods: {
		init() {
			this.title = this.list[0].title;
			this.subtitle = this.list[0].subtitle;
			this.doAnimate(1, 0);
		},
		setItem(index) {
			this.prevIndex = this.activeIndex;
			this.activeIndex = index;
			if (this.prevIndex != this.activeIndex) this.doAnimate(this.prevIndex, this.activeIndex);
		},
		prevItem() {
			this.prevIndex = this.activeIndex;
			this.activeIndex = Math.max(0, this.activeIndex - 1);
			if (this.prevIndex != this.activeIndex) this.doAnimate(this.prevIndex, this.activeIndex);
		},
		nextItem() {
			this.prevIndex = this.activeIndex;
			this.activeIndex = Math.min(this.list.length - 1, this.activeIndex + 1);
			if (this.prevIndex != this.activeIndex) this.doAnimate(this.prevIndex, this.activeIndex);
		},
		doAnimate(from, to) {
			this.animation = true;
			this.changeYear(this.list[this.activeIndex].year.toString(), "bar-title-year", "#left .number");
			this.changeYear(this.list[this.activeIndex].year.toString(), "title-year", "#middle .text .number");
			this.changeYear(this.list[this.activeIndex].year.toString(), "title-year-2", "#middle .text2 .number");
			this.changeImage(from, to, "images");
			this.changeImage(from, to, "sketchs");
			setTimeout(() => {
				this.title = this.list[this.activeIndex].title;
				this.subtitle = this.list[this.activeIndex].subtitle;
				this.description = this.list[this.activeIndex].description;
			}, TRANSITION / 2);
			setTimeout(() => {
				this.animation = false;
				this.animationDelay = true;
				setTimeout(() => (this.animationDelay = false), TRANSITION);
			}, TRANSITION);
		},
		changeYear(newYear, ref, numSelector) {
			const yearEl = this.$refs[ref];
			const oldYear = yearEl.textContent;
			const newYearEls = newYear.split("").map((number, index) => {
				const oldNumber = oldYear[index];
				if (number === oldNumber && index != 3) return `<span>${number}</span>`;
				else return `<span class="number"><span>${oldNumber}</span>${number}</span>`;
			});
			yearEl.innerHTML = newYearEls.join("");
			const newNumberEls = document.querySelectorAll(numSelector);
			newNumberEls.forEach(numberEl => {
				const oldNumberEl = numberEl.querySelector("span:first-child");
				const newNumberEl = numberEl.querySelector("span:last-child");
				oldNumberEl.addEventListener("animationend", () => {
					oldNumberEl.remove();
					newNumberEl.style.opacity = 1;
					newNumberEl.style.animation = "none";
				});
			});
		},
		changeImage(from, to, imgSelector) {
			let images = this.$refs[imgSelector];
			images.forEach(i => {
				i.classList.remove("top");
				i.classList.remove("bottom");
			});
			let direction = from < to ? "up" : "down";
			const currentImage = images[to];
			const previousImage = images[from];

			currentImage.classList.add("current");
			previousImage.classList.add("previous");
			currentImage.classList.add(direction);
			previousImage.classList.add(direction);
			setTimeout(() => {
				previousImage.classList.remove("previous");
				previousImage.classList.remove("current");
				currentImage.classList.remove(direction);
				previousImage.classList.remove(direction);
				if (from < to) {
					previousImage.classList.add("top");
					images[to + 1].classList.add("bottom");
				} else {
					previousImage.classList.add("bottom");
					images[to - 1].classList.add("top");
				}
			}, TRANSITION);
		},
	},
	computed: {
		scrollTop() {
			return (window.innerHeight / 11) * (3 - this.activeIndex) + 10;
		},
	},
}).mount("#app");
app.init();
