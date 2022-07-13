export const Number = ({ name, onChange, value }) =>
  <div className="mt-8 mb-8">
    <label className="block text-white ml-4 mb-2 text-xs">{name}</label>
    <input className="w-full text-white bg-white/10 outline-none focus:shadow-[0_0_0_1px_rgb(255,255,255,0.5)] rounded-md px-4 py-2 font-mono"
      type="number" name={name} onChange={onChange} value={value}
      placeholder={`Enter ${name.toLowerCase()} here`} />
  </div>;