import autosize from "autosize";

export const FieldText = ({ name, onChange, value }) =>
  <div className="mt-8 mb-8">
    <div className="text-white ml-4 mb-2 text-xs">{name}</div>
    <input className="w-full bg-white/10 text-white outline-none focus:shadow-[0_0_0_1px_rgb(255,255,255,0.5)] rounded-md px-4 py-2 font-mono"
      type="text" name={name} onChange={onChange} value={value}
      placeholder={`Enter ${name.toLowerCase()} here`} />
  </div>;

export const FieldTextExpand = ({ name, onChange, value }) =>
  <div className="mt-8 mb-8">
    <div className="text-white ml-4 mb-2 text-xs">{name}</div>
    <textarea className="w-full h-24 resize-none bg-white/10 text-white outline-none focus:shadow-[0_0_0_1px_rgb(255,255,255,0.5)] rounded-md px-4 py-2 font-mono"
      name={name} onChange={onChange} value={value} ref={x => autosize(x)}
      placeholder={`Enter ${name.toLowerCase()} here`} />
  </div>;
