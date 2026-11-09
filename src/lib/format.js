const formatter = new Intl.NumberFormat("ar-SY");

export function money(value) {
  return `${formatter.format(Number(value || 0))} ل.س`;
}
