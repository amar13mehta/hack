#include <iostream>
#include <cmath>
using namespace std;

int main() {
	int t,x,y,z,q;
	cin>>t;
	while(t-->0){
	    cin>>x>>y;
	    z=x-y;
	    
	    if(z<0)
	      {
	          z=-z;
	      }
	     if(z%2!=0){
	         if(z==1 || z==-1){
	         cout<<1<<endl;
	     }else{
	         cout<<(z/2)+1<<endl;}
	     } 
	     
	     else {
	      cout<<(z/2)<<endl;}
	     //cout<<z<<" ";
	}
	
	return 0;
}
