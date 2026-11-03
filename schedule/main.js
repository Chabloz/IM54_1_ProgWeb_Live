import { getNode, getNodes, cloneTemplate, forEach, on } from './utils/dom.js';
import { strToDate, dateToFrCh, dateToHours } from './utils/date.js';
import { schedules } from './utils/schedule.js';

const courses = getNodes('VEVENT', schedules['M53-1']);
for (const cours of courses) {
  const dateStart = getNode('DTSTART', cours);
  console.log(dateStart.textContent);
}

localStorage.setItem('theme', 'light');