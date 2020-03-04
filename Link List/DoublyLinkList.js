class Node {
    constructor(data, next=null, prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkList {
    constructor(){
        this.head = null;
        this.prev = null;
        this.size = null;
    }

    addNodeAtStart(data){
        let newNode;
        if(!this.size){
            this.head = new Node(data, this.head, null);
            this.size++;
        }else{
            let current = this.head;
            newNode = new Node(data, null, null);
            current.prev = newNode;
            newNode.next = current;
            this.head = newNode;
            this.size++;
        }
    }

    addNodeAtLast(data){
        if(!this.size){
            this.head = new Node(data, this.head, null);
            this.size++;
        }else{
            let current = this.head;
            let newNode = new Node(data, null, null);
            while(current){
                if(current.next == null){
                    current.next = newNode;
                    newNode.prev = current;
                    break;
                }
                current = current.next;
            }
            this.size++;
        }
    }

    addNodeAtIndex(data,index){
        if(!this.size){
            this.head = new Node(data, this.head, null);
            this.size++;
        }else{
            let current = this.head;
            let newNode = new Node(data, null, null);
            while(index){
                current = current.next;
                index --;
            }
            let previous = current.prev;
            previous.next = newNode;
            newNode.prev = previous;
            current.prev = newNode;
            newNode.next = current;
            this.size++;
        }
    }

    deleteFromStart(){
        this.head = this.head.next;
        this.prev =null;
    }

    reversLinkListIterative(){
        let current = this.head;
        let previous = null;

        while(current){
            let temp = current.next;
            current.next = previous;
            previous = current;
            current.prev = temp;
            current = temp
        }

        this.head = previous;
    }

    reversLinkListRecursive(head){
        if(head.next === null){
            this.head = head;
            this.head.next = head.prev;
            this.head.prev = null;
        }else{
            this.reversLinkListRecursive(head.next);
            let temp = head.prev;
            head.prev = head.next;
            head.next = temp;
        }
    }

    deleteFromEnd(){
        let current = this.head;
        let previous;
        while(current){
            if(current.next == null){
                previous = current.prev;
            }
            current = current.next;
        }
        previous.next = null;
    }

    deleteAtIndex(index){
        let current = this.head;
        while(index){
            current = current.next;
            index --;
        }
        let previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
    }

    printData(){
        let current = this.head;
        let dataArr = [];
        while(current){
            if(current.next == null){
                dataArr.push(current.data + ' -> NULL');
            }else{
                dataArr.push(current.data + ' <- -> ');
            }
            current = current.next;
        }
        console.log('NULL <- ',dataArr.join(' '))
    }
}

const ll = new DoublyLinkList();

[1,2,3,4,5,6].forEach((data) => {
    ll.addNodeAtLast(data);
});

ll.printData();

//ll.deleteAtIndex(3);

ll.reversLinkListRecursive(ll.head);
ll.printData();

