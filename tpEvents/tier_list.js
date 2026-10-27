import { on, getNode, delegateOn } from "../utils/dom.js";

const firstP = document.querySelector('p');
firstP.querySelector('span');


const tmplItem = getNode('article.item', getNode('#item-template').content).cloneNode(true);
// C.R.U.D

// Create
on('#add-item-form', 'submit', (form, event) => {
  event.preventDefault();
  const itemName = getNode('#item-name').value;
  getNode('#item-name').value = '';
  const tierS = getNode('[ data-tier="S"] .items');
  const clone = tmplItem.cloneNode(true);
  getNode('.item-name', clone).innerHTML = itemName;
  tierS.append(clone);

})

// Delete
delegateOn('body', '[data-action="delete"]', 'click', () => {
  console.log('click');
})