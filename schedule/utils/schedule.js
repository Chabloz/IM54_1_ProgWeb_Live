const files = import.meta.glob('/schedules/*.xml', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const parser = new DOMParser();
export const schedules = {};

for (const [path, xmlText] of Object.entries(files)) {
  const classId = path.split('/').pop().replace('.xml', '');
  const xmlDom = parser.parseFromString(xmlText, 'application/xml');

  schedules[classId] = xmlDom;
}
