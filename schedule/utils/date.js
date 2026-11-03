export function strToDate(str) {
  return new Date(
    Number(str.slice(0, 4)),
    Number(str.slice(4, 6)) - 1,
    Number(str.slice(6, 8)),
    Number(str.slice(9, 11)),
    Number(str.slice(11, 13)),
    Number(str.slice(13, 15))
  );
}

export function dateToFrCh(date) {
  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${days[date.getDay()]} ${day}.${month}`;
}

export function dateToHours(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}
