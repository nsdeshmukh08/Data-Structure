class Node {
    constructor(data, next =null){
        this.data = data;
        this.next = next;
    }
}

class LinkList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Add node at first index
    addAtFirstIndex = (data) =>{
        this.head = new Node(data, this.head);
        this.size ++;
    }

    //Add node at perticular index
    addAtIndex = (data, index) => {
        const newNode = new Node(data,index);
        let current = this.head;
        let lastNode = null;
        let previouse = current;
        let count = 0;
        if(!current) {
            current = newNode;
        } else {
            while(count < index){
                previouse = current;
                current = current.next;
                count ++;
            }

            previouse.next = newNode;
            newNode.next = current;
        }
        this.size ++;
    }

    //Remove node from perticular index
    removeAtIndex = (index) => {
        let current = this.head;
        let previouse = current;
        let count = 0;
       
        while(count < index){
            previouse = current;
            current = current.next;
            count ++;
        }
        previouse.next = current.next;
        this.size --;
    }

    // Add Node at last
    addNodeAtLast = (data) => {
        const newNode = new Node(data);
        let current = this.head;
        let lastNode = null;
        if(!current) {
            current = newNode;
        } else {
            while(current){
                if(current.next === null){
                    lastNode = current;
                }
                current = current.next;
            }
            lastNode.next = newNode;
        }
        this.size ++;
    }

    //Node count in the link list 
    countNodes = () => {
        return this.size;
    }

    // Get node at perticular index
    getAtIndex = (index) => {
        let count = 0;
        let current = this.head;
        while(count < index){
            current = current.next;
            count++;
        }
        
        return current.data;
    }

    clearAll = () =>{
        this.head = null;
        this.size = 0;
    }

    //Print link list data
    printData = () => {
        let current = this.head;
        let result = '';
        while(current){
            result = result.concat(` ${current.data} ->`)
            current = current.next;
        } 
        result = result.split(' ');
        result.pop();
        result = result.join(' ');
        console.log("Link List ====>", result);      
    }
}

// Create Link List Object
const ll = new LinkList();

// Add node at First Index
ll.addAtFirstIndex(2);
ll.addAtFirstIndex(1);

// Add Node at last
ll.addNodeAtLast(4);

// Add node at perticular index
ll.addAtIndex(3,2);

//Remove from perticular index
ll.removeAtIndex(2);

// Count number of node in link list
console.log("Node count is ====>", ll.countNodes());

// Get data at node
console.log("Data at node 1 is ===>",ll.getAtIndex(1));

// Clear all nodes in link list
ll.clearAll();

// Print data from the list.
ll.printData();

