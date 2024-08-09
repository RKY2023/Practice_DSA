// https://www.geeksforgeeks.org/problems/frogs-and-jumps--170647/1

class Solution {
  public int unvisitedLeaves(int N, int leaves, int frogs[]) {
      // Code here
      // int count = 0;
      // boolean[] visited = new boolean[leaves + 1];
      // for(int a : frogs) {
      //     int multiple = a;
      //     while( multiple <= leaves) {
      //         if(!visited[multiple]) {
      //             visited[multiple] = true;
      //             count++;
      //         }
      //         multiple += a;
      //     }
      // }
      // return (leaves - count);
      boolean visited[] = new boolean[leaves+1];
      // Arrays.sort(frogs);
      for(int i=0; i<N; i++){
          int strength = frogs[i];
          if(strength <= leaves && !visited[strength]){
              for(int j = strength; j<= leaves; j += strength){
              visited[j] = true;
              }
          }
      }
      int unVisited = 0;
      for(int i=1; i<= leaves; i++){
          if(visited[i] != true){
              unVisited++;
          }
      }
      return unVisited;
  }
}
