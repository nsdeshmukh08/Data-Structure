class Node {

    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //insert at first
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert at last
    inserLast(data){
        let newNode = new Node(data, null);
        let current = this.head;
        if(current === null){
            this.head = newNode;
        }else{
            while(current.next){
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }

    // add at perticular index
    addAtIndex(data, index){
        let newNode = new Node(data);

        let count = 0;
        let current = this.head;
        let previous;

        if(index === 0){
            this.head = this.insertFirst(data);
            return;
        }

        while(count < index){
            previous = current; //prev node
            count++;
            current = current.next; // next node
        }

        previous.next = newNode;
        newNode.next = current;
    }

    //get at index
    getAtIndex(index){
        let count = 0;

        let current = this.head;

        while(count < index){
            current = current.next;
            count ++;
        }

        return current.data;
    }

    // delete at index
    deleteAtIndex(index){
        let current  = this.head;
        let count  = 0;
        let previous;

        while(count < index){
            previous = current; // previous node
            count ++;
            current = current.next; // next node
        }

        previous.next = current.next;
        this.size --;  
    }

    // Clear all
    clearAll(){
        this.head = null;
        this.size = 0;
    }

    // count number of nodes
    countNodes(){
        let count =0;
        let current = this.head;
        while(current){
            current = current.next;
            count ++;
        }

        return count;
    }

    //print data
    printData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);

ll.inserLast(4);
ll.addAtIndex(100,2);

//console.log("===>", ll.getAtIndex(3));
//console.log("===>", ll.getAtIndex(3));

//ll.deleteAtIndex(2)

//ll.clearAll();

//console.log("Nodes present ===>",ll);

ll.printData();

