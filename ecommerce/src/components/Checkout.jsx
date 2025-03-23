import { useState, useEffect } from "react";
import { useRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/selectors";
import { clearCart } from "../redux/cartSlice";
import { Button } from "../components/ui/button";
import { Check } from "lucide-react";

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0 && !isOrderPlaced) {
      router.push("/cart");
    }
  }, [cartItems, isOrderPlaced, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      dispatch(clearCart());
      setIsOrderPlaced(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (isOrderPlaced) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <div className="bg-green-100 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
          <Check className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received.
        </p>
        <Button onClick={() => router.push("/")}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="border-t border-b py-4 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <div className="flex items-center">
                    <span className="font-medium">{item.quantity} x</span>
                    <span className="ml-2 text-gray-700 truncate max-w-[150px]">
                      {item.title}
                    </span>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between font-semibold text-lg mb-2">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
