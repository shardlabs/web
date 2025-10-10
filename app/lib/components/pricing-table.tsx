import React from "react";
import styles from "./pricing-table.module.css";
import { Link } from "react-router";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: number | string;
  period?: string;
  billingNote?: string;
  tagline: string;
  features: PricingFeature[];
  cta: string;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    period: "Forever",
    tagline: "",
    cta: "Start Free",
    features: [
      { text: "1 Shard" },
      { text: "10 Forms" },
      { text: "1,000 Automations" },
      { text: "100K Reads per Shard" },
      { text: "10K Writes per Shard" },
      { text: "100MB Storage per Shard" },
      { text: "Community Support" },
    ],
  },
  {
    name: "Personal",
    price: 20,
    period: "per Month",
    tagline: "",
    cta: "Get Started",
    features: [
      { text: "10 Shards" },
      { text: "Unlimited Automations" },
      { text: "Unlimited Forms" },
      { text: "1M Reads per Shard" },
      { text: "100K Writes per Shard" },
      { text: "1GB Storage per Shard" },
      { text: "Community Support" },
    ],
  },
  {
    name: "Pro",
    price: 100,
    period: "per Month",
    tagline: "",
    cta: "Get Started",
    features: [
      { text: "100 Shards" },
      { text: "Unlimited Automations" },
      { text: "Unlimited Forms" },
      { text: "10M Reads per Shard" },
      { text: "1M Writes per Shard" },
      { text: "10GB Storage per Shard" },
      { text: "Priority Support" },
    ],
  },
];

export const PricingTable: React.FC = () => {
  return (
    <div className={styles.pricingContainer}>
      {plans.map((plan) => (
        <div key={plan.name} className={styles.pricingCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.priceContainer}>
              <span className={styles.currency}>$</span>
              <span className={styles.price}>{plan.price}</span>
            </div>
            {plan.period && <div className={styles.period}>{plan.period}</div>}
            {plan.billingNote && (
              <div className={styles.billingNote}>{plan.billingNote}</div>
            )}
            {plan.tagline && (
              <div className={styles.tagline}>{plan.tagline}</div>
            )}
          </div>
          <div className={styles.cardBody}>
            <ul className={styles.featureList}>
              {plan.features.map((feature, index) => (
                <li key={index} className={styles.feature}>
                  {feature.text}
                </li>
              ))}
            </ul>
            <Link
              to="https://app.shard.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.ctaButton}>{plan.cta}</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
