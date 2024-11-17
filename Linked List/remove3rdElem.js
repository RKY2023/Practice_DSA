

//========== User's Code Starts Here ==========
'use strict';

process.stdin.setEncoding('utf-8');
/**
 */

/**
 */
var remove3rdlastElem = function(head) {
    
    // Write your code here to remove the 3 rd last element from link list
    let pos = 0;
    let temp = head;
    let prev=null;
    while(temp!=null){
        let k = temp.next;
        temp.next=prev;
        prev=temp;
        temp=k;
    }
    // head=prev;
    temp=prev;
    while(temp!=null){
        pos++;
        if(pos==2 && temp.next!= undefined){ // 3rd means 2nd index
            temp.next=temp.next.next;
        }
        temp=temp.next;
    }
    temp=prev;
    let prev2=null;
    while(temp!=null){
        let k = temp.next;
        temp.next=prev2;
        prev2=temp;
        temp=k;
    }
    head=prev2;
    //Dont change anything below. If changed click on reset.
    printLinkList(head)
};
//Dont change anything below. If changed click on reset.
function printLinkList(head){
    var current = head;
    var linklistString = ''
    while(current.next){
      
        linklistString = linklistString + current.val + '->'
        current = current.next
    }
    linklistString = linklistString + current.val
    console.log(linklistString)
}

//Dont change anything below. If changed click on reset.
function ListNode(val,next) {
  return {
    val: val,
    next: next==undefined?null:next,
  };
}
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            var linklistvalues = inputArr[0].split('->');
            var head=ListNode(parseInt(linklistvalues[0]));
            var temp =head;
            var count=2;
            for(var i=1;i<linklistvalues.length;i++)
            {
                var new_node = ListNode(parseInt(linklistvalues[i]));
                count=count+1;
                temp.next=new_node;
                temp=new_node;
            }
     var output = remove3rdlastElem(head);
            
            
            process.exit();
            
        })
        

}
readInput();
//========== User's Code Ends Here ==========

