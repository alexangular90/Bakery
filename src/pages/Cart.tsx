import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, Gift, Truck, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Хлеб бородинский",
      price: 85,
      quantity: 2,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      weight: "500г"
    },
    {
      id: 2,
      name: "Круассан с шоколадом",
      price: 120,
      quantity: 3,
      image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400",
      weight: "80г"
    },
    {
      id: 3,
      name: "Торт Наполеон",
      price: 1200,
      quantity: 1,
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      weight: "1кг"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [deliveryType, setDeliveryType] = useState("delivery");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = deliveryType === "delivery" ? (subtotal >= 1000 ? 0 : 150) : 0;
  const discount = promoCode === "FIRST10" ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - discount;

  const promoCodes = [
    { code: "FIRST10", description: "Скидка 10% на первый заказ" },
    { code: "SWEET20", description: "Скидка 20% на торты" },
    { code: "BREAD15", description: "Скидка 15% на хлеб" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-orange-600 hover:text-orange-700">
                ← Продолжить покупки
              </Link>
              <ShoppingCart className="h-6 w-6 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-800">Корзина</h1>
            </div>
            <Badge variant="secondary">
              {cartItems.length} товар{cartItems.length > 1 ? 'а' : ''}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Корзина пуста</h2>
            <p className="text-gray-500 mb-8">Добавьте товары из каталога</p>
            <Button asChild size="lg">
              <Link to="/catalog">Перейти в каталог</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Товары в корзине</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.weight}</p>
                            <p className="text-lg font-bold text-orange-600">{item.price}₽</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{item.price * item.quantity}₽</p>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Promo Codes */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gift className="h-5 w-5 mr-2" />
                    Промокод
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <Input
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline">Применить</Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Доступные промокоды:</p>
                    {promoCodes.map((promo, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">{promo.code}</span>
                        <span className="text-gray-600">{promo.description}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Итого к оплате</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Товары ({cartItems.length}):</span>
                      <span>{subtotal}₽</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Скидка по промокоду:</span>
                        <span>-{discount}₽</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>{deliveryFee === 0 ? "Бесплатно" : `${deliveryFee}₽`}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Итого:</span>
                      <span>{total}₽</span>
                    </div>
                  </div>

                  {subtotal < 1000 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700">
                        Добавьте товаров на {1000 - subtotal}₽ для бесплатной доставки
                      </p>
                    </div>
                  )}

                  <div className="mt-6 space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/payment">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Оформить заказ
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/delivery">
                        <Truck className="h-4 w-4 mr-2" />
                        Выбрать доставку
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Options */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Способ получения</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="delivery"
                        value="delivery"
                        checked={deliveryType === "delivery"}
                        onChange={(e) => setDeliveryType(e.target.value)}
                        className="text-orange-600"
                      />
                      <div>
                        <p className="font-medium">Доставка</p>
                        <p className="text-sm text-gray-500">30-90 минут</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="delivery"
                        value="pickup"
                        checked={deliveryType === "pickup"}
                        onChange={(e) => setDeliveryType(e.target.value)}
                        className="text-orange-600"
                      />
                      <div>
                        <p className="font-medium">Самовывоз</p>
                        <p className="text-sm text-gray-500">ул. Хлебная, 15</p>
                      </div>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;