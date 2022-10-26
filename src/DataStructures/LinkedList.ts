class LinLstNode<T> {

    private data: T;
    private next: LinLstNode<T> | null;
    private previous: LinLstNode<T> | null;

    constructor(data: T) {

        this.data = data;
        this.next = null;
        this.previous = null;

    }

    // Data modifiers
    setData(newData: T): void {

        this.data = newData;

    }

    getData(): T {

        return this.data;

    }

    // Next modifiers
    setNext(newNext: LinLstNode<T>): void {

        this.next = newNext;

    }

    getNext(): LinLstNode<T> | null {

        return this.next;

    }

    // Previous modifiers
    setPrevious(newPrevious: LinLstNode<T>): void {

        this.previous = newPrevious;

    }

    getPrevious(): LinLstNode<T> | null {

        return this.previous;

    }

}

export class LinkedList<T> {

    private head: any;
    private tail: any;
    private cursor: any;
    private numElements: number;

    constructor() {

        this.head = null;
        this.tail = null;
        this.cursor = null;
        this.numElements = 0;

    }

    getNumElements(): number {

        return this.numElements;

    }

    isEmpty(): boolean {

        if (this.numElements == 0) return true;
        return false;

    }

    // pushes
    pushFront(newData: T): void {

        let newNode: LinLstNode<T>;
        newNode = new LinLstNode<T>(newData);

        if (this.isEmpty()) {

            this.head = newNode;
            this.tail = newNode;

        } else {

            newNode.setNext(this.head);
            this.head.setPrevious(newNode);
            this.head = newNode;

        }

        this.numElements++;

    }

    pushBack(newData: T) {

        let newNode: LinLstNode<T> = new LinLstNode<T>(newData);

        if (this.isEmpty()) {

            this.head = newNode;
            this.tail = newNode;

        } else {

            this.tail.setNext(newNode);
            newNode.setPrevious(this.tail);
            this.tail = newNode;

        }

        this.numElements++;

    }

    //toppers
    topFront(): T {

        if (this.isEmpty()) throw new Error("You cannot top an empty list");

        return this.head.getData();

    }

    topBack(): T {

        if (this.isEmpty()) throw new Error("You cannot top an empty list");

        return this.tail.getData();

    }

    //poppers
    popFront(): T {

        if (this.isEmpty()) throw new Error("You cannot pop an empty list");

        let popped: LinLstNode<T> = this.head;

        if (this.head == this.tail) {

            this.head = null;
            this.tail = null;

        } else {

            this.head = this.head.getNext();
            this.head.setPrevious(null);

        }

        this.numElements--;
        return popped.getData();

    }

    popBack(): T {

        if (this.isEmpty()) throw new Error("You cannot pop an empty list");

        let popped: LinLstNode<T> = this.tail;

        if (this.head == this.tail) {

            this.head = null;
            this.tail = null;

        } else {

            this.tail = this.tail.getPrevious();
            this.tail.setNext(null);

        }

        this.numElements--;
        return popped.getData();

    }

    // CusorAt
    takeCursorTo(index: number): void {

        if (index >= this.numElements) throw new Error("El indice dado (" + index.toString() + ") es mayor que el numero de elementos en la lista (" + this.numElements.toString() + ")");

        if (index < 0) throw new Error("El indice dado (" + index.toString() + ") es menor que cero");

        this.cursor = this.head;

        for (let i: number = 0; i != index; i++) {

            this.cursor = this.cursor.getNext();

        }

    }

    // GetDataAt
    getDataAt(index: number): T {

        let buscado: T;

        this.takeCursorTo(index);

        buscado = this.cursor.getData();
        this.cursor = this.head;

        return buscado;

    }

    //DeleteAt
    deleteAt(index: number): T {

        this.takeCursorTo(index);

        let borrado: T = this.cursor.getData();

        if (index == 0) {

            this.numElements--;
            return this.popFront();

        }
        else if (index == this.numElements - 1) {

            this.numElements--;
            return this.popBack();

        }

        let siguiente: LinLstNode<T> = this.cursor.getNext();
        let anterior: LinLstNode<T> = this.cursor.getPrevious();

        anterior.setNext(siguiente);
        siguiente.setPrevious(anterior);

        this.numElements--;
        return borrado;

    }

    getCopy(): LinkedList<T> {

        if (this.isEmpty()) throw Error("Cannot copy an empty list");

        this.cursor = this.head;
        let copia: LinkedList<T> = new LinkedList<T>();

        while (this.cursor != null) {

            copia.pushBack(this.cursor.getData());
            this.cursor = this.cursor.getNext();

        }

        return copia;

    }

}