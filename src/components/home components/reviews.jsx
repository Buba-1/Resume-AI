import React from "react";
import "./review.css";

const reviews = [
  {
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sarah Johnson",
    rating: 5,
    message:
      "This voice-based resume builder saved me HOURS! The AI interview felt natural and made everything easy.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Mark Phillips",
    rating: 4,
    message:
      "Super simple to use. I loved how the AI turned my answers into polished bullet points instantly.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Emily Carter",
    rating: 5,
    message:
      "I struggle with writing, but this tool made my resume look professional. Highly recommend!",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "James Miller",
    rating: 5,
    message:
      "The real-time editing with voice commands is a game changer. My resume looks 10x better.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    name: "Olivia Brown",
    rating: 4,
    message:
      "Loved the templates. Clean and modern. Perfect for my internship applications.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    name: "Daniel Rivera",
    rating: 5,
    message:
      "ATS-ready resume and Word/PDF export… worth every second using this tool!",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Grace Kim",
    rating: 5,
    message:
      "The AI suggestions improved all my bullet points. Recruiters actually replied!",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Leo Fernandez",
    rating: 4,
    message:
      "I hate writing descriptions, but speaking them out was so smooth.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Sophia Clark",
    rating: 5,
    message:
      "The voice interview asked better questions than actual recruiters.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/60.jpg",
    name: "Christopher White",
    rating: 5,
    message:
      "My resume now looks polished, quantified, and professional. I’m impressed!",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Mia Anderson",
    rating: 4,
    message: "Loved that it exports instantly. The UI is clean and simple.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    name: "Liam Thompson",
    rating: 5,
    message: "Best resume builder I’ve used. Voice input is the future.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Ava Martinez",
    rating: 5,
    message: "As an international student, this solved all my resume problems.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/70.jpg",
    name: "Noah Turner",
    rating: 4,
    message: "Easy to navigate and the AI made great suggestions.",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Isabella Roberts",
    rating: 5,
    message: "This tool actually made resume building fun. Amazing experience!",
  },
];

const UserReviewsSection = () => {
  return (
    <section className="reviews-container">
      <h2 className="reviews-title">What Our Users Say</h2>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            {/* Profile Image */}
            <div className="reviewer-image-wrapper">
              <img
                src={review.imageUrl}
                alt={review.name}
                className="reviewer-image"
              />
            </div>

            {/* User Info */}
            <div className="reviewer-info">
              <h3 className="reviewer-name">{review.name}</h3>

              {/* Rating */}
              <div className="review-rating">{review.rating} ⭐</div>

              {/* Message */}
              <p className="review-message">{review.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserReviewsSection;
