import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Clock, Wheat, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Bread = () => {
  const breadProducts = [
    {
      id: 1,
      name: "Хлеб бородинский",
      price: 85,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Традиционный русский хлеб с кориандром и солодом",
      weight: "500г",
      ingredients: "Мука ржаная, пшеничная, солод, кориандр, соль, дрожжи",
      shelfLife: "3 дня",
      isOrganic: true
    },
    {
      id: 2,
      name: "Багет французский",
      price: 95,
      image: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Хрустящий французский багет с золотистой корочкой",
      weight: "400г",
      ingredients: "Мука пшеничная, вода, соль, дрожжи",
      shelfLife: "1 день",
      isOrganic: false
    },
    {
      id: 3,
      name: "Хлеб цельнозерновой",
      price: 120,
      image: "https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Полезный хлеб из цельнозерновой муки с семенами",
      weight: "600г",
      ingredients: "Мука цельнозерновая, семена подсолнечника, льна, тыквы",
      shelfLife: "4 дня",
      isOrganic: true
    },
    {
      id: 4,
      name: "Хлеб белый формовой",
      price: 65,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Классический белый хлеб для всей семьи",
      weight: "450г",
      ingredients: "Мука пшеничная высшего сорта, молоко, масло, соль, дрожжи",
      shelfLife: "2 дня",
      isOrganic: false
    },
    {
      id: 5,
      name: "Хлеб с отрубями",
      price: 90,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Диетический хлеб с пшеничными отрубями",
      weight: "500г",
      ingredients: "Мука пшеничная, отруби пшеничные, соль, дрожжи",
      shelfLife: "3 дня",
      isOrganic: true
    },
    {
      id: 6,
      name: "Хлеб ржаной",
      price: 80,
      image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ароматный ржаной хлеб на закваске",
      weight: "500г",
      ingredients: "Мука ржаная, закваска ржаная, соль",
      shelfLife: "4 дня",
      isOrganic: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-orange-600 hover:text-orange-700">
                ← Назад
              </Link>
              <Wheat className="h-6 w-6 text-amber-600" />
              <h1 className="text-2xl font-bold text-gray-800">Хлеб</h1>
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
            Свежий хлеб каждый день
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Наш хлеб выпекается ежедневно из отборной муки по традиционным рецептам. 
            Мы используем только натуральные ингредиенты без консервантов и улучшителей.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Выпекаем с 4 утра</h3>
              <p className="text-gray-600 text-center">Свежий хлеб готов к открытию магазина</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Wheat className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Натуральные ингредиенты</h3>
              <p className="text-gray-600 text-center">Только качественная мука и натуральные добавки</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Award className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">15 лет опыта</h3>
              <p className="text-gray-600 text-center">Проверенные временем рецепты и технологии</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breadProducts.map(product => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow duration-200">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.isOrganic && (
                    <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                      Эко
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <span className="text-2xl font-bold text-amber-600">{product.price}₽</span>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Вес:</span>
                      <span className="font-medium">{product.weight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Срок хранения:</span>
                      <span className="font-medium">{product.shelfLife}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Состав:</span>
                      <p className="text-xs text-gray-500 mt-1">{product.ingredients}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Польза нашего хлеба
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-3 text-amber-600">Натуральные ингредиенты</h4>
                <p className="text-gray-600">
                  Мы используем только высококачественную муку, натуральные дрожжи и закваски. 
                  Никаких искусственных добавок, консервантов или улучшителей вкуса.
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-3 text-amber-600">Традиционные рецепты</h4>
                <p className="text-gray-600">
                  Наши рецепты передаются из поколения в поколение. Мы сохраняем традиции 
                  русского хлебопечения и используем проверенные временем технологии.
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-3 text-amber-600">Свежесть каждый день</h4>
                <p className="text-gray-600">
                  Хлеб выпекается ежедневно небольшими партиями, что гарантирует его свежесть 
                  и неповторимый аромат. Доставляем в день выпечки.
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-3 text-amber-600">Полезные свойства</h4>
                <p className="text-gray-600">
                  Наш хлеб богат витаминами группы B, клетчаткой и минералами. 
                  Цельнозерновые сорта особенно полезны для пищеварения и общего здоровья.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bread;