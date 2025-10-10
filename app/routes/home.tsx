import { PricingTable } from "@/lib/components/pricing-table";
import { WorkflowVisualization } from "@/lib/components/workflow-visualization";
import { ArrowRightIcon, BookIcon } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "./+types/home";
import "./home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="landing-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <div className="content">
            <div className="introducing">
              <img src="/icon.svg" alt="Shard Logo" className="logo" />{" "}
              Introducing Shard
            </div>
            <span className="primary">Your data, your rules</span>
            <span className="secondary">
              <strong>Shard is your personal database.</strong> Create forms,
              automate workflows, and integrate with your favorite tools &mdash;
              easily.
            </span>
            <div className="actions">
              <Link to="https://app.shard.sh">
                <ArrowRightIcon size={18} />
                Open Shard
              </Link>
              <Link to="/docs">
                <BookIcon size={18} />
                Read Docs
              </Link>
            </div>
          </div>
          <WorkflowVisualization />
        </div>
      </section>
      <section className="pricing-section">
        <h2 className="h2">Simple, affordable pricing.</h2>
        <h3 className="h3">Free during our early access period</h3>
        <PricingTable />
      </section>
      <footer className="footer-section">
        <span>
          &copy; {new Date().getFullYear()} Shard. All rights reserved.
        </span>
        <span>
          <Link to="/docs">Docs</Link>
          <Link to="/docs/terms">Terms</Link>
          <Link to="/docs/privacy">Privacy</Link>
        </span>
      </footer>
    </div>
  );
}
