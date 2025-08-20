import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Calendar, Users, Palette, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CustomOrders = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productType: "",
    servings: "",
    date: "",
    description: "",
    budget: ""
  });

  const productTypes = [
    "Торт на заказ",
    "Свадебный торт",
    "Детский торт",
    "Корпоративный торт",
    "Капкейки",
    "Пирожные",
    "Хлеб специальный",
    "Другое"
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Свадебный торт 'Розы'",
      description: "Трехъярусный торт с живыми розами",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      servings: 50,
      price: "от 8000₽"
    },
    {
      id: 2,
      title: "Детский торт 'Единорог'",
      description: "Яркий торт с фигуркой единорога",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      servings: 12,
      price: "от 3500₽"
    },
    {
      id: 3,
      title: "Корпоративный торт",
      description: "Торт с логотипом компании",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
      servings: 30,
      price: "от 5000₽"
    },
    {
      id: 4,
      title: "Торт 'Фото на заказ'",
      description: "Торт с съедобной фотопечатью",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
      servings: 16,
      price: "от 2800₽"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заказ отправлен:", formData);
    // Здесь будет логика отправки заказа
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-orange-600 hover:text-orange-700">
                ← Назад
              </Link>
              <ChefHat className="h-6 w-6 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-800">Индивидуальные заказы</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Создаем торты вашей мечты
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Воплотим любую вашу идею в жизнь. Индивидуальный дизайн, уникальные вкусы, 
            профессиональное исполнение для ваших особых моментов.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Palette className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Любой дизайн</h3>
              <p className="text-gray-600 text-center text-sm">Воплотим вашу идею</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Любой размер</h3>
              <p className="text-gray-600 text-center text-sm">От 6 до 100+ порций</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Calendar className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Точно в срок</h3>
              <p className="text-gray-600 text-center text-sm">Готовим за 2-7 дней</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <ChefHat className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Мастер-класс</h3>
              <p className="text-gray-600 text-center text-sm">15 лет опыта</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Оформить заказ</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами для обсуждения деталей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                      <Input
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон *</label>
                      <Input
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Тип изделия *</label>
                      <Select value={formData.productType} onValueChange={(value) => setFormData({...formData, productType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          {productTypes.map((type, index) => (
                            <SelectItem key={index} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Количество порций</label>
                      <Input
                        placeholder="Например: 12"
                        value={formData.servings}
                        onChange={(e) => setFormData({...formData, servings: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Дата нужности *</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Бюджет</label>
                      <Input
                        placeholder="Например: 5000₽"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание заказа *</label>
                    <Textarea
                      placeholder="Опишите ваши пожелания: дизайн, цвета, вкус, особые требования..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заказ
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Свяжитесь с нами напрямую</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">+7 (495) 123-45-67</p>
                      <p className="text-sm text-gray-600">Ежедневно с 9:00 до 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">orders@kolos-bakery.ru</p>
                      <p className="text-sm text-gray-600">Ответим в течение часа</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Наши работы</h3>
            <div className="space-y-6">
              {portfolioItems.map(item => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow duration-200">
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full md:w-48 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <Badge variant="secondary">{item.servings} порций</Badge>
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-purple-600">{item.price}</span>
                          <Button variant="outline" size="sm">
                            Заказать похожий
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Как мы работаем
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Заявка</h4>
              <p className="text-gray-600 text-sm">Вы оставляете заявку с описанием желаемого изделия</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Консультация</h4>
              <p className="text-gray-600 text-sm">Мы связываемся с вами для уточнения деталей</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Эскиз</h4>
              <p className="text-gray-600 text-sm">Создаем эскиз и согласовываем с вами</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Изготовление</h4>
              <p className="text-gray-600 text-sm">Готовим ваш заказ точно в срок</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomOrders;