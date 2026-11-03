import { getNode, tmplClone, on, delegateOn, swapNodes } from "../utils/dom.js";

const TIERS = ['S', 'A', 'B', 'C', 'D'];
const tmplItem = tmplClone('#item-template');

// Create
on('#add-item-form', 'submit', (form, event) => {
  event.preventDefault();
  const itemName = getNode('#item-name').value;
  getNode('#item-name').value = '';
  const tierS = getNode('[ data-tier="S"] .items');
  const clone = tmplItem.cloneNode(true);
  getNode('.item-name', clone).textContent = itemName;
  tierS.append(clone);
});

// Delete
delegateOn('#tiers', '[data-action="delete"]', 'click', (btnTrash) => {
  const card = btnTrash.closest('.item');
  if (confirm('Are you sure ?')) card.remove();
});

// Go down
delegateOn('#tiers', '[data-action="down"]', 'click', (btnDown) => {
  const card = btnDown.closest('.item')
  const tierActual = card.closest('.tier').dataset.tier;
  const tierTarget = TIERS[TIERS.findIndex(t => t == tierActual) + 1] ?? false;
  if (!tierTarget) return;
  card.remove();
  getNode(`[data-tier="${tierTarget}"] .items`).append(card);
});

// Go up
delegateOn('#tiers', '[data-action="up"]', 'click', (btnUp) => {
  const card = btnUp.closest('.item')
  const tierActual = card.closest('.tier').dataset.tier;
  const tierTarget = TIERS[TIERS.findIndex(t => t == tierActual) - 1] ?? false;
  if (!tierTarget) return;
  card.remove();
  getNode(`[data-tier="${tierTarget}"] .items`).append(card);
});

// Go prev
delegateOn('#tiers', '[data-action="previous"]', 'click', (btnPrev) => {
  const card = btnPrev.closest('.item')
  const cardPrevious = card.previousElementSibling ?? false;
  if (!cardPrevious) return;
  swapNodes(card, cardPrevious);
});

// Go next
delegateOn('#tiers', '[data-action="next"]', 'click', (btnNext) => {
  const card = btnNext.closest('.item')
  const cardNext = card.nextElementSibling ?? false;
  if (!cardNext) return;
  swapNodes(card, cardNext);
});