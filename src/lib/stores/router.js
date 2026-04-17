import { writable } from 'svelte/store';

// Simple client-side router store
// Pages: 'home', 'profil', 'materi', 'geraktari', 'evaluasi'
export const currentPage = writable('home');

export function navigate(page) {
  currentPage.set(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
