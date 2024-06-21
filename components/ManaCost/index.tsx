const ManaCost = ({ className = "", cost }) => {
  console.log("[DEBUG] ManaCost", cost);
  if (cost.length === 0) return null;

  const costs = cost.toLowerCase()
    .substring(1, cost.length-1)
    .split("}{")
    .map(c => c.replace("/", ""));
  return (<div className={className}>
    {costs.map((c) => {
      return <i className={`ms ms-cost ms-${c} ms-shadow`}></i>;
    })}
  </div>);
}

export default ManaCost;