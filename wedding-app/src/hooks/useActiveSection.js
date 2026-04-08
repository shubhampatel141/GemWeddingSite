import { useState, useEffect, useCallback, useRef } from 'react';

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');
  const activeSectionRef = useRef('');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 120;
    let newActive = '';

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.offsetTop <= scrollPosition) {
        newActive = sectionIds[i];
        break;
      }
    }

    if (newActive !== activeSectionRef.current) {
      activeSectionRef.current = newActive;
      setActiveSection(newActive);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeSection;
}
