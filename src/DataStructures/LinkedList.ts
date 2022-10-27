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
    setNext(newNext: LinLstNode<T> | null): void {

        this.next = newNext;

    }

    getNext(): LinLstNode<T> | null {

        return this.next;

    }

    // Previous modifiers
    setPrevious(newPrevious: LinLstNode<T> | null): void {

        this.previous = newPrevious;

    }

    getPrevious(): LinLstNode<T> | null {

        return this.previous;

    }

}

export class LinkedList<T> {

    private head: LinLstNode<T> | null;
    private tail: LinLstNode<T> | null;
    private cursor: LinLstNode<T> | null;
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

        if (this.head == null && this.tail == null) return true;
        return false;

    }

    // pushes
    pushFront(newData: T): void {

        const newNode = new LinLstNode<T>(newData);

        if (this.head == null) {

            this.head = newNode;
            this.tail = newNode;

        } else {

            this.head.setPrevious(newNode);
            newNode.setNext(this.head);
            this.head = newNode;

        }

        this.numElements++;

    }

    pushBack(newData: T) {

        const newNode: LinLstNode<T> = new LinLstNode<T>(newData);

        if (this.tail == null) {

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

        if (this.head == null) throw new Error("You cannot top an empty list");

        return this.head.getData();

    }

    topBack(): T {

        if (this.tail == null) throw new Error("You cannot top an empty list");

        return this.tail.getData();

    }

    //poppers
    popFront(): T {

        if (this.head == null) throw new Error("You cannot pop an empty list");

        const popped: LinLstNode<T> = this.head;
        const next = this.head.getNext();

        if (next == null) {

            this.head = null;
            this.tail = null;

        } else {

            this.head.setNext(null);
            this.head = next;
            next.setPrevious(null);

        }

        this.numElements--;
        return popped.getData();

    }

    popBack(): T {

        if (this.tail == null) throw new Error("You cannot pop an empty list");

        const popped: LinLstNode<T> = this.tail;
        const previous = this.tail.getPrevious();

        if (previous == null) {

            this.head = null;
            this.tail = null;

        } else {

            this.tail.setPrevious(null);
            this.tail = previous;
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

        for (let i = 0; i != index; i++) {

            if (this.cursor == null) throw new Error("No existe la posición" + i.toString());
            this.cursor = this.cursor.getNext();

        }

    }

    // GetDataAt
    getDataAt(index: number): T {


        this.takeCursorTo(index);

        if (this.cursor == null) throw Error("No se puede obtener el valor en" + index.toString());
        const buscado = this.cursor.getData();
        this.cursor = this.head;

        return buscado;

    }

    //DeleteAt
    deleteAt(index: number): T {

        this.takeCursorTo(index);

        if (this.cursor == null) throw Error("No se puede obtener el valor en" + index.toString());
        const borrado: T = this.cursor.getData();

        if (index == 0) {

            this.numElements--;
            return this.popFront();

        }
        else if (index == this.numElements - 1) {

            this.numElements--;
            return this.popBack();

        }

        const siguiente: LinLstNode<T> | null = this.cursor.getNext();
        const anterior: LinLstNode<T> | null = this.cursor.getPrevious();

        if (anterior != null) anterior.setNext(siguiente);
        if (siguiente != null) siguiente.setPrevious(anterior);

        this.numElements--;
        return borrado;

    }

    getCopy(): LinkedList<T> {

        if (this.isEmpty()) throw Error("Cannot copy an empty list");

        this.cursor = this.head;
        const copia: LinkedList<T> = new LinkedList<T>();

        while (this.cursor != null) {

            copia.pushBack(this.cursor.getData());
            this.cursor = this.cursor.getNext();

        }

        return copia;

    }

}