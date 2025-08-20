import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Cake, Users, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Cakes = () => {
  const cakeProducts = [
    {
      id: 1,
      name: "Торт Наполеон",
      price: 1200,
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Классический торт с заварным кремом и слоеным тестом",
      weight: "1кг",
      servings: 8,
      category: "Классические",
      isCustomizable: true,
      preparationTime: "24 часа"
    },
    {
      id: 2,
      name: "Торт Красный бархат",
      price: 1500,
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Нежный торт с кремом из сливочного сыра",
      weight: "1.2кг",
      servings: 10,
      category: "Премиум",
      isCustomizable: true,
      preparationTime: "48 часов"
    },
    {
      id: 3,
      name: "Торт Птичье молоко",
      price: 1100,
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Воздушный торт с суфле и шоколадной глазурью",
      weight: "900г",
      servings: 6,
      category: "Классические",
      isCustomizable: false,
      preparationTime: "24 часа"
    },
    {
      id: 4,
      name: "Торт Медовик",
      price: 950,
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Традиционный медовый торт со сметанным кремом",
      weight: "1кг",
      servings: 8,
      category: "Домашние",
      isCustomizable: true,
      preparationTime: "24 часа"
    },
    {
      id: 5,
      name: "Торт Тирамису",
      price: 1400,
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Итальянский десерт с маскарпоне и кофе",
      weight: "1.1кг",
      servings: 9,
      category: "Премиум",
      isCustomizable: false,
      preparationTime: "48 часов"
    },
    {
      id: 6,
      name: "Торт Прага",
      price: 1300,
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Шоколадный торт с абрикосовым джемом",
      weight: "1кг",
      servings: 8,
      category: "Шоколадные",
      isCustomizable: true,
      preparationTime: "24 часа"
    }
  ];

  const categories = [
    "Все торты",
    "Классические",
    "Премиум",
    "Домашние",
    "Шоколадные"
  ];

  const occasions = [
    { name: "День рождения", icon: "🎂" },
    { name: "Свадьба", icon: "💒" },
    { name: "Юбилей", icon: "🎉" },
    { name: "Детский праздник", icon: "🎈" },
    { name: "Корпоратив", icon: "🏢" },
    { name: "Романтический вечер", icon: "💕" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-orange-600 hover:text-orange-700">
                ← Назад
              </Link>
              <Cake className="h-6 w-6 text-pink-600" />
              <h1 className="text-2xl font-bold text-gray-800">Торты</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/custom-orders">
                  <Heart className="h-4 w-4 mr-2" />
                  На заказ
                </Link>
              </Button>
              <Button asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Торты для особых моментов
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Создаем незабываемые торты для ваших праздников. Каждый торт - это произведение искусства, 
            сделанное с любовью и вниманием к деталям.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Для любой компании</h3>
              <p className="text-gray-600 text-center">От 6 до 20 порций</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Calendar className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Предзаказ</h3>
              <p className="text-gray-600 text-center">Готовим за 24-48 часов</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Heart className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Индивидуальный дизайн</h3>
              <p className="text-gray-600 text-center">Украшаем по вашему желанию</p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Торты для любого повода
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((occasion, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 cursor-pointer"
              >
                <span className="text-3xl mb-2">{occasion.icon}</span>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {occasion.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4 bg-gray-50">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cakeProducts.map(product => (
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
                    {product.isCustomizable && (
                      <Badge className="bg-purple-500 hover:bg-purple-600">
                        На заказ
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <span className="text-2xl font-bold text-pink-600">{product.price}₽</span>
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
                      <span className="text-gray-600">Порций:</span>
                      <span className="font-medium">{product.servings}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Готовность:</span>
                      <span className="font-medium">{product.preparationTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Заказать
                    </Button>
                    {product.isCustomizable && (
                      <Button variant="outline" size="sm">
                        Настроить
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Нужен особенный торт?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Создадим торт по вашему индивидуальному дизайну. Любые формы, цвета и украшения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/custom-orders">
                <Heart className="h-5 w-5 mr-2" />
                Заказать индивидуальный торт
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              Посмотреть примеры работ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cakes;