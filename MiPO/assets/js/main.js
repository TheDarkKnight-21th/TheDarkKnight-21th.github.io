const modal = document.getElementById('imageModal');
const modalImg = modal?.querySelector('img');
const modalClose = modal?.querySelector('.modal-close');

function openModal(src, alt) {
  if (!modal || !modalImg) return;
  modalImg.src = src;
  modalImg.alt = alt || 'Expanded figure';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  if (!modal || !modalImg) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  document.body.classList.remove('no-scroll');
}

document.querySelectorAll('.zoomable').forEach((img) => {
  img.addEventListener('click', () => openModal(img.getAttribute('src'), img.getAttribute('alt')));
});

modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

const copyButton = document.getElementById('copyBib');
const bibtexText = document.getElementById('bibtexText');
copyButton?.addEventListener('click', async () => {
  const text = bibtexText?.innerText || '';
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = 'Copied!';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 1400);
  } catch {
    copyButton.textContent = 'Select BibTeX';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 1400);
  }
});
