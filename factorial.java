// Faktorijal
package juniorjava;
import java.util.Scanner;
public class factorial {
public static void main(String[]args) {
	
	int n;
	int resenje=1;
	 Scanner tastatura= new Scanner(System.in);
	 System.out.println("Unesite broj:");
	 n=tastatura.nextInt();
	 if (n<1)
	 {
		return;
	 }
	 for(int i=1; i<=n; i++) {
		 resenje*=i;
		
		 
	 }
	
	 System.out.println(resenje);
	
	
	
	
}
}
