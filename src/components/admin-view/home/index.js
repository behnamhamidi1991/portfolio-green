'use client';

import FormControls from '../form-controls';

const controls = [
  {
    name: 'heading',
    placeholder: 'Enter heading text',
    type: 'text',
    label: 'Enter heading text',
  },
  {
    name: 'summary',
    placeholder: 'Enter career summary',
    type: 'text',
    label: 'Enter career summary',
  },
];

export default function AdminHomeView() {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls />
      </div>
    </div>
  );
}
