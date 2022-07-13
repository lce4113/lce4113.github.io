export const Date = ({ name, onChange, value }) =>
  <div className="mt-8 mb-8">
    <label className="block text-white ml-4 mb-2 text-xs">{name}</label>
    <input className="invert bg-black/10 outline-none rounded-md px-4 py-2 font-mono"
      type="date" name={name} onChange={onChange} value={value} />
  </div>;