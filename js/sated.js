// TASK >>>>> A wolf in sheep's clothing
// LINK >>>>> https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

// Translate:
// Вовків повернули в Великобританію. Ви є фермером овець і тепер вас турбують вовки,
// які притворяються овцями. На щастя, ви добре впізнаєте їх.
// Попереджайте овець, яка стоїть перед вовком, що її збираються з'їсти. Пам'ятайте, 
// що ви стоїте на передньому кінці черги, яка знаходиться в кінці масиву:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (ВИ ЗНАХОДИТЕСЬ ТУТ НА ПЕРЕДНЬОМУ КІНЦІ ЧЕРГИ)
// 7 6 5 4 3 2 1

// Якщо вовк є найближчим тваринам до вас, поверніть "Pls go away and stop eating my sheep" 
// (Будь ласка, піди геть і перестань їсти моїх овець"). В іншому випадку поверніть "Oi! Sheep number N! You are about to be eaten by a wolf!" (Ой! Овця номер N! Вас збираються з'їсти вовком!"), де N - позиція овці в черзі.


// РІШЕННЯ:

// 1. Отримати позицію вовка в черзі:

// 2. Знайти індекс "wolf" в масиві queue за допомогою методу indexOf().
// Зберегти отриманий індекс у змінну wolfIndex.
// Перевірити, чи вовк є найближчим тваринам до вас:

// 3. Порівняти wolfIndex з довжиною масиву queue мінус 1.
// Якщо wolfIndex дорівнює довжині масиву queue мінус 1, то вовк є найближчим тваринам.
// У такому випадку повернути рядок "Pls go away and stop eating my sheep".
// Якщо вовк не є найближчим тваринам:

// 4. Визначити позицію овці, яка знаходиться перед вовком у черзі.
// Позиція овці буде рівна довжині масиву queue мінус wolfIndex мінус 1.
// Повернути рядок "Oi! Sheep number N! You are about to be eaten by a wolf!", де N - позиція овці в черзі.

function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf("wolf");                                            // Отримати позицію вовка в черзі
    if (wolfIndex === queue.length - 1) {                                               // Перевірити, чи вовк є найближчим тваринам
      return "Pls go away and stop eating my sheep";                                    // Вовк є найближчим тваринам
    } else {
      const sheepPosition = queue.length - wolfIndex - 1;                               // Визначити позицію овці перед вовком
      return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`; // Овця буде з'їдена вовком
    }
}


