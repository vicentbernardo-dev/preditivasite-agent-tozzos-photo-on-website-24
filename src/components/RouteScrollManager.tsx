import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_SECTION_IDS, LEGACY_HASH_PATHS } from '../routes';

/**
 * Reproduces the scroll behaviour the state-based navigation used to do by hand:
 * every page change goes back to the top, and `/#secao` links scroll to the
 * matching section once the page has mounted.
 *
 * It also forwards the hash URLs of the old navigation (`/#metodologia`) to
 * their real routes, so previously shared links keep working.
 */
export const RouteScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const anchor = hash.replace('#', '');

    // Old navigation used the hash as the page identifier.
    if (pathname === '/' && anchor && !HOME_SECTION_IDS.includes(anchor)) {
      const legacyPath = LEGACY_HASH_PATHS[anchor];
      if (legacyPath) {
        navigate(legacyPath, { replace: true });
        return;
      }
    }

    if (anchor) {
      // Wait for the section to be in the DOM before scrolling to it.
      const timer = window.setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash, navigate]);

  return null;
};
