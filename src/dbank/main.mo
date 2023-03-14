import Debug "mo:base/Debug";

actor DBank{
  var currentValue = 0;
  // currentValue := 100;

  Debug.print(debug_show(currentValue));

  public func topUp(amount: Nat){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func WithDrawl(amount: Nat){

    if(currentValue >= amount){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
    }
    else{
      Debug.print("Insufficient Balance");
    }
  };

  public query func checkBalance() : async Nat{
    return currentValue;
  }

  // topUp();
}
