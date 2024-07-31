import java.util.*;

public class Permutation {

  static ArrayList<String>arr;

  public static void main(String args[]) {

   arr = new ArrayList<>();

   permute("abc", "");

   System.out.println(arr);

  }

  public static void permute(String init, String fin)

  {

    if (init.length()==0)

      arr.add(fin);

    for (int i=0; i<init.length();i++)

    {

      String sub = new String(fin);

      sub = sub + init.charAt(i);

      String s = new String(init.substring(0,i)+init.substring(i+1));

      permute(s,sub);

    }

    return;

  }

}