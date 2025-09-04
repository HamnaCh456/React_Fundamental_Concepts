function Badge({ color, children }) {
  return (
    <span className={`px-2 py-1 text-white rounded bg-${color}-500`}>
      {children}
    </span>
  );
}
export default Badge;