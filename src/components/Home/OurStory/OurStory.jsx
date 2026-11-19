
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ourStoryImage from '../../../assets/images/our-story-image.png';
import './OurStory.css';

function OurStory() {
  return (
    <section className="our-story-section">
      <div className="our-story-container">

        {/* Left Side - Image */}
        <div className="our-story-image">
          <img
            src={ourStoryImage}
            alt="Traditional flavours of Odisha"
          />
        </div>

        {/* Right Side - Content */}
        <div className="our-story-content">
          <span className="our-story-eyebrow">
            OUR STORY
          </span>

          <h2>
            Bringing the Taste of
            <span> Odisha Closer to You</span>
          </h2>

          <div className="our-story-divider">
            <span></span>
            <span>◆</span>
            <span></span>
          </div>

          <p>
            Odisha is a land of rich culture, beautiful traditions
            and unforgettable flavours. Every taste tells a story
            of our heritage and brings back the warmth of home.
          </p>

          <p>
            At AMA ODISHA, we bring these authentic flavours closer
            to you. From traditional Mudhi and Mixtures to Khaja,
            Papad and Pickles, every product celebrates the taste
            and tradition of Odisha.
          </p>

          <Link to="/about" className="our-story-button">
            Discover Our Story
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default OurStory;
