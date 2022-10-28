import Node from './Node';

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

let singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(10);
