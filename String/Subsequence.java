import java.util.*;

public class Subsequence {

  static ArrayList<String> arr;

  public static void main(String args[]) {

   arr = new ArrayList<>();

   permute("abcd","");

   System.out.println(arr);

  }

  public static void permute(String init, String fin){

    if(init.length() == 0){

      arr.add(fin);

      return;

    }

       

    String nfin = new String(fin);

    nfin = nfin + init.charAt(0);
    System.out.println("init"+init);

    String ninit = new String(init.substring(1,init.length()));

    System.out.println(""+ninit+"_" +nfin);

    permute(ninit,nfin);

    permute(new String(init.substring(1,init.length())),fin);

    return;

     

  } 

}