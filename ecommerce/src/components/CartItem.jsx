import React from "react";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity, removeFromCart } from "../redux/cartSlice";
import { Trash, Plus, Minus } from "lucide-react";
import { Button } from "../components/ui/button";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(
      updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 })
    );
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(
        updateCartItemQuantity({ id: item.id, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="p-4 border-b last:border-b-0">
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-6 flex items-center">
          <div className="w-16 h-16 flex-shrink-0 mr-4 bg-gray-100 rounded overflow-hidden relative">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-800">{item.title}</h3>
          </div>
        </div>

        <div className="col-span-2 text-center">
          <span className="text-gray-700">${item.price.toFixed(2)}</span>
        </div>

        <div className="col-span-2 flex items-center justify-center">
          <div className="flex items-center border rounded">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={handleDecreaseQuantity}
            >
              <Minus className="h-3 w-3" fill="currentColor" />
            </Button>
            <span className="w-8 text-center">{item.quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={handleIncreaseQuantity}
            >
              <Plus className="h-3 w-3" fill="currentColor" />
            </Button>
          </div>
        </div>

        <div className="col-span-1 text-right">
          <span className="font-medium">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>

        <div className="col-span-1 text-right">
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={handleRemoveItem}
          >
            <Trash className="h-4 w-4" fill="currentColor" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
