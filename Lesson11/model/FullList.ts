import LisItem from "./ListItem";

interface List {
  list: LisItem[];
  load(): void;
  save(): void;
  removeItem(id: string): void;
  clearList(): void;
  addItem(itemObj: LisItem): void;
}
export default class FullList implements List {}
