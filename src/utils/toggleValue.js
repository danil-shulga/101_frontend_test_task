export const toggleValue = (currentValue = '', value1 = '', value2 = '') => {
  return currentValue === value1 ? value2 : value1
}