//Rekurzija -funkcija koja poziva sama sebe.	
//Zadatak1
//Wikipedija -Samo jedan disk moze da se pomeri istovremeno
//Svaki potez se sastoji od uzimanja gornjeg diska sa jedne gomile i stavljanjem tog istom na vrh druge gomile
//Nijedan disk ne sme biti smesten na manji disk na stapu
package jovana;
	import java.util.Scanner; 
	//klasa Scanner iz java.util paketa 
	public class Hkula{
			//prvi,drugi,treci odnosi se na stapove
			public static void hanojiKula(int brojDiskova, String prvi,String drugi,String treci) {
				
				// zasto je public static ? 
				// zasto je ova metoda u main klasi uopste ?
				
			//Zadatak zahteva da moze da se upise od 1 do 10 diskova
			if(brojDiskova<1 || brojDiskova>10) {
				System.out.println("Broj diskova ne moze biti manji od 1 ili veci od 10");
				return;
				//Odnosi se na manji disk koji je na vrhu
			}  if(brojDiskova==1) {
				
				System.out.println("Staviti disk 1 sa " + prvi + " " +"na"+ " "+ drugi);
				return;
			}
				// hajde da idemo bez multiple return pointa 
				
				
			//Oduzimanje gornjeg diska
			hanojiKula(brojDiskova-1,prvi,treci,drugi);
			System.o§ut.println("Staviti disk " + brojDiskova + " "+ "sa" + " " + prvi + " "+"na" + " "+drugi);
			hanojiKula(brojDiskova-1,treci,drugi,prvi);
				
			}
			public  static void main(String[]args) {
			
            		Scanner ulaz=new Scanner(System.in);
			System.out.println("Unesite broj diskova od 1-10:");
		
				// redosled ti nije dobar
				// i ovo ide u odvojenu metodu 
				
			int brojDiskova=ulaz.nextInt();
			//Po formuli sa Wikipedije najmanji broj poteza se racuna po formuli 2 na n-1
			System.out.print("Najmanji broj poteza koje mozete sa " +brojDiskova+ " disk-a"+ " " +"je:"+" " +(Math.pow(2,brojDiskova)-1)+"\n");
			//Za blanko liniju
			System.out.println();
			hanojiKula(brojDiskova,"stapPrvi" ,"stapDrugi", "StapTreci");		
			}
			}

// trazio sam zapis u file 
// molim te jos jednom da ne koristis prazne linije nego line separator
// znaci u main class hocu da imam samo logiku za runtime: scan(); createSteps() itd. 
// Broj poteza nisam trazio, al ok :) 



	
