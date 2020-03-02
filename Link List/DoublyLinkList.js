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

    printData(){
        let current = this.head;
        let dataArr = [];
        while(current){
            if(current.next == null){
                dataArr.push(current.data);
            }else{
                dataArr.push(current.data + ' -> ');
            }
            current = current.next;
        }
        console.log(dataArr.join(' '))
    }
}

const ll = new DoublyLinkList();

// ll.addNodeAtStart(3);
// ll.addNodeAtStart(2);
// ll.addNodeAtStart(1);
[1,2,3,4,5,6].forEach((data) => {
    ll.addNodeAtLast(data);
});

ll.printData();
