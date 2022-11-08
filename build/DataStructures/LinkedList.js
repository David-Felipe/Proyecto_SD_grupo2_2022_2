"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinLstNode = /** @class */ (function () {
    function LinLstNode(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
    // Data modifiers
    LinLstNode.prototype.setData = function (newData) {
        this.data = newData;
    };
    LinLstNode.prototype.getData = function () {
        return this.data;
    };
    // Next modifiers
    LinLstNode.prototype.setNext = function (newNext) {
        this.next = newNext;
    };
    LinLstNode.prototype.getNext = function () {
        return this.next;
    };
    // Previous modifiers
    LinLstNode.prototype.setPrevious = function (newPrevious) {
        this.previous = newPrevious;
    };
    LinLstNode.prototype.getPrevious = function () {
        return this.previous;
    };
    return LinLstNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.cursor = null;
        this.numElements = 0;
    }
    LinkedList.prototype.getNumElements = function () {
        return this.numElements;
    };
    LinkedList.prototype.isEmpty = function () {
        if (this.numElements == 0)
            return true;
        else if (this.numElements < 0)
            throw Error("numElements is less than zero");
        return false;
    };
    // pushes
    LinkedList.prototype.pushFront = function (newData) {
        var newNode = new LinLstNode(newData);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.setPrevious(newNode);
            newNode.setNext(this.head);
            this.head = newNode;
        }
        this.numElements++;
    };
    LinkedList.prototype.pushBack = function (newData) {
        var newNode = new LinLstNode(newData);
        if (this.tail == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.setNext(newNode);
            newNode.setPrevious(this.tail);
            this.tail = newNode;
        }
        this.numElements++;
    };
    //toppers
    LinkedList.prototype.topFront = function () {
        if (this.head == null)
            throw new Error("You cannot top an empty list");
        return this.head.getData();
    };
    LinkedList.prototype.topBack = function () {
        if (this.tail == null)
            throw new Error("You cannot top an empty list");
        return this.tail.getData();
    };
    //poppers
    LinkedList.prototype.popFront = function () {
        if (this.head == null)
            throw new Error("You cannot pop an empty list");
        var popped = this.head;
        var next = this.head.getNext();
        if (next == null) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head.setNext(null);
            this.head = next;
            next.setPrevious(null);
        }
        this.numElements--;
        return popped.getData();
    };
    LinkedList.prototype.popBack = function () {
        if (this.tail == null)
            throw new Error("You cannot pop an empty list");
        var popped = this.tail;
        var previous = this.tail.getPrevious();
        if (previous == null) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail.setPrevious(null);
            this.tail = previous;
            this.tail.setNext(null);
        }
        this.numElements--;
        return popped.getData();
    };
    // CusorAt
    LinkedList.prototype.takeCursorTo = function (index) {
        if (index >= this.numElements)
            throw new Error("El indice dado (" + index.toString() + ") es mayor que el numero de elementos en la lista (" + this.numElements.toString() + ")");
        if (index < 0)
            throw new Error("El indice dado (" + index.toString() + ") es menor que cero");
        this.cursor = this.head;
        for (var i = 0; i != index; i++) {
            if (this.cursor == null)
                throw new Error("No existe la posición" + i.toString());
            this.cursor = this.cursor.getNext();
        }
    };
    // GetDataAt
    LinkedList.prototype.getDataAt = function (index) {
        this.takeCursorTo(index);
        if (this.cursor == null)
            throw Error("No se puede obtener el valor en" + index.toString());
        var buscado = this.cursor.getData();
        this.cursor = this.head;
        return buscado;
    };
    //DeleteAt
    LinkedList.prototype.deleteAt = function (index) {
        this.takeCursorTo(index);
        if (this.cursor == null)
            throw Error("No se puede obtener el valor en" + index.toString());
        var borrado = this.cursor.getData();
        if (index == 0) {
            this.numElements--;
            return this.popFront();
        }
        else if (index == this.numElements - 1) {
            this.numElements--;
            return this.popBack();
        }
        var siguiente = this.cursor.getNext();
        var anterior = this.cursor.getPrevious();
        if (anterior != null)
            anterior.setNext(siguiente);
        if (siguiente != null)
            siguiente.setPrevious(anterior);
        this.numElements--;
        return borrado;
    };
    LinkedList.prototype.getCopy = function () {
        if (this.isEmpty())
            throw Error("Cannot copy an empty list");
        this.cursor = this.head;
        var copia = new LinkedList();
        while (this.cursor != null) {
            copia.pushBack(this.cursor.getData());
            this.cursor = this.cursor.getNext();
        }
        return copia;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
