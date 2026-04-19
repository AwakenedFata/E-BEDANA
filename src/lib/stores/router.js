import { writable } from 'svelte/store';

export const currentPage = writable('home');

export function navigate(page, targetId = null) {
  currentPage.set(page);
  
  if (targetId) {
    let attempts = 0;
    const checkExist = setInterval(() => {
      const element = document.getElementById(targetId);
      if (element) {
        clearInterval(checkExist);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      attempts++;
      // Stop checking after 20 attempts (1 second) to prevent infinite loop
      if (attempts >= 20) {
        clearInterval(checkExist);
      }
    }, 50);
  } else {
    // Use a small delay for top scrolling too to avoid page jumps from unmounted elements
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }
}
