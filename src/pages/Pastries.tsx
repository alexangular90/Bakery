import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Coffee, Clock, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const Pastries = () => {
  const pastryProducts = [
    {
      id: 1,
      name: "Круассан с шоколадом",
      price: 120,
      image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Слоеный круассан с бельгийским шоколадом",
      weight: "80г",
      calories: 285,
      isHot: true,
      category: "Слоеная выпечка"
    },
    {
      id: 2,
      name: "Эклер с кремом",
      price: 95,
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Воздушный эклер с ванильным кремом",
      weight: "70г",
      calories: 220,
      isHot: false,
      category: "Заварная выпечка"
    },
    {
      id: 3,
      name: "Пирожок с капустой",
      price: 65,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Домашний пирожок с тушеной капустой",
      weight: "120г",
      calories: 195,
      isHot: true,
      category: "Пирожки"
    },
    {
      id: 4,
      name: "Булочка с маком",
      price: 75,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Сдобная булочка с маковой начинкой",
      weight: "90г",
      calories: 245,
      isHot: false,
      category: "Сдобная выпечка"
    },
    {
      id: 5,
      name: "Слойка с яблоком",
      price: 85,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Хрустящая слойка с яблочной начинкой",
      weight: "100г",
      calories: 210,
      isHot: true,
      category: "Слоеная выпечка"
    },
    {
      id: 6,
      name: "Профитроль",
      price: 45,
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Маленький профитроль с кремом",
      weight: "35г",
      calories: 125,
      isHot: false,
      category: "Заварная выпечка"
    },
    {
      id: 7,
      name: "Ватрушка с творогом",
      price: 90,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Традиционная ватрушка с домашним творогом",
      weight: "110г",
      calories: 235,
      isHot: false,
      category: "Сдобная выпечка"
    },
    {
      id: 8,
      name: "Беляш с мясом",
      price: 110,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Сочный беляш с мясной начинкой",
      weight: "150г",
      calories: 320,
      isHot: true,
      category: "Пирожки"
    }
  ];

  const categories = [
    "Все категории",
    "Слоеная выпечка",
    "Заварная выпечка", 
    "Пирожки",
    "Сдобная выпечка"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-orange-600 hover:text-orange-700">
                ← Назад
              </Link>
              <Coffee className="h-6 w-6 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-800">Выпечка</h1>
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
            Свежая выпечка к вашему столу
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ароматные круассаны, воздушные эклеры, сочные пирожки и нежные булочки. 
            Каждое изделие готовится с любовью по проверенным рецептам.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Горячая выпечка</h3>
              <p className="text-gray-600 text-center">Некоторые изделия подаются горячими</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <ChefHat className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Ручная работа</h3>
              <p className="text-gray-600 text-center">Каждое изделие формируется вручную</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Coffee className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">К чаю и кофе</h3>
              <p className="text-gray-600 text-center">Идеально подходит для завтрака и перекуса</p>
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
            {pastryProducts.map(product => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-200">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.isHot && (
                      <Badge className="bg-red-500 hover:bg-red-600">
                        Горячее
                      </Badge>
                    )}
                    <Badge variant="secondary">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <span className="text-xl font-bold text-orange-600">{product.price}₽</span>
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
                      <span className="text-gray-600">Калории:</span>
                      <span className="font-medium">{product.calories} ккал</span>
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

      {/* Special Offers */}
      <section className="py-12 px-4 bg-orange-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Специальные предложения
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Комбо "Завтрак"</CardTitle>
                <CardDescription className="text-orange-100">
                  Круассан + кофе = идеальное утро
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm line-through opacity-75">180₽</span>
                    <span className="text-2xl font-bold ml-2">150₽</span>
                  </div>
                  <Button variant="secondary">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Набор "Семейный"</CardTitle>
                <CardDescription className="text-yellow-100">
                  5 пирожков разных видов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm line-through opacity-75">400₽</span>
                    <span className="text-2xl font-bold ml-2">320₽</span>
                  </div>
                  <Button variant="secondary">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pastries;