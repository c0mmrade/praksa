package jovana;
import java.util.Scanner;

public class Katete {
public static void main(String[]args) {
	 
	 
	 int kateta1;
	 int kateta2;
	 double hipotenuza;,, 
	 
	 Scanner tastatura=new Scanner(System.in);
	 
	 System.out.print("Program racuna hipotenuzu pravouglog trougla za date katete.\n");
	 
	 System.out.print("Unesite duzinu jedne katete:");
	 kateta1=tastatura.nextInt();
	 System.out.print("Unesite duzinu druge katete:");
	 kateta2=tastatura.nextInt();
	  
	 hipotenuza=Math.sqrt(kateta1*kateta1+kateta2*kateta2);
 
	 System.out.print("Duzina hipotenuze je: " + hipotenuza);
}
 
 
 }