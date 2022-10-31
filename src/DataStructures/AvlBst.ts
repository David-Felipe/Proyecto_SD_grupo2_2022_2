import { LinkedList } from "./LinkedList";
class AvlNode<T>{

    private ID: number;
    private data: T;
    private height = 1;
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

    private updHeight(parent: AvlNode<T> | null) {

        if (parent == null) return;

        const grandFather = parent.getParent();

        const rightSon = parent.getRightSon();
        const leftSon = parent.getLeftSon();

        let rightHeight: number;
        let leftHeight: number;

        if (rightSon != null) rightHeight = rightSon.getHeight();
        else rightHeight = 0;


        if (leftSon != null) leftHeight = leftSon.getHeight();
        else leftHeight = 0;

        parent.setHeight(1 + Math.max(leftHeight, rightHeight));

        // Para que no itere de forma innecesaria
        if (grandFather != null) {

            const brother = grandFather.getLeftSon();
            const sister = grandFather.getRightSon();

            let broHeight: number;
            let sisHeight: number;

            if (brother != null) broHeight = brother.getHeight();
            else broHeight = 0;

            if (sister != null) sisHeight = sister.getHeight();
            else sisHeight = 0;

            if (Math.abs(sisHeight - broHeight) == 0) return;

        }

        this.updHeight(grandFather);

    }

    // data modifiers
    // ! NO se puede cambiar el dato de un nodo
    // * Ya no se podrían encontrar los datos en el arbol
    protected setData(newData: T, newID: number): void {

        this.data = newData;
        this.ID = newID;

    }

    getData(): T {

        return this.data;

    }

    getID(): number {

        return this.ID;

    }

    // ! NO se puede cambiar el ID de un nodo
    // * Eso se tiraría el arbol
    protected setID(newID: number) {

        this.ID = newID;

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
        this.updHeight(this);

    }

    getRightSon(): AvlNode<T> | null {

        return this.rightSon;

    }

    // leftSon modifiers
    setLeftSon(newLeftSon: AvlNode<T> | null) {

        this.leftSon = newLeftSon;
        this.updHeight(this);

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
        this.numElements = 1;

    }

    // Root and numElements getter
    getRootData(): T {

        if (this.root != null) return this.root.getData();
        throw Error("Can't return root data, cause tree is empty");

    }

    getNumElements(): number {

        return this.numElements;

    }

    // data searcher
    // * User data searcher
    findData(searchedID: number): T {

        let foundNode: AvlNode<T>;
        if (this.root != null) {

            foundNode = this.findNode(searchedID, this.root);
            if (foundNode.getID() == searchedID) return foundNode.getData();

            const errorMessage = `Node with searchedID: ${searchedID} wasn't found`;
            throw Error(errorMessage.toString());

        }

        const errorMessage = "Tree is empty, cannot find anything";
        throw Error(errorMessage.toString());

    }

    // node Finder
    // * estrict node finder, if it's not the same, returns error
    private find(searchedID: number): AvlNode<T> {

        let foundNode: AvlNode<T>;
        if (this.root != null) {

            foundNode = this.findNode(searchedID, this.root);
            if (foundNode.getID() == searchedID) return foundNode;

            const errorMessage = `Node with searchedID: ${searchedID} wasn't found`;
            throw Error(errorMessage.toString());

        }

        const errorMessage = "Tree is empty, cannot find anything";
        throw Error(errorMessage.toString());

    }

    private findNode(searchedID: number, rootSearched: AvlNode<T>): AvlNode<T> {

        const currentID = rootSearched.getID();

        if (currentID == searchedID) {

            return rootSearched;

        }
        else if (searchedID > currentID) {

            const currentRightSon: AvlNode<T> | null = rootSearched.getRightSon();
            if (currentRightSon != null) return this.findNode(searchedID, currentRightSon);

            return rootSearched;

        }
        else if (searchedID < currentID) {

            const currentLeftSon: AvlNode<T> | null = rootSearched.getLeftSon();
            if (currentLeftSon != null) return this.findNode(searchedID, currentLeftSon);

            return rootSearched;

        }

        // Should never happen, but ts compiler begged for it
        return rootSearched;

    }

    // ! when a node doesn't have family, he is his own descendant or ancestor
    // * Finds max of a given tree
    private findRightDescendant(parentNode: AvlNode<T>): AvlNode<T> {

        const currentRightson: AvlNode<T> | null = parentNode.getRightSon();
        if (currentRightson == null) return parentNode;
        return this.findRightDescendant(currentRightson);

    }

    // * Finds min of a given tree
    private findLeftDescendant(parentNode: AvlNode<T>): AvlNode<T> {

        const currentLeftSon: AvlNode<T> | null = parentNode.getLeftSon();
        if (currentLeftSon == null) return parentNode;
        return this.findLeftDescendant(currentLeftSon);

    }

    // * Finds the first ancestor that is greater than the given son
    // ! if the initial son was the max then it won't return right ancestor
    private findRightAncestor(sonNode: AvlNode<T>): AvlNode<T> {

        const parentNode: AvlNode<T> | null = sonNode.getParent();

        if (parentNode != null) {

            // * Case in which sonNode was the max in the tree
            if (this.root != null) {

                // * If sonNode == max(this.root) return sonNode
                if (sonNode == this.findRightDescendant(this.root)) return sonNode;

            }

            return this.rightAncestorIterator(sonNode);

        }

        return sonNode;

    }

    // * mismo findRightAncestor solo que sin la verficación de max, para que no la repita cada vez
    private rightAncestorIterator(sonNode: AvlNode<T>): AvlNode<T> {

        const parentNode: AvlNode<T> | null = sonNode.getParent();

        if (parentNode != null) {

            return this.rightAncestorIterator(sonNode);

        }

        return sonNode;

    }

    // find next
    private findNextNode(currentNode: AvlNode<T>): AvlNode<T> {

        const rightSon = currentNode.getRightSon();
        if (rightSon != null) return this.findLeftDescendant(rightSon);

        const rightAncestor = this.findRightAncestor(currentNode);
        if (currentNode.getID < rightAncestor.getID) return rightAncestor;

        throw Error("There is no next, the node had the max ID in the tree");

    }

    // * find next data para usuario
    findNextData(currentID: number): T {

        const currentNode = this.find(currentID);
        const nextNode = this.findNextNode(currentNode);

        return nextNode.getData();

    }

    // rangeSearch
    searchRange(beggID: number, endID: number): LinkedList<T> {

        if (this.root == null) throw ("El arbol está vacio, no puedo hacer un searchRange");

        const nodesInRange: LinkedList<T> = new LinkedList<T>();
        let currentNode: AvlNode<T> = this.findNode(beggID, this.root);

        while (currentNode.getID() <= endID) {

            if (currentNode.getID() >= beggID) nodesInRange.pushBack(currentNode.getData());

            currentNode = this.findNextNode(currentNode);

        }

        return nodesInRange;

    }

    // Inserting a node
    // * Insertar dato para usuario
    insert(newNodeData: T, newNodeID: number) {

        const newNode: AvlNode<T> = new AvlNode<T>(newNodeData, newNodeID);

        if (this.root != null) {

            this.insertNode(newNode, this.root);
            // rebalancing
            const parent = newNode.getParent();
            if (parent != null) this.rebalance(parent);

        }
        else {

            this.root = newNode;
            newNode.setParent(null);

        }

        // * linea de testeo
        // console.log(`El nodo insertado fue el de ID: ${newNode.getID()}`)

        this.numElements++;

    }

    private insertNode(newNode: AvlNode<T>, treeToInsert: AvlNode<T>) {

        const newNodeID = newNode.getID();
        const parentNewNode = this.findNode(newNodeID, treeToInsert);
        const parentID: number = parentNewNode.getID();


        if (newNodeID == parentID) throw Error(`El ID ${newNodeID} ya existe, no se pudo insertar el nuevo dato`);
        else if (newNodeID > parentID) {

            newNode.setParent(parentNewNode);
            parentNewNode.setRightSon(newNode);

        }
        else if (newNodeID < parentID) {

            newNode.setParent(parentNewNode);
            parentNewNode.setLeftSon(newNode);
        }

    }

    // Toda la familia de deletes
    // * El delete que usa el usuario, elimina un dato
    delete(idNode: number): T {

        let nodeToDelete: AvlNode<T> | null;

        if (this.root != null) nodeToDelete = this.find(idNode);
        else throw Error("El arbol está vacio, no puedes borrar nada más");

        // * linea de testeo
        // console.log("El nodo a borrar es el de ID:" + nodeToDelete.getID().toString());

        this.deleteNode(nodeToDelete);

        return nodeToDelete.getData();

    }

    // * Elimina un nodo con un solo hijo y sin padre, devuelve ese nodo
    private elapseRoot(toBeElapsed: AvlNode<T>): AvlNode<T> {

        const parent: AvlNode<T> | null = toBeElapsed.getParent();
        if (parent != null) throw Error("ElapseRoot is to elapse roots, not nodes");

        const rightSon: AvlNode<T> | null = toBeElapsed.getRightSon();
        const leftSon: AvlNode<T> | null = toBeElapsed.getLeftSon();

        const isRightNull: boolean = (rightSon == null);
        const isLeftNull: boolean = (leftSon == null);

        // XOR de nulidad entre derecho e izquierdo
        if (isRightNull ? !isLeftNull : isLeftNull) {

            // Caso en que uno es nulo y el otro no
            // Verifico cual
            if (leftSon != null) {

                // El izquierdo no es nulo
                this.root = leftSon;
                leftSon.setParent(null);
                toBeElapsed.setLeftSon(null);

            }
            else if (rightSon != null) {

                // El derecho no es nulo
                this.root = rightSon;
                rightSon.setParent(null);
                toBeElapsed.setRightSon(null);

            }

        }
        else {

            // Caso en que o ambos son nulos o ambos no lo son
            throw Error("Node can't be elapsed, both son's are either null or not");

        }

        return toBeElapsed;

    }

    // * Elimina un solo nodo con un solo hijo y padre, devuelve ese nodo
    private elapseNode(toBeElapsed: AvlNode<T>): AvlNode<T> {

        const parent: AvlNode<T> | null = toBeElapsed.getParent();
        if (parent == null) throw Error("ElapseNode elapses nodes, not roots");

        // hijos de toBeElapsed
        const rightSon: AvlNode<T> | null = toBeElapsed.getRightSon();
        const leftSon: AvlNode<T> | null = toBeElapsed.getLeftSon();

        const isRightNull: boolean = (rightSon == null);
        const isLeftNull: boolean = (leftSon == null);

        // XOR de nulidad entre derecho e izquierdo
        if (isRightNull ? !isLeftNull : isLeftNull) {

            // Caso en que uno es nulo y el otro no
            this.disconnectSon(toBeElapsed);

            // Verifico cual
            if (leftSon != null) {

                // El izquierdo no es nulo
                this.insertNode(leftSon, parent);

            }
            else if (rightSon != null) {

                // El derecho no es nulo
                this.insertNode(rightSon, parent);

            }

        }
        else {

            // Caso en que o ambos son nulos o ambos no lo son
            throw Error("Node can't be elapsed, both son's are either null or not");

        }

        return toBeElapsed;

    }

    // * Literal, desconecta un padre del hijo indicado y viceversa, luego devuelve al hijo
    private disconnectSon(son: AvlNode<T>): AvlNode<T> {

        const father: AvlNode<T> | null = son.getParent();

        if (father == null) throw Error("Can't disconnect son of father, cause father is null");

        const ftrLeftSon: AvlNode<T> | null = father.getLeftSon();
        const ftrRigthSon: AvlNode<T> | null = father.getRightSon();

        if (ftrLeftSon == null && ftrRigthSon == null) throw Error("Can't disconnect son of father, cause both sons are null");

        const sonId = son.getID();
        const fatherId = father.getID();

        if (sonId == fatherId) {

            throw Error("I can't disconnect the son if he has the same ID that his father");

        }

        else if (ftrLeftSon != null && ftrLeftSon.getID() == sonId) {

            father.setLeftSon(null);
            son.setParent(null);

        }
        else if (ftrRigthSon != null && ftrRigthSon.getID() == sonId) {

            father.setRightSon(null);
            son.setParent(null);

        }

        return son;

    }

    // * Reemplaza la raiz con replacement (nodo huerfano, aislado), dejando en replacement la familia de la raiz
    private replaceRoot(replacement: AvlNode<T>): AvlNode<T> | null {

        const repRoot = this.root;

        let parent: AvlNode<T> | null;
        let rightSon: AvlNode<T> | null;
        let leftSon: AvlNode<T> | null;

        if (repRoot == null) {

            parent = null;
            rightSon = null;
            leftSon = null;

        }
        else {

            parent = repRoot.getParent();
            if (parent != null) throw Error("Can't replace this root, it may not be a root, its parent was not null");

            rightSon = repRoot.getRightSon();
            leftSon = repRoot.getLeftSon();

        }

        this.root = replacement;

        replacement.setParent(parent);     // En caso de que replacement venga con padre, se pone nulo

        replacement.setLeftSon(leftSon);
        if (leftSon != null) leftSon.setParent(replacement);

        replacement.setRightSon(rightSon);
        if (rightSon != null) rightSon.setParent(replacement);

        return repRoot;

    }

    // * reemplaza un nodo replaced con replacement
    private replaceNode(replaced: AvlNode<T>, replacement: AvlNode<T>): AvlNode<T> {

        const parent = replaced.getParent();
        if (parent == null) throw Error("replaceNode is to replace nodes not roots");

        const rightSon = replaced.getRightSon();
        const leftSon = replaced.getLeftSon();

        replacement.setRightSon(rightSon);
        if (rightSon != null) rightSon.setParent(replacement);

        replacement.setLeftSon(leftSon);
        if (leftSon != null) leftSon.setParent(replacement);

        // break the links of replaced so they don't interfere with insert
        this.disconnectSon(replaced);

        this.insertNode(replacement, parent);

        return replaced;

    }

    private deleteNode(nodeToDelete: AvlNode<T>): AvlNode<T> {

        const leftSon = nodeToDelete.getLeftSon();
        const rightSon = nodeToDelete.getRightSon();
        const parent = nodeToDelete.getParent();

        // naturaleza del padre
        if (parent == null) {

            // naturaleza de los hijos
            if (leftSon == null && rightSon == null) {

                // es la raiz?
                if (nodeToDelete == this.root) {

                    this.root = null;

                }
                else throw Error("El padre del nodo era nulo, pero el nodo no era la raiz, q acaso estás buscando pelea? Elmo no tolerará tus estupideces...");

            }
            else if (leftSon ? !rightSon : rightSon) {

                // es la raiz?
                if (nodeToDelete == this.root) {

                    this.elapseRoot(nodeToDelete);

                }
                else throw Error("El padre del nodo era nulo, pero el nodo no era la raiz, q acaso estás buscando pelea? Elmo no tolerará tus estupideces...");

            }
            else if (rightSon != null && leftSon != null) {

                // es la raiz?
                if (nodeToDelete == this.root) {

                    const descendant = this.findLeftDescendant(rightSon);
                    const descParent = descendant.getParent();

                    if (descendant.getRightSon() != null) this.elapseNode(descendant);
                    else this.disconnectSon(descendant);

                    this.replaceRoot(descendant);
                    if (descParent != null) this.rebalance(descParent);
                    else throw Error("The father of the descendant was null");

                }
                else throw Error("El padre del nodo era nulo, pero el nodo no era la raiz, q acaso estás buscando pelea? Elmo no tolerará tus estupideces...");

            }

        }
        else {

            // el padre no es nulo
            // naturaleza de los hijos
            if (leftSon == null && rightSon == null) {

                // Ambos hijos eran nulos
                this.disconnectSon(nodeToDelete);
                this.rebalance(parent);

            }
            else if (leftSon ? !rightSon : rightSon) {

                // Uno solo de los dos hijos es nulo
                this.elapseNode(nodeToDelete);
                this.rebalance(parent);

            }
            else if (leftSon != null && rightSon != null) {

                // Ambos hijos no son nulos
                const descendant = this.findLeftDescendant(rightSon);
                const descParent = descendant.getParent();

                if (descendant.getRightSon() != null) this.elapseNode(descendant);
                else this.disconnectSon(descendant);


                this.replaceNode(nodeToDelete, descendant);
                if (descParent != null) this.rebalance(descParent);
                else throw Error("The father of the descendant was null, dunno what that even means");

            }

        }

        this.numElements--;
        return nodeToDelete;

    }

    // Balance
    private rebalance(toRebalance: AvlNode<T>) {

        const parent = toRebalance.getParent();
        const leftSon = toRebalance.getLeftSon();
        const rightSon = toRebalance.getRightSon();

        let leftHeight: number;
        if (leftSon != null) leftHeight = leftSon.getHeight();
        else leftHeight = 0;

        let rightHeight: number;
        if (rightSon != null) rightHeight = rightSon.getHeight();
        else rightHeight = 0;

        if (leftHeight - rightHeight > 1) this.rebalanceRight(toRebalance);
        if (rightHeight - leftHeight > 1) this.rebalanceLeft(toRebalance);

        if (parent != null) this.rebalance(parent);

    }

    private rebalanceRight(toRebalance: AvlNode<T>) {

        const leftSon = toRebalance.getLeftSon();

        if (leftSon != null) {

            const leftGrandChild = leftSon.getLeftSon();
            const rightGrandChild = leftSon.getRightSon();

            let lftGrChHeight: number;
            if (leftGrandChild != null) lftGrChHeight = leftGrandChild.getHeight();
            else lftGrChHeight = 0;

            let rgtGrChHeight: number;
            if (rightGrandChild != null) rgtGrChHeight = rightGrandChild.getHeight();
            else rgtGrChHeight = 0;

            //Verify case left, right
            if (lftGrChHeight < rgtGrChHeight) this.rotateLeft(leftSon);

        }

        this.rotateRight(toRebalance);

    }

    private rebalanceLeft(toRebalance: AvlNode<T>) {

        const rightSon = toRebalance.getRightSon();

        if (rightSon != null) {

            const leftGrandChild = rightSon.getLeftSon();
            const rightGrandChild = rightSon.getRightSon();

            let lftGrChHeight: number;
            if (leftGrandChild != null) lftGrChHeight = leftGrandChild.getHeight();
            else lftGrChHeight = 0;

            let rgtGrChHeight: number;
            if (rightGrandChild != null) rgtGrChHeight = rightGrandChild.getHeight();
            else rgtGrChHeight = 0;

            //Verify case right, left
            if (lftGrChHeight > rgtGrChHeight) this.rotateRight(rightSon);

        }

        this.rotateLeft(toRebalance);

    }

    private rotateRight(toRotate: AvlNode<T>) {

        const parent = toRotate.getParent();
        const demotedSon = toRotate;
        const promotedSon = toRotate.getLeftSon();

        if (promotedSon == null) throw Error(`Can't rotateRight the node ${demotedSon.getID()} does not have leftSon`);

        const orphanSon: AvlNode<T> | null = promotedSon.getRightSon();

        if (parent != null) {

            // promoting promotedSon
            this.disconnectSon(demotedSon);
            this.disconnectSon(promotedSon);
            this.insertNode(promotedSon, parent);

        }
        else {
            if (demotedSon == this.root) {

                // promoting promotedSon
                this.disconnectSon(promotedSon);
                this.root = promotedSon

            }
            else throw Error("El padre de demotedSon era nulo pero demotedSon no era la raiz, umm, algo anda mal...");
        }

        // demoting demotedSon
        // Verifying if orphanSon
        if (orphanSon != null) {

            // promotedSon left a child behind, assign it to its new correspondent parent
            this.disconnectSon(orphanSon);
            this.insertNode(orphanSon, demotedSon);

        }

        this.insertNode(demotedSon, promotedSon);

        // * linea de testeo
        // console.log(`Node ${demotedSon.getID()} was rotated right`);

    }

    private rotateLeft(toRotate: AvlNode<T>) {

        const parent = toRotate.getParent();
        const demotedSon = toRotate;
        const promotedSon = toRotate.getRightSon();

        if (promotedSon == null) throw Error(`Can't rotateRight the node ${demotedSon.getID()} does not have rightSon`);

        const orphanSon: AvlNode<T> | null = promotedSon.getLeftSon();

        if (parent != null) {

            // promoting promotedSon
            this.disconnectSon(demotedSon);
            this.disconnectSon(promotedSon);
            this.insertNode(promotedSon, parent);

        }
        else {
            if (demotedSon == this.root) {

                // promoting promotedSon
                this.disconnectSon(promotedSon);
                this.root = promotedSon

            }
            else throw Error("El padre de demotedSon era nulo pero demotedSon no era la raiz, umm, algo anda mal...");
        }

        // demoting demotedSon
        // Verifying if orphanSon
        if (orphanSon != null) {

            // promotedSon left a child behind, assign it to its new correspondent parent
            this.disconnectSon(orphanSon);
            this.insertNode(orphanSon, demotedSon);

        }

        this.insertNode(demotedSon, promotedSon);

        // linea de testeo
        // console.log(`Node ${demotedSon.getID()} was rotated left`);

    }

    // Para testeo
    // * devuelve una fila (LinkedList) con el historial de nodos traversados
    breadthFirstTraverse(searchRoot?: AvlNode<T>): LinkedList<T> {

        let firstNode: AvlNode<T> | null;
        if (searchRoot == undefined) firstNode = this.root;
        else firstNode = searchRoot;
        if (firstNode == null) throw Error("searchRoot was equal to null, can't traverse anything");

        const traversalQueue = new LinkedList<T>();
        const compassQueue = new LinkedList<AvlNode<T>>();

        let current: AvlNode<T>;
        let rightSon: AvlNode<T> | null;
        let leftSon: AvlNode<T> | null;

        compassQueue.pushBack(firstNode);

        do {

            current = compassQueue.popFront()
            rightSon = current.getRightSon();
            leftSon = current.getLeftSon();

            traversalQueue.pushBack(current.getData());
            if (leftSon != null) compassQueue.pushBack(leftSon);
            if (rightSon != null) compassQueue.pushBack(rightSon);

        } while (!compassQueue.isEmpty());

        return traversalQueue;

    }

}