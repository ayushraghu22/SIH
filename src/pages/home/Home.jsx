import "./home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
	return (
		<div className="home">
			<div className="header">
				<Carousel className="car" useKeyboardArrows={true} infiniteLoop={true} showStatus={false} showIndicators={false}>
					<div>
						<img src="https://img-b.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg" alt="shinchan" />
					</div>
					<div>
						<img src="https://img-b.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" alt="shinchan" />
					</div>
				</Carousel>
				<h1>Empower Your Mind with Education</h1>
				<h2>Unlock your potential with SIH's innovative education programs.Learn, grow and succeed!</h2>
			</div>
			<div className="body">
				<div className="services">
					<h2 className="headd">Services We Provide</h2>
					<div className="upper">
						<div className="left">
							<div className="head">Service 1</div>
						</div>
						<div className="right">
							<div className="head">Service 2</div>
						</div>
					</div>
					<div className="lower">
						<div className="left">
							<div className="head">Service 3</div>
						</div>
						<div className="right">
							<div className="head">Service 4</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
