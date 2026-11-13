const plannedFeatures = [
  "Payment status: successful, pending, or failed",
  "Estimated reimbursement completion time",
  "Live status updates over WebSockets",
  "Clear explanations for failed transactions",
  "A simple way to report a payment issue",
  "Firebase notifications when status changes",
];

export default function App() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="page-title">
        <p className="eyebrow">Employee payment overview</p>
        <h1 id="page-title">Denta Payment Status Tracker</h1>
        <p className="intro">
          This is the React starter screen. The payment API and live data will be
          connected as the MVP is implemented.
        </p>
        <h2>Planned MVP features</h2>
        <ul>
          {plannedFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
