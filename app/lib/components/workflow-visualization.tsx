import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  companySize: number;
}

const mockEntries: FormData[] = [
  { name: "Sarah Chen", email: "sarah@techcorp.com", companySize: 750 },
  { name: "Mike Johnson", email: "mike@startup.io", companySize: 45 },
  {
    name: "Emily Rodriguez",
    email: "emily@enterprise.com",
    companySize: 1200,
  },
  { name: "David Kim", email: "david@smallbiz.co", companySize: 15 },
  { name: "Alex Thompson", email: "alex@megacorp.com", companySize: 850 },
];

export function WorkflowVisualization() {
  const [currentEntry, setCurrentEntry] = useState<FormData | null>(null);
  const [tableEntries, setTableEntries] = useState<FormData[]>([]);
  const [showAutomation, setShowAutomation] = useState(false);
  const [animationStage, setAnimationStage] = useState<
    "form" | "table" | "automation" | "idle"
  >("idle");
  const [formProgress, setFormProgress] = useState(0);
  const [currentMockIndex, setCurrentMockIndex] = useState(0);

  useEffect(() => {
    const runCycle = async () => {
      // Reset states
      setAnimationStage("idle");
      setShowAutomation(false);
      setCurrentEntry(null);
      setFormProgress(0);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Stage 1: Fill form
      setAnimationStage("form");
      const entry = mockEntries[currentMockIndex];

      // Animate form filling
      for (let i = 0; i <= 100; i += 10) {
        setFormProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 150));
      }

      setCurrentEntry(entry);
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Stage 2: Add to table
      setAnimationStage("table");
      setTableEntries((prev) => [entry, ...prev.slice(0, 2)]);
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Stage 3: Show automation if enterprise
      if (entry.companySize > 500) {
        setAnimationStage("automation");
        setShowAutomation(true);
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Move to next entry
      setCurrentMockIndex((currentMockIndex + 1) % mockEntries.length);
    };

    runCycle();
    const interval = setInterval(runCycle, 8000);
    return () => clearInterval(interval);
  }, [currentMockIndex]);

  return (
    <div className="workflow-container">
      {/* Form Card */}
      <div
        className="workflow-card form-card"
        data-active={animationStage === "form"}
      >
        <div className="card-header">
          <div className="card-title">Waitlist Form</div>
          <div className="card-badge">Form</div>
        </div>
        <div className="form-content">
          <div className="form-row">
            <div className="form-field">
              <label>Name</label>
              <input
                type="text"
                value={formProgress > 20 ? currentEntry?.name || "" : ""}
                readOnly
                placeholder="Enter name"
              />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                value={formProgress > 50 ? currentEntry?.email || "" : ""}
                readOnly
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label>Company Size</label>
              <input
                type="number"
                value={formProgress > 80 ? currentEntry?.companySize || "" : ""}
                readOnly
                placeholder="# of employees"
              />
            </div>
            <button className="submit-btn" disabled={formProgress < 100}>
              {formProgress === 100 ? "✓ Submitted" : "Submit"}
            </button>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div
        className="workflow-card table-card"
        data-active={animationStage === "table"}
      >
        <div className="card-header">
          <div className="card-title">Entries</div>
          <div className="card-badge">Table</div>
        </div>
        <div className="table-content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {tableEntries.length === 0 ? (
                <tr>
                  <td colSpan={3} className="empty-state">
                    No entries yet
                  </td>
                </tr>
              ) : (
                tableEntries.map((entry, idx) => (
                  <tr
                    key={idx}
                    data-highlight={idx === 0 && animationStage === "table"}
                  >
                    <td>{entry.name}</td>
                    <td className="email-cell">{entry.email}</td>
                    <td>{entry.companySize}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Automation Card */}
      <div
        className="workflow-card automation-card"
        data-active={animationStage === "automation"}
      >
        <div className="card-header">
          <div className="card-title">Automation Triggered</div>
          <div className="card-badge">Automation</div>
        </div>
        <div className="automation-content">
          <div className="automation-rule">
            <div className="rule-label">IF</div>
            <div className="rule-condition">Company Size &gt; 500</div>
          </div>
          <div className="automation-action">
            <div className="rule-label">THEN</div>
            <div className="rule-condition">Send Slack Message</div>
          </div>
        </div>
      </div>
      {showAutomation && (
        <div className="notification-popup">
          <div className="notification-header">
            <span className="notification-icon">💬</span>
            <span className="notification-title">Slack Message</span>
          </div>
          <div className="notification-body">
            <strong>New Enterprise Lead!</strong>
            <br />
            {currentEntry?.name} from a company with {currentEntry?.companySize}{" "}
            employees just signed up.
          </div>
        </div>
      )}
    </div>
  );
}
