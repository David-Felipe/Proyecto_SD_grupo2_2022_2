"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvlBst = void 0;
var LinkedList_1 = require("./LinkedList");
var AvlNode = /** @class */ (function () {
    function AvlNode(data, ID) {
        this.height = 1;
        this.parent = null;
        this.rightSon = null;
        this.leftSon = null;
        this.data = data;
        this.ID = ID;
    }
    // height modifiers
    AvlNode.prototype.setHeight = function (newHeight) {
        this.height = newHeight;
    };
    AvlNode.prototype.getHeight = function () {
        return this.height;
    };
    AvlNode.prototype.updHeight = function (parent) {
        if (parent == null)
            return;
        var grandFather = parent.getParent();
        var rightSon = parent.getRightSon();
        var leftSon = parent.getLeftSon();
        var rightHeight;
        var leftHeight;
        if (rightSon != null)
            rightHeight = rightSon.getHeight();
        else
            rightHeight = 0;
        if (leftSon != null)
            leftHeight = leftSon.getHeight();
        else
            leftHeight = 0;
        parent.setHeight(1 + Math.max(leftHeight, rightHeight));
        // Para que no itere de forma innecesaria
        if (grandFather != null) {
            var brother = grandFather.getLeftSon();
            var sister = grandFather.getRightSon();
            var broHeight = void 0;
            var sisHeight = void 0;
            if (brother != null)
                broHeight = brother.getHeight();
            else
                broHeight = 0;
            if (sister != null)
                sisHeight = sister.getHeight();
            else
                sisHeight = 0;
            if (Math.abs(sisHeight - broHeight) == 0)
                return;
        }
        this.updHeight(grandFather);
    };
    // data modifiers
    // ! NO se puede cambiar el dato de un nodo
    // * Ya no se podrían encontrar los datos en el arbol
    AvlNode.prototype.setData = function (newData, newID) {
        this.data = newData;
        this.ID = newID;
    };
    AvlNode.prototype.getData = function () {
        return this.data;
    };
    AvlNode.prototype.getID = function () {
        return this.ID;
    };
    // ! NO se puede cambiar el ID de un nodo
    // * Eso se tiraría el arbol
    AvlNode.prototype.setID = function (newID) {
        this.ID = newID;
    };
    //parent modifiers
    AvlNode.prototype.setParent = function (newParent) {
        this.parent = newParent;
    };
    AvlNode.prototype.getParent = function () {
        return this.parent;
    };
    // rigthSon modifiers
    AvlNode.prototype.setRightSon = function (newRightSon) {
        this.rightSon = newRightSon;
        this.updHeight(this);
    };
    AvlNode.prototype.getRightSon = function () {
        return this.rightSon;
    };
    // leftSon modifiers
    AvlNode.prototype.setLeftSon = function (newLeftSon) {
        this.leftSon = newLeftSon;
        this.updHeight(this);
    };
    AvlNode.prototype.getLeftSon = function () {
        return this.leftSon;
    };
    return AvlNode;
}());
var AvlBst = /** @class */ (function () {
    function AvlBst(firstData, firstID) {
        this.root = null;
        this.root = new AvlNode(firstData, firstID);
        this.numElements = 1;
    }
    // Root and numElements getter
    AvlBst.prototype.getRootData = function () {
        if (this.root != null)
            return this.root.getData();
        throw Error("Can't return root data, cause tree is empty");
    };
    AvlBst.prototype.getNumElements = function () {
        return this.numElements;
    };
    // data searcher
    // * User data searcher
    AvlBst.prototype.findData = function (searchedID) {
        var foundNode;
        if (this.root != null) {
            foundNode = this.findNode(searchedID, this.root);
            if (foundNode.getID() == searchedID)
                return foundNode.getData();
            var errorMessage_1 = "Node with searchedID: ".concat(searchedID, " wasn't found");
            throw Error(errorMessage_1.toString());
        }
        var errorMessage = "Tree is empty, cannot find anything";
        throw Error(errorMessage.toString());
    };
    // node Finder
    // * estrict node finder, if it's not the same, returns error
    AvlBst.prototype.find = function (searchedID) {
        var foundNode;
        if (this.root != null) {
            foundNode = this.findNode(searchedID, this.root);
            if (foundNode.getID() == searchedID)
                return foundNode;
            var errorMessage_2 = "Node with searchedID: ".concat(searchedID, " wasn't found");
            throw Error(errorMessage_2.toString());
        }
        var errorMessage = "Tree is empty, cannot find anything";
        throw Error(errorMessage.toString());
    };
    AvlBst.prototype.findNode = function (searchedID, rootSearched) {
        var currentID = rootSearched.getID();
        if (currentID == searchedID) {
            return rootSearched;
        }
        else if (searchedID > currentID) {
            var currentRightSon = rootSearched.getRightSon();
            if (currentRightSon != null)
                return this.findNode(searchedID, currentRightSon);
            return rootSearched;
        }
        else if (searchedID < currentID) {
            var currentLeftSon = rootSearched.getLeftSon();
            if (currentLeftSon != null)
                return this.findNode(searchedID, currentLeftSon);
            return rootSearched;
        }
        // Should never happen, but ts compiler begged for it
        return rootSearched;
    };
    // ! when a node doesn't have family, he is his own descendant or ancestor
    // * Finds max of a given tree
    AvlBst.prototype.findRightDescendant = function (parentNode) {
        var currentRightson = parentNode.getRightSon();
        if (currentRightson == null)
            return parentNode;
        return this.findRightDescendant(currentRightson);
    };
    // * Finds min of a given tree
    AvlBst.prototype.findLeftDescendant = function (parentNode) {
        var currentLeftSon = parentNode.getLeftSon();
        if (currentLeftSon == null)
            return parentNode;
        return this.findLeftDescendant(currentLeftSon);
    };
    // * Finds the first ancestor that is greater than the given son
    // ! if the initial son was the max then it won't return right ancestor
    AvlBst.prototype.findRightAncestor = function (sonNode) {
        var parentNode = sonNode.getParent();
        if (parentNode != null) {
            // * Case in which sonNode was the max in the tree
            if (this.root != null) {
                // * If sonNode == max(this.root) return sonNode
                if (sonNode == this.findRightDescendant(this.root))
                    return sonNode;
            }
            return this.rightAncestorIterator(sonNode);
        }
        return sonNode;
    };
    // * mismo findRightAncestor solo que sin la verficación de max, para que no la repita cada vez
    AvlBst.prototype.rightAncestorIterator = function (sonNode) {
        var parentNode = sonNode.getParent();
        if (parentNode != null) {
            return this.rightAncestorIterator(sonNode);
        }
        return sonNode;
    };
    // find next
    AvlBst.prototype.findNextNode = function (currentNode) {
        var rightSon = currentNode.getRightSon();
        if (rightSon != null)
            return this.findLeftDescendant(rightSon);
        var rightAncestor = this.findRightAncestor(currentNode);
        if (currentNode.getID < rightAncestor.getID)
            return rightAncestor;
        throw Error("There is no next, the node had the max ID in the tree");
    };
    // * find next data para usuario
    AvlBst.prototype.findNextData = function (currentID) {
        var currentNode = this.find(currentID);
        var nextNode = this.findNextNode(currentNode);
        return nextNode.getData();
    };
    // rangeSearch
    AvlBst.prototype.searchRange = function (beggID, endID) {
        if (this.root == null)
            throw ("El arbol está vacio, no puedo hacer un searchRange");
        var nodesInRange = new LinkedList_1.LinkedList();
        var currentNode = this.findNode(beggID, this.root);
        while (currentNode.getID() <= endID) {
            if (currentNode.getID() >= beggID)
                nodesInRange.pushBack(currentNode.getData());
            currentNode = this.findNextNode(currentNode);
        }
        return nodesInRange;
    };
    // Inserting a node
    // * Insertar dato para usuario
    AvlBst.prototype.insert = function (newNodeData, newNodeID) {
        var newNode = new AvlNode(newNodeData, newNodeID);
        if (this.root != null) {
            this.insertNode(newNode, this.root);
            // rebalancing
            var parent = newNode.getParent();
            if (parent != null)
                this.rebalance(parent);
        }
        else {
            this.root = newNode;
            newNode.setParent(null);
        }
        // * linea de testeo
        // console.log(`El nodo insertado fue el de ID: ${newNode.getID()}`)
        this.numElements++;
    };
    AvlBst.prototype.insertNode = function (newNode, treeToInsert) {
        var newNodeID = newNode.getID();
        var parentNewNode = this.findNode(newNodeID, treeToInsert);
        var parentID = parentNewNode.getID();
        if (newNodeID == parentID)
            throw Error("El ID ".concat(newNodeID, " ya existe, no se pudo insertar el nuevo dato"));
        else if (newNodeID > parentID) {
            newNode.setParent(parentNewNode);
            parentNewNode.setRightSon(newNode);
        }
        else if (newNodeID < parentID) {
            newNode.setParent(parentNewNode);
            parentNewNode.setLeftSon(newNode);
        }
    };
    // Toda la familia de deletes
    // * El delete que usa el usuario, elimina un dato
    AvlBst.prototype.delete = function (idNode) {
        var nodeToDelete;
        if (this.root != null)
            nodeToDelete = this.find(idNode);
        else
            throw Error("El arbol está vacio, no puedes borrar nada más");
        // * linea de testeo
        // console.log("El nodo a borrar es el de ID:" + nodeToDelete.getID().toString());
        this.deleteNode(nodeToDelete);
        return nodeToDelete.getData();
    };
    // * Elimina un nodo con un solo hijo y sin padre, devuelve ese nodo
    AvlBst.prototype.elapseRoot = function (toBeElapsed) {
        var parent = toBeElapsed.getParent();
        if (parent != null)
            throw Error("ElapseRoot is to elapse roots, not nodes");
        var rightSon = toBeElapsed.getRightSon();
        var leftSon = toBeElapsed.getLeftSon();
        var isRightNull = (rightSon == null);
        var isLeftNull = (leftSon == null);
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
    };
    // * Elimina un solo nodo con un solo hijo y padre, devuelve ese nodo
    AvlBst.prototype.elapseNode = function (toBeElapsed) {
        var parent = toBeElapsed.getParent();
        if (parent == null)
            throw Error("ElapseNode elapses nodes, not roots");
        // hijos de toBeElapsed
        var rightSon = toBeElapsed.getRightSon();
        var leftSon = toBeElapsed.getLeftSon();
        var isRightNull = (rightSon == null);
        var isLeftNull = (leftSon == null);
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
    };
    // * Literal, desconecta un padre del hijo indicado y viceversa, luego devuelve al hijo
    AvlBst.prototype.disconnectSon = function (son) {
        var father = son.getParent();
        if (father == null)
            throw Error("Can't disconnect son of father, cause father is null");
        var ftrLeftSon = father.getLeftSon();
        var ftrRigthSon = father.getRightSon();
        if (ftrLeftSon == null && ftrRigthSon == null)
            throw Error("Can't disconnect son of father, cause both sons are null");
        var sonId = son.getID();
        var fatherId = father.getID();
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
    };
    // * Reemplaza la raiz con replacement (nodo huerfano, aislado), dejando en replacement la familia de la raiz
    AvlBst.prototype.replaceRoot = function (replacement) {
        var repRoot = this.root;
        var parent;
        var rightSon;
        var leftSon;
        if (repRoot == null) {
            parent = null;
            rightSon = null;
            leftSon = null;
        }
        else {
            parent = repRoot.getParent();
            if (parent != null)
                throw Error("Can't replace this root, it may not be a root, its parent was not null");
            rightSon = repRoot.getRightSon();
            leftSon = repRoot.getLeftSon();
        }
        this.root = replacement;
        replacement.setParent(parent); // En caso de que replacement venga con padre, se pone nulo
        replacement.setLeftSon(leftSon);
        if (leftSon != null)
            leftSon.setParent(replacement);
        replacement.setRightSon(rightSon);
        if (rightSon != null)
            rightSon.setParent(replacement);
        return repRoot;
    };
    // * reemplaza un nodo replaced con replacement
    AvlBst.prototype.replaceNode = function (replaced, replacement) {
        var parent = replaced.getParent();
        if (parent == null)
            throw Error("replaceNode is to replace nodes not roots");
        var rightSon = replaced.getRightSon();
        var leftSon = replaced.getLeftSon();
        replacement.setRightSon(rightSon);
        if (rightSon != null)
            rightSon.setParent(replacement);
        replacement.setLeftSon(leftSon);
        if (leftSon != null)
            leftSon.setParent(replacement);
        // break the links of replaced so they don't interfere with insert
        this.disconnectSon(replaced);
        this.insertNode(replacement, parent);
        return replaced;
    };
    AvlBst.prototype.deleteNode = function (nodeToDelete) {
        var leftSon = nodeToDelete.getLeftSon();
        var rightSon = nodeToDelete.getRightSon();
        var parent = nodeToDelete.getParent();
        // naturaleza del padre
        if (parent == null) {
            // naturaleza de los hijos
            if (leftSon == null && rightSon == null) {
                // es la raiz?
                if (nodeToDelete == this.root) {
                    this.root = null;
                }
                else
                    throw Error("El padre del nodo era nulo, pero el nodo no era la raiz, q acaso estás buscando pelea? Elmo no tolerará tus estupideces...");
            }
            else if (leftSon ? !rightSon : rightSon) {
                // es la raiz?
                if (nodeToDelete == this.root) {
                    this.elapseRoot(nodeToDelete);
                }
                else
                    throw Error("El padre del nodo era nulo, pero el nodo no era la raiz, q acaso estás buscando pelea? Elmo no tolerará tus estupideces...");
            }
            else if (rightSon != null && leftSon != null) {
                // es la raiz?
                if (nodeToDelete == this.root) {
                    var descendant = this.findLeftDescendant(rightSon);
                    var descParent = descendant.getParent();
                    if (descendant.getRightSon() != null)
                        this.elapseNode(descendant);
                    else
                        this.disconnectSon(descendant);
                    this.replaceRoot(descendant);
                    if (descParent != null)
                        this.rebalance(descParent);
                    else
                        throw Error("The father of the descendant was null");
                }
                else
                    throw Error("El padre del nodo era nulo, pero el nodo no era la raiz, q acaso estás buscando pelea? Elmo no tolerará tus estupideces...");
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
                var descendant = this.findLeftDescendant(rightSon);
                var descParent = descendant.getParent();
                if (descendant.getRightSon() != null)
                    this.elapseNode(descendant);
                else
                    this.disconnectSon(descendant);
                this.replaceNode(nodeToDelete, descendant);
                if (descParent != null)
                    this.rebalance(descParent);
                else
                    throw Error("The father of the descendant was null, dunno what that even means");
            }
        }
        this.numElements--;
        return nodeToDelete;
    };
    // Balance
    AvlBst.prototype.rebalance = function (toRebalance) {
        var parent = toRebalance.getParent();
        var leftSon = toRebalance.getLeftSon();
        var rightSon = toRebalance.getRightSon();
        var leftHeight;
        if (leftSon != null)
            leftHeight = leftSon.getHeight();
        else
            leftHeight = 0;
        var rightHeight;
        if (rightSon != null)
            rightHeight = rightSon.getHeight();
        else
            rightHeight = 0;
        if (leftHeight - rightHeight > 1)
            this.rebalanceRight(toRebalance);
        if (rightHeight - leftHeight > 1)
            this.rebalanceLeft(toRebalance);
        if (parent != null)
            this.rebalance(parent);
    };
    AvlBst.prototype.rebalanceRight = function (toRebalance) {
        var leftSon = toRebalance.getLeftSon();
        if (leftSon != null) {
            var leftGrandChild = leftSon.getLeftSon();
            var rightGrandChild = leftSon.getRightSon();
            var lftGrChHeight = void 0;
            if (leftGrandChild != null)
                lftGrChHeight = leftGrandChild.getHeight();
            else
                lftGrChHeight = 0;
            var rgtGrChHeight = void 0;
            if (rightGrandChild != null)
                rgtGrChHeight = rightGrandChild.getHeight();
            else
                rgtGrChHeight = 0;
            //Verify case left, right
            if (lftGrChHeight < rgtGrChHeight)
                this.rotateLeft(leftSon);
        }
        this.rotateRight(toRebalance);
    };
    AvlBst.prototype.rebalanceLeft = function (toRebalance) {
        var rightSon = toRebalance.getRightSon();
        if (rightSon != null) {
            var leftGrandChild = rightSon.getLeftSon();
            var rightGrandChild = rightSon.getRightSon();
            var lftGrChHeight = void 0;
            if (leftGrandChild != null)
                lftGrChHeight = leftGrandChild.getHeight();
            else
                lftGrChHeight = 0;
            var rgtGrChHeight = void 0;
            if (rightGrandChild != null)
                rgtGrChHeight = rightGrandChild.getHeight();
            else
                rgtGrChHeight = 0;
            //Verify case right, left
            if (lftGrChHeight > rgtGrChHeight)
                this.rotateRight(rightSon);
        }
        this.rotateLeft(toRebalance);
    };
    AvlBst.prototype.rotateRight = function (toRotate) {
        var parent = toRotate.getParent();
        var demotedSon = toRotate;
        var promotedSon = toRotate.getLeftSon();
        if (promotedSon == null)
            throw Error("Can't rotateRight the node ".concat(demotedSon.getID(), " does not have leftSon"));
        var orphanSon = promotedSon.getRightSon();
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
                this.root = promotedSon;
            }
            else
                throw Error("El padre de demotedSon era nulo pero demotedSon no era la raiz, umm, algo anda mal...");
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
    };
    AvlBst.prototype.rotateLeft = function (toRotate) {
        var parent = toRotate.getParent();
        var demotedSon = toRotate;
        var promotedSon = toRotate.getRightSon();
        if (promotedSon == null)
            throw Error("Can't rotateRight the node ".concat(demotedSon.getID(), " does not have rightSon"));
        var orphanSon = promotedSon.getLeftSon();
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
                this.root = promotedSon;
            }
            else
                throw Error("El padre de demotedSon era nulo pero demotedSon no era la raiz, umm, algo anda mal...");
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
    };
    // Para testeo
    // * devuelve una fila (LinkedList) con el historial de nodos traversados
    AvlBst.prototype.breadthFirstTraverse = function (searchRoot) {
        var firstNode;
        if (searchRoot == undefined)
            firstNode = this.root;
        else
            firstNode = searchRoot;
        if (firstNode == null)
            throw Error("searchRoot was equal to null, can't traverse anything");
        var traversalQueue = new LinkedList_1.LinkedList();
        var compassQueue = new LinkedList_1.LinkedList();
        var current;
        var rightSon;
        var leftSon;
        compassQueue.pushBack(firstNode);
        do {
            current = compassQueue.popFront();
            rightSon = current.getRightSon();
            leftSon = current.getLeftSon();
            traversalQueue.pushBack(current.getData());
            if (leftSon != null)
                compassQueue.pushBack(leftSon);
            if (rightSon != null)
                compassQueue.pushBack(rightSon);
        } while (!compassQueue.isEmpty());
        return traversalQueue;
    };
    return AvlBst;
}());
exports.AvlBst = AvlBst;
