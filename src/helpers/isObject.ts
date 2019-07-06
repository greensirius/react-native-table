export default function isObject(arg: any) {
  return arg !== null && !Array.isArray(arg) && typeof arg === 'object';
}
