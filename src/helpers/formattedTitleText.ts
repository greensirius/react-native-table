type TextFormat = 'capitalize' | 'lowercase' | 'uppercase';
export default function formattedTitleText(
  text: string,
  type?: TextFormat
): string {
  let capText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  let titleText = capText.replace(
    /(-|_|\s)[a-z]/g,
    (str) => ' ' + str[1].toUpperCase()
  );
  return type === 'uppercase'
    ? titleText.toUpperCase()
    : type === 'lowercase'
    ? titleText.toLowerCase()
    : titleText;
}
