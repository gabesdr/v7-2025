/** @typedef {Object} TodoItem
 * @property {string} text
 * @property {boolean} finished
 */

/** Verkefnalistinn okkar, hann mun innihalda hluti (objects) af týpu
 * `TodoItem`.
 * Með því að skilgreina týpuna og kveikja á `Check JS` í VSCode fáum við villu
 * ef við reynum að setja eitthvað annað en `TodoItem` í listann.
 * @type {TodoItem[]}
 */
const todoList = [
  { text: "Læra CSS", finished: true },
  { text: "Læra JavaScript", finished: true },
  { text: "Búa til verkefnalista", finished: true },
];

console.log("halló frá scripts.js");

/**
 * Búa til verkefni og bæta því aftast í verkefnalistann.
 * @param {unknown} input - Texti verkefnis, ætti að vera strengur.
 * @returns {number} Ný stærð verkefnalistans.
 */
function createTodoItem(input) {
    if (typeof input === 'string') {
        const item = {
            text: String(input),
            finished: false,
        };
        return todoList.push(item);
    }
    console.error('Input þarf að vera strengur')
    return -1
}

// Verkefnalistayfirýsing.
function list() {
  for (const todoItem of todoList) {
    console.log(todoItem.text, "er", todoItem.finished ? "búið" : "ekki búið");
  }
}

/**
 * Breytir stöðu verkefnis í „klárað“ eða „óklárað“.
 * @param {unknown} index - Index verkefnis í lista, verður að vera á bilinu
 *   [0, todoList.length], ætti að vera tala
 * @returns {boolean} - `true` ef breyting tókst, annars `false`.
 */
function toggleFinished(index) {
  if (typeof index !== 'number' || index < 0 || index >= todoList.length) {
    console.error(`index verður að vera tala á bilinu [0, ${todoList.length - 1}]`
    );
    return false;
  }

  todoList[index].finished = !todoList[index].finished;
  return true;
}

// Stats
function stats() {
  const total = todoList.length;
  let finished = 0;
  for (const item of todoList) {
    if (item.finished) {
      finished += 1;
    }
  }
  const unfinished = total - finished;

  console.log(`Verkefni samtals: ${total}`);
  console.log(`Kláruð verkefni: ${finished}`);
  console.log(`Ókláruð verkefni: ${unfinished}`);
}

// Clear Function
function clear() {
  todoList.length = 0;
}

// Start Function
function start() {
  let addTodo = true;

  while (addTodo) {
    const input = prompt("Sláðu inn verkefni, eða ýttu á 'ESC' til að ljúka:");

    if (input === null || input === "") {
      addTodo = false;
    } else {
      createTodoItem(input);
    }
  }

  console.log("--- Verkefnalisti ---");
  list();
  console.log("--- Staða ---");
  stats();
}
