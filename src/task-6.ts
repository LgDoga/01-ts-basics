function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true

// Перевірка: змішаний масив не пройде з конкретним типом
// getFirstElement<number>([1, "a", 3]); // Помилка: Type 'string' is not assignable to type 'number'

// Для змішаного масиву потрібно явно вказати union-тип:
getFirstElement<number | string>([1, "a", 3]); // ✅