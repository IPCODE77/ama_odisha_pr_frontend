
import {
  Wheat,
  Leaf,
  PackageCheck,
  Truck,
} from 'lucide-react';

import './Benefits.css';

const benefits = [
  {
    icon: Wheat,
    title: 'Authentic Odia Taste',
    description: 'Traditional flavours of Odisha.',
  },
  {
    icon: Leaf,
    title: 'Quality Ingredients',
    description: 'Carefully selected ingredients.',
  },
  {
    icon: PackageCheck,
    title: 'Packed with Care',
    description: 'Thoughtful and hygienic packaging.',
  },
  {
    icon: Truck,
    title: 'Across India',
    description: 'Odisha flavours delivered to you.',
  },
];

function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">
                <Icon size={30} strokeWidth={1.7} />
              </div>

              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Benefits;
