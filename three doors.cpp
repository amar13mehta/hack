#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n,door1=1,door2=2,door3=3,hand,bk1,bk2,bk3,count=0,a,b;
    cin >>n;
    int t=0;
    while (t<n){
        cin>>hand;
        cin>>bk1>>bk2>>bk3;
        if(hand==door3){
            a=bk3;
            hand =a;
            if(hand ==door2){
                b=bk2;
                hand =b;
                
                if(hand == door1){
                    count++;
                }
            }
            if(hand ==door1){
                b=bk1;
                hand =b;
                
                if(hand == door2){
                    count++;
                }
            }
        }
        else if(hand==door2){
            a=bk2;
            hand =a;
            
            if(hand ==door1){
                b=bk1;
                hand =b;
                if(hand == door3){
                    count++;
                }
            }
            if(hand ==door3){
                b=bk3;
                hand =b;
                
                if(hand == door1){
                    count++;
                }
            }
        }
        else {
            a=bk1;
            hand =a;
            if(hand ==door2){
                b=bk2;
                hand =b;
                
                if(hand == door3){
                    count++;
                }
            }
            if(hand ==door3){
                b=bk3;
                hand =b;
               
                if(hand == door2){
                    count++;
                }
            }
        }
        t+=1;
        if(count>0) cout<<"Yes"<<endl;
        else cout<<"No"<<endl;
        count =0;
    }

}