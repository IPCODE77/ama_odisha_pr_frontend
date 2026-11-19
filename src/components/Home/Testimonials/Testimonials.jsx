
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Ananya S.',
    location: 'Bhubaneswar',
    review: 'The taste reminds me of home. Loved the traditional flavours and the quality!',
  },
  {
    id: 2,
    name: 'Rahul M.',
    location: 'Kolkata',
    review: 'Really enjoyed the authentic Odia snacks. The flavours are simply wonderful.',
  },
  {
    id: 3,
    name: 'Priya P.',
    location: 'Bengaluru',
    review: 'A beautiful way to experience Odisha food. Looking forward to trying more!',
  },
  {
    id: 4,
    name: 'Sourav D.',
    location: 'Delhi',
    review: 'The traditional taste and variety make these snacks special. Loved the experience!',
  },
  {
    id: 5,
    name: 'Sneha R.',
    location: 'Mumbai',
    review: 'A lovely taste of Odisha. The snacks bring back memories of home.',
  },
];

function ReviewCard({ review }) {
  return (
    <article className="testimonial-card">
      <Quote className="testimonial-quote-icon" size={30} />

      <div className="testimonial-stars" aria-label="Sample 5 out of 5 stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={16} fill="currentColor" />
        ))}
      </div>

      <p className="testimonial-review">
        "{review.review}"
      </p>

      <div className="testimonial-customer">
        <div className="testimonial-avatar">
          {review.name.charAt(0)}
        </div>

        <div>
          <h4>{review.name}</h4>
          <span>{review.location}</span>
        </div>
      </div>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-heading">
        <span className="testimonials-eyebrow">
          CUSTOMER LOVE
        </span>

        <h2>What Our Customers Say</h2>

        <p>
          Love for Odisha, shared with every bite.
        </p>

        <div className="testimonials-divider">
          <span></span> ◆ <span></span>
        </div>
      </div>

      <div className="testimonials-slider">
        <div className="testimonials-track">

          <div className="testimonials-group">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Duplicate cards for seamless animation */}
          <div className="testimonials-group" aria-hidden="true">
            {reviews.map((review) => (
              <ReviewCard key={`duplicate-${review.id}`} review={review} />
            ))}
          </div>

        </div>
      </div>

      {/* <p className="testimonials-demo-note">
        Sample reviews for website preview
      </p> */}
    </section>
  );
}

export default Testimonials;
