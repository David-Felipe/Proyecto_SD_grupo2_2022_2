import { LinkedList } from "./LinkedList";
class AvlNode<T>{

    private ID: number;
    private data: T;
    private height: number = 0;
    private parent: AvlNode<T> | null = null;
    private rightSon: AvlNode<T> | null = null;
    private leftSon: AvlNode<T> | null = null;

    constructor(data: T, ID: number) {

        this.data = data;
        this.ID = ID;

    }

    // height modifiers
    setHeight(newHeight: number) {

        this.height = newHeight;

    }

    getHeight(): number {

        return this.height;

    }

    //data modifiers
    setData(newData: T, newID: number): void {

        this.data = newData;
        this.ID = newID;

    }

    getData(): T {

        return this.data;

    }

    getID(): number {

        return this.ID;

    }

    //parent modifiers
    setParent(newParent: AvlNode<T> | null) {

        this.parent = newParent;

    }

    getParent(): AvlNode<T> | null {

        return this.parent;

    }

    // rigthSon modifiers
    setRightSon(newRightSon: AvlNode<T> | null) {

        this.rightSon = newRightSon;

    }

    getRightSon(): AvlNode<T> | null {

        return this.rightSon;

    }

    // leftSon modifiers
    setLeftSon(newLeftSon: AvlNode<T> | null) {

        this.leftSon = newLeftSon;

    }

    getLeftSon(): AvlNode<T> | null {

        return this.leftSon;

    }

}

export class AvlBst<T> {

    private numElements: number;
    private root: AvlNode<T> | null = null;

    constructor(firstData: T, firstID: number) {

        this.root = new AvlNode(firstData, firstID);
        this.numElements = 0;

    }

    // Root and numElements getter
    getMainRoot(): AvlNode<T> | null {

        if (this.root != null) return this.root;
        return null;

    }

    getNumElements(): number {

        return this.numElements;

    }

    // data searcher
    findData(searchedID: number): T {

        let foundNode: AvlNode<T>;
        if (this.root != null) {

            foundNode = this.findNode(searchedID, this.root);
            if (foundNode.getID() == searchedID) return foundNode.getData();

            let errorMessage: String = `Node with searchedID: ${searchedID} wasn't found`;
            throw Error(errorMessage.toString());

        }

        let errorMessage: String = "Tree is empty cannot find anything";
        throw Error(errorMessage.toString());

    }

    // node Finder
    private find(searchedID: number): AvlNode<T> {

        let foundNode: AvlNode<T>;
        if (this.root != null) {

            foundNode = this.findNode(searchedID, this.root);
            if (foundNode.getID() == searchedID) return foundNode;

            let errorMessage: String = `Node with searchedID: ${searchedID} wasn't found`;
            throw Error(errorMessage.toString());

        }

        let errorMessage: String = "Tree is empty cannot find anything";
        throw Error(errorMessage.toString());

    }

    private findNode(searchedID: number, rootSearched: AvlNode<T>): AvlNode<T> {

        let currentID = rootSearched.getID();

        if (currentID == searchedID) {

            return rootSearched;

        }
        else if (searchedID > currentID) {

            let currentRightSon: AvlNode<T> | null = rootSearched.getRightSon();
            if (currentRightSon != null) return this.findNode(searchedID, currentRightSon);

            return rootSearched;

        }
        else if (searchedID < currentID) {

            let currentLeftSon: AvlNode<T> | null = rootSearched.getLeftSon();
            if (currentLeftSon != null) return this.findNode(searchedID, currentLeftSon);

            return rootSearched;

        }

        return rootSearched;

    }

    //find Ancestor and Descendant, could fail and return the root
    findRightDescendant(parentNode: AvlNode<T>): AvlNode<T> {

        let currentRightson: AvlNode<T> | null = parentNode.getRightSon();
        if (currentRightson == null) return parentNode;
        return this.findRightDescendant(currentRightson);

    }

    findLeftDescendant(parentNode: AvlNode<T>): AvlNode<T> {

        let currentLeftSon: AvlNode<T> | null = parentNode.getLeftSon();
        if (currentLeftSon == null) return parentNode;
        return this.findLeftDescendant(currentLeftSon);

    }

    private findRightAncestor(sonNode: AvlNode<T>): AvlNode<T> {

        let parentNode: AvlNode<T> | null = sonNode.getParent();

        if (parentNode != null) {

            if (sonNode.getID() < parentNode.getID()) return parentNode;
            return this.findRightAncestor(parentNode)

        }

        return sonNode; // ! if the initial son was the max then it won't return right ancestor

    }

    // find next
    private findNextNode(currentNode: AvlNode<T>): AvlNode<T> {

        let rightSon = currentNode.getRightSon();
        if (rightSon != null) return this.findLeftDescendant(rightSon);

        let rightAncestor = this.findRightAncestor(currentNode);
        if (currentNode.getID < rightAncestor.getID) return rightAncestor;

        throw Error("There is no next, the node had the max ID in the tree");

    }

    findNextData(currentID: number): T {

        try {

            let currentNode = this.find(currentID);
            let nextNode = this.findNextNode(currentNode);

            return nextNode.getData();

        }
        catch (error) {

            throw error;

        }

    }

    // rangeSearch
    searchRange(beggID: number, endID: number): LinkedList<T> {

        let nodesInRange: LinkedList<T> = new LinkedList<T>();
        let currentNode: AvlNode<T> = this.find(beggID);

        while (currentNode.getID() <= endID) {

            if (currentNode.getID() >= beggID) nodesInRange.pushBack(currentNode.getData());

            currentNode = this.findNextNode(currentNode);

        }

        return nodesInRange;

    }

    // Inserting a node
    insert(newNodeData: T, newNodeID: number) {

        let newNode: AvlNode<T> = new AvlNode<T>(newNodeData, newNodeID);

        if (this.root != null) this.insertNode(newNode, this.root);
        else this.root = newNode;

    }

    private insertNode(newNode: AvlNode<T>, treeToInsert: AvlNode<T>) {

        let newNodeID = newNode.getID();
        let parentNewNode: AvlNode<T>;

        parentNewNode = this.findNode(newNodeID, treeToInsert);
        let parentID: number = parentNewNode.getID();

        if (newNodeID == parentNewNode.getID()) throw Error(`El ID ${newNodeID} ya existe, no se pudo insertar el nuevo dato`);
        else if (newNodeID > parentID) parentNewNode.setRightSon(newNode);
        else if (newNodeID < parentID) parentNewNode.setLeftSon(newNode);

        newNode.setParent(parentNewNode);
        this.numElements++;

    }

    // TODO: Revisame plis
    delete(idNode: number): T {

        let nodeToDelete: AvlNode<T> | null;
        if (this.root != null) nodeToDelete = this.find(idNode);
        else throw Error("El arbol está vacio, no puedes borrar nada más");

        let leftSon = nodeToDelete.getLeftSon();
        let rightSon = nodeToDelete.getRightSon();
        let parent = nodeToDelete.getParent();

        if (leftSon != null && rightSon != null) {

            let descendant = this.findNextNode(nodeToDelete);
            let desParent = descendant.getParent();
            let desRightSon = descendant.getRightSon();

            // descendant right son gets promoted
            desParent?.setLeftSon(desRightSon);
            desRightSon?.setParent(desParent);

            // descendant takes the place of nodeToDel
            if (descendant == rightSon) {           // * special but problematic case

                descendant.setRightSon(desRightSon);
                desRightSon?.setParent(descendant);

            }
            else {                                  // * all other cases

                descendant.setRightSon(rightSon);
                desRightSon?.setParent(desParent);

            }

            descendant.setLeftSon(leftSon);
            if (parent != null) this.insertNode(descendant, parent);

        }
        else if (rightSon == null && leftSon == null) {

            if (parent == null) {

                this.root = null;

            }
            else {

                let idParent = parent.getID();
                let idDeleted = nodeToDelete.getID();

                if (idDeleted > idParent) parent.setRightSon(null);
                if (idDeleted < idParent) parent.setLeftSon(null);

            }

        }
        else if (leftSon == null) {

            if (parent == null) this.root = null;
            else {

                if (rightSon != null) this.insertNode(rightSon, parent);

            }

        }
        else if (rightSon == null) {

            if (parent == null) this.root == null;
            else {

                this.insertNode(leftSon, parent);

            }

        }

        this.numElements--;
        return nodeToDelete.getData();

    }

    // TODO si todo lo arriba está bien, ya solo faltaría implementar rotaciones y balanceo

}