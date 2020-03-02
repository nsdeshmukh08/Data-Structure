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
    addAtFirstIndex = (data) => {
        this.head = new Node(data, this.head);
        this.size ++;
    }

    //Add node at perticular index
    addAtIndex = (data, index) => {
        const newNode = new Node(data);
        let current = this.head;
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
       if(index === count){
        this.head = current.next;
       }else{
        while(count < index){
            previouse = current;
            current = current.next;
            count ++;
        }
        previouse.next = current.next;
       }
        this.size --;
    }

    // Add Node at last
    addNodeAtLast = (data) => {
        const newNode = new Node(data);
        let current = this.head;
        let lastNode = null;
        if(!current) {
            this.head = newNode;
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

    // Clear all nodes from the link list.
    clearAll = () =>{
        this.head = null;
        this.size = 0;
    }

    //Iterative way to reverse the Link List
    // reverceLinkList = () => {
    //   let current = this.head;
    //   let previouse = null;
    //   let nextNode = current.next;

    //   while(current){
    //     //current = current.next;
    //     current.next = previouse;
    //     previouse = current;
    //     current = nextNode;
    //     nextNode = current ? current.next : '';
    //   }

    //   this.head = previouse;
     
    // }

    //Recursive way to reverse the Link List
    reverceLinkList = (current) => {
        console.log("Current data ===>", current.data);
        if(current.next == null){

            this.head = current;
           // current.next = null;
        }else{
            this.reverceLinkList(current.next);
            let nextNode = current.next;
            nextNode.next = current;
            current.next = null;
        }
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

    //print link list data in reverse order
    printDataInRev = (current) => {
        if(current === null) return
        
        this.printDataInRev(current.next);
        console.log(current.data);
    }

    //Print middle of link list.
    printMiddle = (head) => {

        let current = head;

        // Approach 1 - with taking middle

        // let count = 0;
        // while(current){
        //     current = current.next;
        //     count ++;
        // }
        // current = head;
        // let middle = Math.floor(count/2);
        // while(middle > 1){
        //     current = current.next;
        //     middle--;
        // }
        // console.log("Middle Data ===>", current.data);

        // Approach 2 - With 2 pointer
        let nextNode = head;
        while(nextNode.next){
            current = current.next;
            nextNode = nextNode.next.next; 
        }
        console.log("Middle =>", current.data);
    }
}

// Create Link List Object
const ll = new LinkList();

// Add node at First Index
ll.addAtFirstIndex(2);
ll.addAtFirstIndex(1);

// Add Node at last
ll.addNodeAtLast(4);
ll.addNodeAtLast(5);

// Add node at perticular index
ll.addAtIndex(3,2);

//Remove from perticular index
//ll.removeAtIndex(2);

// Count number of node in link list
console.log("Node count is ====>", ll.countNodes());

// Get data at node
console.log("Data at node 1 is ===>",ll.getAtIndex(1));

// Clear all nodes in link list
//ll.clearAll();

ll.printData();

// Revers the link list 
ll.reverceLinkList(ll.head, null, null);

// Print data from the list.
ll.printData();

//ll.printDataInRev(ll.head);

ll.printMiddle(ll.head);
