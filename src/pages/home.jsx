import React from 'react';
import './home.css';
import Hero from '../components/home components/herosection';
import Slider from '../components/Reusable components/slider';
import Counts from '../components/home components/countsection';
import HowItWorks from '../components/home components/howitworks';  
import WhyUse from '../components/home components/whyuse';
import KeyFeatures from '../components/home components/keyfeatures';
import ComparisonSection from '../components/home components/comparsion';
import TargetAudience from '../components/home components/target';
import UserReviewsSection from '../components/home components/reviews';
import PricingSection from '../components/home components/pricing';
import FAQSection from '../components/home components/faq';
import Footer from '../components/Reusable components/footer';

function Home() {
    return (
      <div className="homewindow">
        <Hero />
        <Slider />
        <Counts />
        <HowItWorks />
        <WhyUse />
        <KeyFeatures />
        <ComparisonSection />
        <TargetAudience />
        <UserReviewsSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
    );
}

export default Home;