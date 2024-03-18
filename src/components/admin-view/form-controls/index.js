'use client';

export default function FormControls({ controls, formData, setFormData }) {
  return controls.map((controlItem) => (
    <div className="mb-4" key={controlItem.id}>
      <lable className="block text-gray-700 text-sm font-bold mb-2">
        {controlItem.label}
      </lable>
      <input
        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
        placeholder={controlItem.placeholder}
        type={controlItem.type}
        id={controlItem.name}
        value={formData[controlItem.name]}
        onChange={(e) => {
          setFormData({
            ...formData,
            [controlItem.name]: e.target.value,
          });
        }}
      />
    </div>
  ));
}
