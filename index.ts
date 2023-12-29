// function
function getFirstElement<ElementType>(array: ElementType[]): ElementType {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers);

const strings = ["1", "2", 3];
const firstString = getFirstElement(strings);

const input = document.querySelector<HTMLInputElement>(".input");
const value = input?.value;

const map = new Map<string, Map<string, number>>();

// type
type ApiResponse<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

const response: ApiResponse = {
  data: {
    status: 200,
  },
  isError: false,
};

type Entity = {
  name: string;
  age: number;
};
const myObject: Entity = {
  name: "John",
  age: 30,
};

const withValidation = <E>(entity: E) => {
  return {
    ...entity,
    validate() {},
  };
};
const newObject = withValidation(myObject);
newObject.validate();

// implementation
type People = {
  name: string;
  age: number;
  friends: string[];
};

const person = createPerson<People>({
  name: "John",
  age: 30,
  friends: [],
});

const age = person.get("friends");
person.set("age", (currentAge) => currentAge + 1);

function createPerson<TypePerson extends Record<string, any>>(
  initialState: TypePerson
) {
  const person = initialState;
  return {
    set<Key extends keyof TypePerson>(
      key: Key,
      callback: (current: TypePerson[Key]) => TypePerson[Key]
    ) {
      person[key] = callback(person[key]);
    },
    get<Key extends keyof TypePerson>(key: Key) {
      return person[key];
    },
  };
}

type MyType = ReturnType<typeof createPerson<People>>;

function Header(person: MyType) {
  person.get("age");
  person.set("age", () => 2);
  return "hello";
}

Header(person);
