"use client";

export function Pagination() {
  return (
    <div className="join py-3">
      <button className="btn join-item">1</button>
      <button className="btn join-item">2</button>
      <button className="btn btn-disabled join-item">...</button>
      <button className="btn join-item">99</button>
      <button className="btn join-item">100</button>
    </div>
  );
}
