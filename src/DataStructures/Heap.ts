// clase monticulo, para mas informacion sobre monticulos consultar: https://www.youtube.com/watch?v=t0Cq6tVNRBA
export default class Heap<T> {
    private maxSize: number;
    private size: number;
    private id_array: number[];
    private data_array: T[];
    constructor (maxSize: number) {
        //valores iniciales
        //tamano maximo del monticulo:
        this.maxSize = maxSize;
        //tamano actual
        this.size = 0;
        // array de los ids del monticulo (con estos se realizan las operaciones)
        this.id_array = [];
        // array de los datos anexados a los ids del monticulo
        this.data_array= [];
    }
    //s
    //
    //funcionalidades nucleo: (metodos que son necesarios para el correcto funcionamiento del monticulo)
    //
    //
    //metodo que intercambia el lugar de 2 valores en una lista (lo hace tanto para la lista de id como para la lista de datos)
    swamp(i: number,newi: number){
        const idtemporal = this.id_array[i];
        const datatemporal = this.data_array[i];
        this.id_array[i] = this.id_array[newi];
        this.data_array[i] = this.data_array[newi];
        this.id_array[newi] = idtemporal;
        this.data_array[newi] = datatemporal;
    }
    //retorna los arreglos de datos unicamente para testeo.
    informacion(){
        const resultados = [this.id_array,this.data_array]
        return resultados
    }
    //retorna el id del padre
    parent (i: number) {
        return (i/2);
    }
    //retorna el id del hijo izquierdo
    leftchild (i: number) {
        return (i*2);
    }
    //retorna el id del hijo derecho
    rightchild (i: number) {
        return (i*2)+1;
    }
    //tamiza un valor hacia arriba (consultar el video al principio del codigo para mas claridad)
    siftup(i: number) {
        // se ejecuta mientras que aun no lleguemos a el tope del monticulo (i>1) y que el valor del padre sea menor que el del hijo.
        while (i> 1 &&  this.id_array[this.parent(i)]<this.id_array[i]){
            //cambio de lugar array[i] y array[parent(i)]
            this.swamp(i,this.parent(i))
            i = this.parent(i)
        }   
    }
    //tamiza un valor hacia abajo (consultar el video al principio del codigo para mas claridad)
    siftdown(i: number){
        let maxindex = i
        const left = this.leftchild(i)
        // si existe un hijo izquierdo (left<= this.size) y el valor del hijo izquierdo es mayor que el actual se reasigna el actual con el fin de intercambiarlo 
        if (left<= this.size && this.id_array[left]> this.id_array[maxindex]){
            maxindex=left;
        const right = this.rightchild(i);
        // si existe un hijo derecho (right<= this.size) y el valor del hijo derecho es mayor que el actual se reasigna el actual con el fin de intercambiarlo 
        if (right<= this.size && this.id_array[right]> this.id_array[maxindex]){
            maxindex=right;
        }
        // si se obtuvo algun cambio de valor en maxindex representa la necesidad de intercambiar de lugares un par de valores
        if (i!=maxindex){
            this.swamp(i,maxindex);
            // se llama de nuevo hasta que todos los valores esten en el lugar correspondiente
            this.siftdown(maxindex);
        }
        }
    }
    //
    getSize(){
        return this.size;
    }
    //
    //funcionalidades usables: (metodos que son usados con el fin de utilizar el monticulo)
    //
    //
    // inserta un valor en ambos arrays (el dato y su id)
    insert(id: number,data: T){
        // si el array esta lleno se deja como esta.
        if (this.size==this.maxSize){
            return console.log("no hay espacio")
        }
        //ajusta el valor del size y a??ade los valores respectivos a cada arreglo
        this.size = this.size+1
        this.id_array[this.size] = id
        this.data_array[this.size] = data
        //tamiza hacia arriba para verificar que el nuevo valor siga la estructura adecuada
        this.siftup(this.size)
    }
    // extrae el valor maximo del monticulo
    extractmax(){
        const idresult = this.id_array[1]
        const dataresult = this.data_array[1]
        //remplazamos el primer lugar del monticulo con un dato ya existente en el mismo y tamizamos hacia abajo dando como resultado una eliminacion perfecta.
        this.id_array[1] = this.id_array[this.size]
        this.data_array[1] = this.data_array[this.size]
        this.size = this.size - 1
        this.siftdown(1)
        //retornamos ambos valores obtenidos en forma de arreglo con el fin de tener acceso a ambos valores en caso de ser necesario.
        const retornar = [idresult,dataresult]
        return retornar
    }
    // elimina un nodo en especifico 
    remove(i: number){
        this.id_array[i] = 1000000000
        this.siftup(i)
        this.extractmax()
    }
    // cambia la prioridad de un nodo ya existente.
    changepriority(i: number,p: number){
        const oldp = this.id_array[i]
        this.id_array[i] = p
        if (p>oldp){
            this.siftup(i)
        }
        else{
            this.siftdown(i)
        }
    }
 }

 //material de testeo en base a el ejemplo de las diapositivas
 /*
 let prueba = new Heap(20)
 prueba.insert(5, "cinco");
 prueba.insert(7, "siete");
 prueba.insert(1, "uno");
 prueba.insert(4, "cuatro");
 console.log(prueba.informacion())
 console.log(prueba.extractmax())
 console.log(prueba.informacion())
 prueba.insert(3, "tres");
 console.log(prueba.extractmax())
 console.log(prueba.informacion())
 console.log(prueba.extractmax())
 console.log(prueba.informacion())
 */
