'use client';

import AdminAboutView from '@/components/admin-view/about';
import AdminEducationView from '@/components/admin-view/education';
import AdminExperienceView from '@/components/admin-view/experience';
import AdminHomeView from '@/components/admin-view/home';

export default function AdminView() {
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      component: <AdminHomeView />,
    },
    {
      id: 'about',
      label: 'About',
      component: <AdminAboutView />,
    },
    {
      id: 'experience',
      label: 'Experience',
      component: <AdminExperienceView />,
    },
    {
      id: 'education',
      label: 'Education',
      component: <AdminEducationView />,
    },
    {
      id: 'project',
      label: 'Project',
    },
    {
      id: 'contact',
      label: 'Contact',
    },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10"></div>
    </div>
  );
}
