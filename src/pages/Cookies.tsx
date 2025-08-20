import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Cookie, Heart, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
  const cookieProducts = [
    {
      id: 1,
      name: "Печенье овсяное",
      price: 180,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Домашнее овсяное печенье с изюмом и орехами",
      weight: "300г",
      pieces: 12,
      category: "Домашнее",
      isVegan: false,
      shelfLife: "7 дней"
    },
    {
      id: 2,
      name: "Имбирное печенье",
      price: 220,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ароматное печенье с имбирем и корицей",
      weight: "250г",
      pieces: 10,
      category: "Пряное",
      isVegan: false,
      shelfLife: "10 дней"
    },
    {
      id: 3,
      name: "Шоколадное печенье",
      price: 250,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Мягкое печенье с кусочками темного шоколада",
      weight: "280г",
      pieces: 8,
      category: "Шоколадное",
      isVegan: false,
      shelfLife: "5 дней"
    },
    {
      id: 4,
      name: "Песочное печенье",
      price: 200,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Классическое рассыпчатое песочное печенье",
      weight: "320г",
      pieces: 15,
      category: "Классическое",
      isVegan: false,
      shelfLife: "14 дней"
    },
    {
      id: 5,
      name: "Веганское печенье",
      price: 280,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Полезное печенье без яиц и молочных продуктов",
      weight: "250г",
      pieces: 10,
      category: "Веганское",
      isVegan: true,
      shelfLife: "7 дней"
    },
    {
      id: 6,
      name: "Печенье с предсказаниями",
      price: 150,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Хрустящее печенье с записками-предсказаниями",
      weight: "200г",
      pieces: 20,
      category: "Подарочное",
      isVegan: false,
      shelfLife: "30 дней"
    },
    {
      id: 7,
      name: "Миндальное печенье",
      price: 320,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Нежное печенье с миндальной мукой",
      weight: "200г",
      pieces: 8,
      category: "Премиум",
      isVegan: false,
      shelfLife: "5 дней"
    },
    {
      id: 8,
      name: "Детское печенье",
      price: 160,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Безопасное печенье для малышей без сахара",
      weight: "200г",
      pieces: 16,
      category: "Детское",
      isVegan: false,
      shelfLife: "7 дней"
    }
  ];

  const categories = [
    "Все печенье",
    "Домашнее",
    "Шоколадное",
    "Классическое",
    "Веганское",
    "Премиум",
    "Детское",
    "Подарочное"
  ];

  const giftSets = [
    {
      name: "Набор 'Ассорти'",
      description: "5 видов печенья в красивой коробке",
      price: 450,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Набор 'Детский'",
      description: "Безопасное печенье для детей",
      price: 320,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Набор 'Премиум'",
      description: "Изысканное печенье в подарочной упаковке",
      price: 680,
      image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-orange-600 hover:text-orange-700">
                ← Назад
              </Link>
              <Cookie className="h-6 w-6 text-amber-600" />
              <h1 className="text-2xl font-bold text-gray-800">Печенье</h1>
            </div>
            <Button asChild>
              <Link to="/cart">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Корзина
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Домашнее печенье на любой вкус
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            От классического овсяного до изысканного миндального - у нас есть печенье для каждого. 
            Готовим небольшими партиями, чтобы сохранить домашний вкус и свежесть.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Cookie className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Домашний вкус</h3>
              <p className="text-gray-600 text-center text-sm">Как у бабушки</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Heart className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Натуральные ингредиенты</h3>
              <p className="text-gray-600 text-center text-sm">Без консервантов</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Gift className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Подарочные наборы</h3>
              <p className="text-gray-600 text-center text-sm">Красивая упаковка</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <span className="text-3xl mb-4">🌱</span>
              <h3 className="text-lg font-semibold mb-2">Веганские варианты</h3>
              <p className="text-gray-600 text-center text-sm">Для всех типов питания</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cookieProducts.map(product => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-200">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <Badge variant="secondary">
                      {product.category}
                    </Badge>
                    {product.isVegan && (
                      <Badge className="bg-green-500 hover:bg-green-600">
                        Веган
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <span className="text-xl font-bold text-amber-600">{product.price}₽</span>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Вес:</span>
                      <span className="font-medium">{product.weight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Количество:</span>
                      <span className="font-medium">{product.pieces} шт</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Срок хранения:</span>
                      <span className="font-medium">{product.shelfLife}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Sets */}
      <section className="py-12 px-4 bg-amber-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Подарочные наборы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {giftSets.map((set, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <img
                  src={set.image}
                  alt={set.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{set.name}</CardTitle>
                    <span className="text-2xl font-bold text-amber-600">{set.price}₽</span>
                  </div>
                  <CardDescription>{set.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Gift className="h-4 w-4 mr-2" />
                      Заказать набор
                    </Button>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Почему наше печенье особенное
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥛</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Натуральные продукты</h4>
              <p className="text-gray-600 text-sm">Используем только фермерское масло и свежие яйца</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Ручная работа</h4>
              <p className="text-gray-600 text-sm">Каждое печенье формируется и украшается вручную</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Красивая упаковка</h4>
              <p className="text-gray-600 text-sm">Подарочные коробки и пакеты для любого случая</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Всегда свежее</h4>
              <p className="text-gray-600 text-sm">Выпекаем ежедневно небольшими партиями</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;