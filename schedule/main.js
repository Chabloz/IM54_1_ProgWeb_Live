import { getNode, getNodes, cloneTemplate, forEach, on } from './utils/dom.js';
import { strToDate, dateToFrCh, dateToHours } from './utils/date.js';
import { schedules } from './utils/schedule.js';

// const courses = getNodes('VEVENT', schedules['M53-1']);
// for (const cours of courses) {
//   const dateStart = getNode('DTSTART', cours);
//   console.log(dateStart.textContent);
// }

on('.btn-schedule', 'click', (btn) => {
  console.log(btn);
})



localStorage.setItem('theme', 'light');

console.log('Start');

fetch('https://swapi.dev/api/planets/2/')
  .then(response => {
    console.log('Response available', response);
    return response.json();
  })
  .then(data => {
    console.log(data.name);
  })
  .catch(error => {
    console.log(error);
  })



console.log('Continuing execution');