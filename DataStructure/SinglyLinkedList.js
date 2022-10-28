import Node from './Node';

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (value) => {
    // 새로운 노드 생성
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  };
}

let singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(10);
