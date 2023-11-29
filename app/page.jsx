export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <button hx-get="https://tradestie.com/api/v1/apps/reddit" hx-swap="#data-container">Fetch Data</button>
      <div id="data-container"></div>
    </div>
  );
}
