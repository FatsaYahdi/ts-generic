// most used type
const obj = {
  name: "John",
  age: 30,
};

type Person = keyof typeof obj;

// useful type
const func = async () => {
  const val = "str";
  return val;
};
type Return = Awaited<ReturnType<typeof func>>;

interface MainType {
  name: string;
  age: number;
}
type NestedType = MainType & {
  isAlive: boolean;
};

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type MyType2 = Prettify<NestedType>;

// neat type
interface Todo {
  title: string;
  description: string;
}
const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return { ...todo, ...fieldsToUpdate };
};

const initialTodo: Todo = {
  title: "Buy Milk",
  description: "Buy milk",
};
const updatedTodo = updateTodo(initialTodo, {
  description: "Buy milk and bread",
});

// omit
type Ommited = Omit<Todo, "title">;
// exclude
type Shapes =
  | {
      name: "circle";
      radius: number;
    }
  | {
      name: "square";
      x: number;
    };
type ExcludeShapes = Exclude<Shapes, { x: number }>;
